import { IResourceComponentsProps, useApiUrl, useSelect } from '@pankod/refine-core';
import { Create, Form, Input, useForm, Select, DatePicker } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICustomer, IOrderItem, IOrder, IProduct } from 'interfaces';
import dayjs from 'dayjs';

export const OrderItemCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IOrderItem>();
  const { queryResult: datates } = useSelect<IOrder>({
    resource: 'order',
    fetchSize: 100,
  });

  const { queryResult: datateslagi } = useSelect<IProduct>({
    resource: 'product',
    fetchSize: 100,
  });

  const selectOptions = datates.data?.data.map((item: IOrder) => ({
    label: item.ID,
    value: item.ID,
  }));
  const selectOptions2 = datateslagi.data?.data.map((item: IProduct) => ({
    label: item.ProductName,
    value: item.ID,
  }));
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Order ID"
          name="OrderID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item
          label="Product ID"
          name="ProductID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions2} />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Create>
  );
};
