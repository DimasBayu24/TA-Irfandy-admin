import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IAvailable } from 'interfaces';

const { Title, Text } = Typography;

export const AvailableShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IAvailable>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Product</Title>
      <Text>{record?.ProductID}</Text>

      <Title level={5}>Day</Title>
      <Text>{record?.Day}</Text>
    </Show>
  );
};
