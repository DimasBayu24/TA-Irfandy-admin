import { IResourceComponentsProps, useApiUrl, useCustom, useList } from '@pankod/refine-core';
import {
  Edit,
  Form,
  useForm,
  Input,
  Switch,
  Upload,
  getValueFromEvent,
  useSelect,
  Select,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IService, IUser, ICategory, IRole } from 'interfaces';

export const ServiceEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IService>({
    resource: 'talent-service',
  });
  const apiUrl = useApiUrl('default');
  const { data: userRoleData } = useList<IRole>({
    resource: 'role',
    config: {
      filters: [
        {
          field: 'title',
          operator: 'eq',
          value: 'talent',
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
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: 'product-category',
    fetchSize: 100,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Talent ID"
          name="talentId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item
          label="Category ID"
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
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Is Consultant"
          name="isConsultant"
          valuePropName="checked"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Switch />
        </Form.Item>
        <Form.Item
          label="Consultant Price"
          name="consultantPrice"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Image" name="thumbnail">
          <Form.Item
            name="thumbnailFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const { result } = value[0].response;

                if (Array.isArray(result) && result.length > 0) {
                  form.setFieldsValue({ thumbnail: result[0].id });
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
      </Form>
    </Edit>
  );
};
