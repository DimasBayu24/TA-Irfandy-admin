import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ITransportation } from 'interfaces';

export const TransportationEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<ITransportation>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Type"
          name="Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Size"
          name="Size"
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
          name="Price"
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
  );
};
