import { IResourceComponentsProps } from '@pankod/refine-core';
import {
  Create,
  Form,
  Input,
  useForm,
  useCheckboxGroup,
  Select,
  Checkbox,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IUser, IRole } from 'interfaces';

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IUser>();
  const { checkboxGroupProps: RoleCheckboxProps } = useCheckboxGroup<IRole>({
    resource: 'role',
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item label="Roles" name="roleIds">
          <Checkbox.Group {...RoleCheckboxProps} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Unverified',
                value: 'UNVERIFIED',
              },
              {
                label: 'Email Verified',
                value: 'EMAIL_VERIFIED',
              },
              {
                label: 'Phone Verified',
                value: 'PHONE_VERIFIED',
              },
              {
                label: 'Verified',
                value: 'VERIFIED',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
