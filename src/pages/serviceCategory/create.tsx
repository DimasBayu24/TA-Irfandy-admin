import { IResourceComponentsProps } from '@pankod/refine-core';
import { Create, Form, Input, useForm, Select, useSelect } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory } from 'interfaces';

export const ServiceCategoryCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICategory>();
  const { selectProps: serviceCategorySelectProps } = useSelect<ICategory>({
    resource: 'service-category',
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          <Select {...serviceCategorySelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
