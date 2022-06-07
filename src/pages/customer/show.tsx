import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICustomer } from 'interfaces';

const { Title, Text } = Typography;

export const CustomerShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ICustomer>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Username</Title>
      <Text>{record?.Username}</Text>

      <Title level={5}>Fullname</Title>
      <Text>{record?.Fullname}</Text>

      <Title level={5}>Role</Title>
      <Text>{record?.Role}</Text>
    </Show>
  );
};
