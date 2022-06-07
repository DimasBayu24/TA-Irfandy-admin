import { IResourceComponentsProps } from '@pankod/refine-core';
import {
  Radio,
  Create,
  Form,
  Input,
  Select,
  Checkbox,
  useCheckboxGroup,
  useForm,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IAcl, IRole } from 'interfaces';

export const AclCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IAcl>();

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
        <Form.Item label="Permitted" name="permitted">
          <Checkbox.Group {...RoleCheckboxProps} />
        </Form.Item>
        <Form.Item label="Is Public?" name="isPublic">
          <Radio.Group
            options={[
              { label: 'True', value: true },
              { label: 'False', value: false },
            ]}
            optionType="button"
          />
        </Form.Item>
        <Form.Item label="Is Idempotent?" name="isIdempotent">
          <Radio.Group
            options={[
              { label: 'True', value: true },
              { label: 'False', value: false },
            ]}
            optionType="button"
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
