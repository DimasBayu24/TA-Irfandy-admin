import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import {
  Edit,
  Form,
  Input,
  useForm,
  useCheckboxGroup,
  Select,
  Upload,
  getValueFromEvent,
  Checkbox,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IRole } from 'interfaces';

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IRole>();
  const { checkboxGroupProps: RoleCheckboxProps } = useCheckboxGroup<IRole>({
    resource: 'role',
  });
  const apiUrl = useApiUrl('default');

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
                label: 'UNVERIFIED',
                value: 'UNVERIFIED',
              },
              {
                label: 'EMAIL_VERIFIED',
                value: 'EMAIL_VERIFIED',
              },
              {
                label: 'PHONE_VERIFIED',
                value: 'PHONE_VERIFIED',
              },
              {
                label: 'VERIFIED',
                value: 'VERIFIED',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select
            options={[
              {
                label: 'Male',
                value: 'M',
              },
              {
                label: 'Female',
                value: 'F',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Avatar" name="avatar">
          <Form.Item
            name="avatarFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const { result } = value[0].response;

                if (Array.isArray(result) && result.length > 0) {
                  form.setFieldsValue({ avatar: result[0].id });
                }
              }
              return value;
            }}
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="files"
              data={{
                type: 'img',
                category: 'user-avatar',
              }}
              action={`${apiUrl}/api/v1/general/upload-files`}
              listType="picture"
              withCredentials={true}
              maxCount={1}
              // multiple
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="+628xxxxxxx" />
        </Form.Item>
        <Form.Item
          label="Province"
          name={['address', 'province']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name={['address', 'city']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="District"
          name={['address', 'district']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name={['address', 'address']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Balance"
          name="balance"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={0} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
