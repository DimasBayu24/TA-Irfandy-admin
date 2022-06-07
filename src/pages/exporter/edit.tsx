import { IResourceComponentsProps } from '@pankod/refine-core';
import { DatePicker, Edit, Form, useForm } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IExporter } from 'interfaces';
import dayjs from 'dayjs';

export const ExporterEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IExporter>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="JoinedAt"
          name="joinedAt"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="ExpiredAt"
          name="expiredAt"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Edit>
  );
};
