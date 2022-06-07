import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import {
  Edit,
  Form,
  useForm,
  DatePicker,
  Input,
  Switch,
  Upload,
  getValueFromEvent,
} from '@pankod/refine-antd';
import dayjs from 'dayjs';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ITalent } from 'interfaces';

export const TalentEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<ITalent>();
  const apiUrl = useApiUrl('default');

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label="Is Expert"
          name="isExpert"
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
          label="Join At"
          name="joinAt"
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
          label="Skill Set"
          name="skillSet"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Portfolio"
          name="portfolio"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Image" name="banner">
          <Form.Item
            name="bannerFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const { result } = value[0].response;

                if (Array.isArray(result) && result.length > 0) {
                  form.setFieldsValue({ banner: result[0].id });
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
