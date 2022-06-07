import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import {
  Create,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
  Upload,
  getValueFromEvent,
} from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IProduct, ICategory } from 'interfaces';

export const ProductCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IProduct>();
  const apiUrl = useApiUrl('default');
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Product"
          name="ProductName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Stock"
          name="Stock"
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
          name="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Makanan',
                value: 'Makanan',
              },
              {
                label: 'Minuman',
                value: 'Minuman',
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="PictureUrl" name="PictureUrl">
          <Form.Item
            name="imageFilesNormalizer"
            valuePropName="fileList"
            normalize={(value) => {
              if (Array.isArray(value) && value.length === 1 && value[0].status === 'done') {
                const result = value[0].response;
                console.log('apa ini woi', value[0].response);

                if (result.statusCode === 200) {
                  form.setFieldsValue({ PictureUrl: result.data.data });
                  console.log('apa ini woi lagi ya', result.data.data);
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
                category: 'product',
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
