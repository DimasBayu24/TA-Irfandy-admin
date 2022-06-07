import { AxiosInstance } from 'axios';
import { DataProvider, LogicalFilter } from '@pankod/refine-core';
import { stringify } from 'query-string';
import Axios from 'utils/axios';
import { omit, isEmpty, isNil, omitBy } from 'lodash';

const normalizeResource = (resource: string) => {
  const lastCharacter = resource.slice(resource.length - 1);

  if (lastCharacter !== 'y') return `${resource}s`;

  return `${resource.slice(0, -1)}ies`;
};

const operator: { key: string; value: string }[] = [
  {
    key: 'ne',
    value: 'ne',
  },
  {
    key: 'lt',
    value: 'lt',
  },
  {
    key: 'gt',
    value: 'gt',
  },
  {
    key: 'lte',
    value: 'lte',
  },
  {
    key: 'gte',
    value: 'gte',
  },
  {
    key: 'in',
    value: 'in',
  },
  {
    key: 'nin',
    value: 'notIn',
  },
  {
    key: 'contains',
    value: 'contains',
  },
  {
    key: 'ncontains',
    value: 'notContains',
  },
  {
    key: 'between',
    value: 'between',
  },
];

export const DashboardDataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = Axios,
): DataProvider => ({
  create: async ({ resource, variables }) => {
    const keys = Object.keys(variables).filter((x) => x.includes('FilesNormalizer'));
    const body = omitBy(omit(Object.assign({}, variables), keys), isNil);

    console.log('sungguh ini hanya test', body.Price);
    console.log('sungguh ini hanya test lagi', keys);
    if (body.Price) {
      body.Price = +body.Price;
    }
    if (body.TransportationQty) {
      body.TransportationQty = +body.TransportationQty;
    }
    if (body.TotalPrice) {
      body.TotalPrice = +body.TotalPrice;
    }
    if (body.Size) {
      body.Size = +body.Size;
    }
    if (body.Stock) {
      body.Stock = +body.Stock;
    }
    if (body.Quantity) {
      body.Quantity = +body.Quantity;
    }
    const url = `${apiUrl}/${resource}`;

    const { data } = await httpClient.post(url, body);

    return {
      data,
    };
  },
  createMany: async ({ resource, variables }) => {
    const response = await Promise.all(
      variables.map(async (variable) => {
        const { data } = await httpClient.post(`${apiUrl}/${resource}`, variable);
        return data;
      }),
    );

    return { data: response };
  },
  deleteOne: async ({ resource, id }) => {
    const url = `${apiUrl}/${resource}/delete?${stringify({ id })}`;

    const { data } = await httpClient.delete(url);

    return {
      data,
    };
  },
  deleteMany: async ({ resource, ids }) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const { data } = await httpClient.delete(
          `${apiUrl}/${resource}/delete?${stringify({ id })}`,
        );
        return data;
      }),
    );
    return { data: response };
  },
  getList: async ({ resource, pagination, sort, filters }) => {
    const normalizedResource = normalizeResource(resource);
    const url = `${apiUrl}/${normalizedResource}`;

    const current = pagination?.current || 1;
    const pageSize = pagination?.pageSize || 10;
    const order = sort?.map((x) => [x.field, x.order]);
    const where: { [key: string]: { [key: string]: unknown } } = {};
    filters
      ?.filter(
        (x) =>
          (x as LogicalFilter).field !== undefined &&
          (x as LogicalFilter).operator !== undefined &&
          (x as LogicalFilter).value !== undefined,
      )
      .forEach((y) => {
        if (y.operator === 'eq') {
          where[y.field] = y.value;
        } else {
          const key = operator.find((x) => x.key === y.operator);
          where[(y as LogicalFilter).field] = {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            [key!.value]: y.value,
          };
        }
      });

    const query = {
      offset: (current - 1) * pageSize,
      limit: pageSize,
      order: JSON.stringify(order),
      where: JSON.stringify(where),
    };

    const { data, headers } = await httpClient.get(`${url}?${stringify(query)}`);

    const total = +headers['x-total-count'];

    return {
      data,
      total,
    };
  },
  getMany: async ({ resource, ids }) => {
    const normalizedResource = normalizeResource(resource);
    const url = `${apiUrl}/${normalizedResource}`;

    const query = {
      where: JSON.stringify({
        id: ids,
      }),
    };

    const { data } = await httpClient.get(`${url}?${stringify(query)}`);

    return { data };
  },
  getOne: async ({ resource, id }) => {
    const url = `${apiUrl}/${resource}?${stringify({ id })}`;

    const { data } = await httpClient.get(url);

    return {
      data,
    };
  },
  update: async ({ resource, id, variables }) => {
    const keys = Object.keys(variables).filter((x) => x.includes('FilesNormalizer'));
    const body = omitBy(omit(Object.assign({}, variables), keys), isNil);
    console.log('tes aja ya:,', body);

    if (body.Price) {
      body.Price = +body.Price;
    }
    if (body.TransportationQty) {
      body.TransportationQty = +body.TransportationQty;
    }
    if (body.TotalPrice) {
      body.TotalPrice = +body.TotalPrice;
    }
    if (body.Size) {
      body.Size = +body.Size;
    }
    if (body.Stock) {
      body.Stock = +body.Stock;
    }
    if (body.Quantity) {
      body.Quantity = +body.Quantity;
    }
    const url = `${apiUrl}/${resource}/patch?${stringify({ id })}`;

    const { data } = await httpClient.patch(url, body);

    return {
      data,
    };
  },
  updateMany: async ({ resource, ids, variables }) => {
    const response = await Promise.all(
      ids.map(async (id) => {
        const { data } = await httpClient.patch(
          `${apiUrl}/${resource}/patch?${stringify({ id })}`,
          variables,
        );
        return data;
      }),
    );

    return { data: response };
  },
  custom: async ({ url, method, filters, sort, payload, query, headers }) => {
    let requestUrl = `${url}?`;

    const order = sort?.map((x) => [x.field, x.order]);
    const where: { [key: string]: { [key: string]: unknown } } = {};

    filters
      ?.filter(
        (x) =>
          (x as LogicalFilter).field !== undefined &&
          (x as LogicalFilter).operator !== undefined &&
          (x as LogicalFilter).value !== undefined,
      )
      .forEach((y) => {
        if (y.operator === 'eq') {
          where[y.field] = y.value;
        } else {
          const key = operator.find((x) => x.key === y.operator);
          where[(y as LogicalFilter).field] = {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            [key!.value]: y.value,
          };
        }
      });

    if (!isEmpty(order)) {
      query = {
        ...query,
        order: JSON.stringify(order),
      };
    }

    if (!isEmpty(where)) {
      query = {
        ...query,
        where: JSON.stringify(where),
      };
    }

    if (query) {
      requestUrl = `${requestUrl}&${stringify(query)}`;
    }

    if (headers) {
      httpClient.defaults.headers = {
        ...httpClient.defaults.headers,
        ...headers,
      };
    }

    let axiosResponse;
    switch (method) {
      case 'put':
      case 'post':
      case 'patch':
        axiosResponse = await httpClient[method](url, payload);
        break;
      case 'delete':
        axiosResponse = await httpClient.delete(url);
        break;
      default:
        axiosResponse = await httpClient.get(requestUrl);
        break;
    }

    const { data } = axiosResponse;

    return Promise.resolve({ data });
  },
  getApiUrl: () => `${process.env.REACT_APP_BASE_URL}`,
});
