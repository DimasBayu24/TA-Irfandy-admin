import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IOrderItem } from 'interfaces';

const { Title, Text } = Typography;

export const OrderItemShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IOrderItem>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Order ID</Title>
      <Text>{record?.OrderID}</Text>

      <Title level={5}>Product ID</Title>
      <Text>{record?.ProductID}</Text>

      <Title level={5}>Quantity</Title>
      <Text>{record?.Quantity}</Text>
    </Show>
  );
};
