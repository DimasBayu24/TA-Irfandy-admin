import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
  Switch,
  DatePicker,
  getValueFromEvent,
  Upload,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICategory, IAcademy } from 'interfaces';
import dayjs from 'dayjs';

export const AcademyCreate: React.FC<IResourceComponentsProps> = () => {
  const apiUrl = useApiUrl('default');
  const { formProps, saveButtonProps, form } = useForm<IAcademy>();
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: 'academy-category',
    fetchSize: 100,
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
          label="Organizer"
          name="organizer"
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Event Time"
          name="eventTime"
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
          label="Event Contact"
          name="eventContact"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Event Link"
          name="eventLink"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Is Course"
          name="isCourse"
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
          label="Registration Link"
          name="registrationLink"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item label="Image" name="eventPicture">
          <Form.Item
            name="bannerFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const { result } = value[0].response;

                if (Array.isArray(result) && result.length > 0) {
                  form.setFieldsValue({ eventPicture: result[0].id });
                }
              }
              return value;
            }}
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              data={{
                type: 'img',
                category: 'event-picture',
              }}
              action={`${apiUrl}/upload`}
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
    </Create>
  );
};
