/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit, Form, Input, Drawer, DrawerProps, FormProps } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { BaseKey } from '@pankod/refine-core';

export const ServicePackageEdit: React.FC<{
  drawerProps: DrawerProps;
  saveButtonProps: any;
  formProps: FormProps;
  id: string | undefined;
  serviceId?: BaseKey;
  formLoading: boolean;
}> = (props) => {
  const { drawerProps, saveButtonProps, formProps, id, serviceId, formLoading } = props;

  return (
    <Drawer {...drawerProps}>
      <Edit
        saveButtonProps={{ ...saveButtonProps, disabled: formLoading }}
        recordItemId={id}
        resource="service-package"
      >
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
      </Edit>
    </Drawer>
  );
};
