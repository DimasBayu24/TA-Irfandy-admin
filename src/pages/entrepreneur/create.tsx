import { IResourceComponentsProps, useCustom, useList } from '@pankod/refine-core';
import { Create, Form, DatePicker, useForm, Select } from '@pankod/refine-antd';
import dayjs from 'dayjs';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IEntrepreneur, IUser, IRole } from 'interfaces';

export const EntrepreneurCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IEntrepreneur>();
  const { data: userRoleData } = useList<IRole>({
    resource: 'role',
    config: {
      filters: [
        {
          field: 'title',
          operator: 'eq',
          value: 'user',
        },
      ],
    },
  });
  const { data: usersData } = useCustom<IUser[]>({
    url: 'users-by-role',
    method: 'get',
    config: {
      query: {
        id: userRoleData?.data[0].id,
      },
    },
    queryOptions: {
      enabled: !!userRoleData?.data[0],
    },
  });
  const selectOptions = usersData?.data.map((user: IUser) => ({
    label: user.username,
    value: user.id,
  }));
  console.log(selectOptions);

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User ID"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions} />
        </Form.Item>
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
    </Create>
  );
};
