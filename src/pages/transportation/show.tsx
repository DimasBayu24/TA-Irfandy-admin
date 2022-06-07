import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ITransportation } from 'interfaces';

const { Title, Text } = Typography;

export const TransportationShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ITransportation>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Type</Title>
      <Text>{record?.Type}</Text>

      <Title level={5}>Size</Title>
      <Text>{record?.Size}</Text>

      <Title level={5}>Price</Title>
      <Text>{record?.Price}</Text>
    </Show>
  );
};
