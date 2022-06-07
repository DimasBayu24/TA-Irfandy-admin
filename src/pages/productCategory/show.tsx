import { IResourceComponentsProps, useShow, useOne } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICategory } from 'interfaces';

const { Title, Text } = Typography;

export const ProductCategoryShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ICategory>();

  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: productCategoryData } = useOne<ICategory>({
    resource: 'product-category',
    queryOptions: {
      enabled: record?.parentId ? true : false,
    },
    id: record?.parentId ?? '',
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Slug</Title>
      <Text>{record?.slug}</Text>

      <Title level={5}>Parent Category</Title>
      <Text>{productCategoryData?.data.title || '-'}</Text>
    </Show>
  );
};
