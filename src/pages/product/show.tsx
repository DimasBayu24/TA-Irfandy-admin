import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICategory, IProduct } from 'interfaces';

const { Title, Text } = Typography;

export const ProductShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProduct>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Product</Title>
      <Text>{record?.ProductName}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.Price}</Text>

      <Title level={5}>Stock</Title>
      <Text>{record?.Stock}</Text>

      <Title level={5}>Category</Title>
      <Text>{record?.Category}</Text>

      <Title level={5}>Picture Url</Title>
      <Text>{record?.PictureUrl}</Text>
    </Show>
  );
};
