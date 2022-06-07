import { Create, Form, Input, Drawer, DrawerProps, FormProps } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { BaseKey } from '@pankod/refine-core';

export const ServicePackageCreate: React.FC<{
  drawerProps: DrawerProps;
  formProps: FormProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveButtonProps: any;
  serviceId?: BaseKey;
}> = (props) => {
  const { drawerProps, formProps, saveButtonProps, serviceId } = props;

  return (
    <Drawer {...drawerProps}>
      <Create saveButtonProps={saveButtonProps} title="Create Service Package">
        <Form {...formProps} layout="vertical">
          <Form.Item
            name="serviceId"
            initialValue={serviceId}
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
            label="Title"
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Delivery Time"
            name="deliveryTime"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
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
    </Drawer>
  );
};
