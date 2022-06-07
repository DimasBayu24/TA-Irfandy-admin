import { IResourceComponentsProps } from '@pankod/refine-core';
import {
  Edit,
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  useForm,
  useCheckboxGroup,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IAcl, IRole } from 'interfaces';

export const AclEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAcl>();

  const { checkboxGroupProps: RoleCheckboxProps } = useCheckboxGroup<IRole>({
    resource: 'role',
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label="Method"
          name="method"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Get',
                value: 'GET',
              },
              {
                label: 'Post',
                value: 'POST',
              },
              {
                label: 'Put',
                value: 'PUT',
              },
              {
                label: 'Patch',
                value: 'PATCH',
              },
              {
                label: 'Delete',
                value: 'DELETE',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Roles" name="permitted">
          <Checkbox.Group {...RoleCheckboxProps} />
        </Form.Item>
        <Form.Item
          label="Is Public?"
          name="isPublic"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group
            options={[
              { label: 'True', value: true },
              { label: 'False', value: false },
            ]}
            optionType="button"
          />
        </Form.Item>
        <Form.Item
          label="Is Idempotent?"
          name="isIdempotent"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group
            options={[
              { label: 'True', value: true },
              { label: 'False', value: false },
            ]}
            optionType="button"
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
