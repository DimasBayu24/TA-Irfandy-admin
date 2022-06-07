import { IResourceComponentsProps, useApiUrl, useSelect } from '@pankod/refine-core';
import { Create, Form, Input, useForm, Select, DatePicker } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICustomer, IOrder, IUser } from 'interfaces';
import dayjs from 'dayjs';

export const OrderCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IOrder>();
  const { queryResult: datates } = useSelect<ICustomer>({
    resource: 'user',
    fetchSize: 100,
  });

  const selectOptions = datates.data?.data.map((item: ICustomer) => ({
    label: item.Fullname,
    value: item.ID,
  }));
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User ID"
          name="UserID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="Status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Not Done',
                value: 'Not_Done',
              },
              {
                label: 'Done',
                value: 'Done',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="TotalPrice"
          name="TotalPrice"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Order Date"
          name="OrderDate"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Create>
  );
};
