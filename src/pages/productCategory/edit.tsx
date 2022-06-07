import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm, useSelect, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory } from 'interfaces';

export const ProductCategoryEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICategory>();
  const { selectProps: productCategorySelectProps } = useSelect<ICategory>({
    resource: 'product-category',
    filters: [
      {
        field: 'id',
        operator: 'nin',
        value: formProps.form?.getFieldValue('id'),
      },
    ],
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
          label="Slug"
          name="slug"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Parent Category" name="parentId">
          <Select {...productCategorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
