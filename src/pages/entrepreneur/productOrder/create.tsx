import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  Drawer,
  DrawerProps,
  FormProps,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IProduct } from 'interfaces';
import { BaseKey } from '@pankod/refine-core';

export const ProductOrderCreate: React.FC<{
  drawerProps: DrawerProps;
  formProps: FormProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveButtonProps: any;
  entrepreneurId?: BaseKey;
}> = (props) => {
  const { drawerProps, formProps, saveButtonProps, entrepreneurId } = props;
  const { selectProps: productSelectProps } = useSelect<IProduct>({
    resource: 'product',
    fetchSize: 1000,
  });

  return (
    <Drawer {...drawerProps}>
      <Create saveButtonProps={saveButtonProps} title="Create Product Order">
        <Form {...formProps} layout="vertical">
          <Form.Item
            name="entrepreneurId"
            initialValue={entrepreneurId}
            hidden={true}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <input type="hidden" />
          </Form.Item>
          <Form.Item
            label="Product"
            name="productId"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select {...productSelectProps} />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Order Status"
            name="status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              options={[
                {
                  label: 'PAYMENT PENDING',
                  value: '0',
                },
                {
                  label: 'PAYMENT PAID',
                  value: '1',
                },
                {
                  label: 'PROCESSING ORDER',
                  value: '2',
                },
                {
                  label: 'DELIVERING ORDER',
                  value: '3',
                },
                {
                  label: 'ORDER COMPLETED',
                  value: '4',
                },
                {
                  label: 'ORDER FAILED',
                  value: '99',
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Tracker Id"
            name="trackerId"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Create>
    </Drawer>
  );
};
