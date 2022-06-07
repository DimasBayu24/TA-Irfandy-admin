import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, useForm, DatePicker } from '@pankod/refine-antd';
import dayjs from 'dayjs';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IEntrepreneur } from 'interfaces';

export const EntrepreneurEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IEntrepreneur>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Expired At"
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
