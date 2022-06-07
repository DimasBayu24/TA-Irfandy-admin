import { IResourceComponentsProps, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IRole } from 'interfaces';

const { Title, Text } = Typography;

export const RoleShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IRole>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>
    </Show>
  );
};
