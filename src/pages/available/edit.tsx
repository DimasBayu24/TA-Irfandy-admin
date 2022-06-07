import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, useForm, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IAvailable } from 'interfaces';

export const AvailableEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IAvailable>();
  console.log({ ...formProps });
  console.log({ form });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Product"
          name="ProductID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Day"
          name="Day"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            options={[
              {
                label: 'Senin',
                value: 'Senin',
              },
              {
                label: 'Selasa',
                value: 'Selasa',
              },
              {
                label: 'Rabu',
                value: 'Rabu',
              },
              {
                label: 'Kamis',
                value: 'Kamis',
              },
              {
                label: 'Jumat',
                value: 'Jumat',
              },
              {
                label: 'Sabtu',
                value: 'Sabtu',
              },
              {
                label: 'Minggu',
                value: 'Minggu',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
