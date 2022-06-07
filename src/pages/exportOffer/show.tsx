import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICategory, IExportOffer } from 'interfaces';

const { Title, Text } = Typography;

export const ExportOfferShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IExportOffer>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: exportOfferCategoryData } = useOne<ICategory>({
    resource: 'export-category',
    id: record?.categoryId ?? '',
    queryOptions: {
      enabled: !!record?.categoryId,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Region</Title>
      <Text>{record?.region}</Text>

      <Title level={5}>Category</Title>
      <Text>{exportOfferCategoryData?.data.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>OffererContact</Title>
      <Text>{record?.offererContact}</Text>
    </Show>
  );
};
