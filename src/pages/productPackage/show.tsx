import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IProductPackage } from 'interfaces';

const { Title, Text } = Typography;

export const ProductPackageShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProductPackage>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Package</Title>
      <Text>{record?.Package}</Text>

      <Title level={5}>Destination Place</Title>
      <Text>{record?.DestinationPlace}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.Price}</Text>
    </Show>
  );
};
