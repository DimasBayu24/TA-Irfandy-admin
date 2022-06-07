import { IResourceComponentsProps, useList, useShow } from '@pankod/refine-core';
import { Show, Typography, Tag } from '@pankod/refine-antd';

import { IAcl, IRole } from 'interfaces';

const { Title, Text } = Typography;

export const AclShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IAcl>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: rolesData } = useList<IRole>({
    resource: 'role',
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Method</Title>
      <Text>{record?.method}</Text>

      <Title level={5}>Url</Title>
      <Text>{record?.url}</Text>

      <Title level={5}>Roles</Title>
      <Text>
        {record?.permitted.map((id) => (
          <Tag key={id}>{rolesData?.data.find((role) => role.id === id)?.title}</Tag>
        ))}
      </Text>

      <Title level={5}>Is Public?</Title>
      <Text>{`${record?.isPublic ? 'True' : 'False'}`}</Text>

      <Title level={5}>Is Idempotent?</Title>
      <Text>{`${record?.isIdempotent ? 'True' : 'False'}`}</Text>
    </Show>
  );
};
