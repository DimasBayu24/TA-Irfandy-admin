import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IProductPackage } from 'interfaces';

export const ProductPackageEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IProductPackage>();
  console.log({ ...formProps });
  console.log({ form });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Package"
          name="Package"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Destination Place"
          name="DestinationPlace"
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
