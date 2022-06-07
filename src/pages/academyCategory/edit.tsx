import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm, useSelect, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory } from 'interfaces';

export const AcademyCategoryEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICategory>();
  const { selectProps: academyCategorySelectProps } = useSelect<ICategory>({
    resource: 'academy-category',
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
          <Select {...academyCategorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
