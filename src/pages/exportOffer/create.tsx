import { IResourceComponentsProps } from '@pankod/refine-core';
import { Create, Form, Input, useForm, useSelect, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory, IExportOffer } from 'interfaces';

export const ExportOfferCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IExportOffer>();
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: 'export-category',
    fetchSize: 100,
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
          label="Region"
          name="region"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
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
          <Input />
        </Form.Item>
        <Form.Item
          label="OffererContact"
          name="offererContact"
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
