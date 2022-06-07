import { IResourceComponentsProps } from '@pankod/refine-core';
import { Create, Form, useForm, useSelect, Select, DatePicker } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IExporter, IUser } from 'interfaces';
import dayjs from 'dayjs';

export const ExporterCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IExporter>();
  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: 'user',
    fetchSize: 100,
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
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
        <Form.Item
          label="User"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
