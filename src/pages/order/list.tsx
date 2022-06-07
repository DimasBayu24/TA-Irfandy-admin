import { IResourceComponentsProps, useMany } from '@pankod/refine-core';
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  ShowButton,
} from '@pankod/refine-antd';
import { ICustomer, IOrder } from 'interfaces';
import dayjs from 'dayjs';

export const OrderList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IOrder>({
    initialSorter: [
      {
        field: 'ID',
        order: 'desc',
      },
    ],
  });

  const userIds = tableProps?.dataSource?.map((item) => item.UserID) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICustomer>({
    resource: 'user',
    ids: userIds,
    queryOptions: {
      enabled: userIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="ID"
          key="ID"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="UserID"
          title="User ID"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField value={categoriesData?.data.find((item) => item.ID === value)?.Fullname} />
            );
          }}
        />
        <Table.Column
          dataIndex="Status"
          key="Status"
          title="Status"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="TotalPrice"
          key="TotalPrice"
          title="Total Price"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="OrderDate"
          key="OrderDate"
          title="Order Date"
          render={(value) => <TextField value={dayjs(value).format('YYYY-MM-DD')} />}
          defaultSortOrder={getDefaultSortOrder('eventTime', sorter)}
          sorter
        />
        <Table.Column<IOrder>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.ID} />
              <ShowButton hideText size="small" recordItemId={record.ID} />
              <DeleteButton hideText size="small" recordItemId={record.ID} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
