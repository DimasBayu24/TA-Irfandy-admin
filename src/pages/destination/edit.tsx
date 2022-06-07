import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IDestination } from 'interfaces';

export const DestinationEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IDestination>();
  console.log({ ...formProps });
  console.log({ form });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Place"
          name="Place"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Place Option"
          name="PlaceOption"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
