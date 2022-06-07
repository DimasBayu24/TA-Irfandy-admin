import { IResourceComponentsProps, useApiUrl } from '@pankod/refine-core';
import { Create, Form, Input, useForm, Select, useSelect } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IAvailable, IProduct } from 'interfaces';

export const AvailableCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, form } = useForm<IAvailable>();
  const { selectProps: categorySelectProps, queryResult: datates } = useSelect<IProduct>({
    resource: 'product',
    fetchSize: 100,
  });

  const selectOptions = datates.data?.data.map((item: IProduct) => ({
    label: item.ProductName,
    value: item.ID,
  }));

  return (
    <Create saveButtonProps={saveButtonProps}>
      <button onClick={() => console.log('ini apa aja sih', categorySelectProps)} />
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Product"
          name="ProductID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item
          label="Day"
          name="Day"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            options={[
              {
                label: 'Senin',
                value: 'Senin',
              },
              {
                label: 'Selasa',
                value: 'Selasa',
              },
              {
                label: 'Rabu',
                value: 'Rabu',
              },
              {
                label: 'Kamis',
                value: 'Kamis',
              },
              {
                label: 'Jumat',
                value: 'Jumat',
              },
              {
                label: 'Sabtu',
                value: 'Sabtu',
              },
              {
                label: 'Minggu',
                value: 'Minggu',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
