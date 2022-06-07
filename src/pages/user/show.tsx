import { IResourceComponentsProps, useShow, useList } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IUser, IRole } from 'interfaces';

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: rolesData } = useList<IRole>({
    resource: 'role',
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Username</Title>
      <Text>{record?.username}</Text>

      <Title level={5}>Email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Role</Title>
      <Text>
        {record?.roleIds
          .map((id) => rolesData?.data.find((role) => role.id === id)?.title)
          .join(', ')}
      </Text>

      <Title level={5}>Status</Title>
      <Text>{record?.status}</Text>

      <Title level={5}>Gender</Title>
      <Text>{record?.gender === 'F' ? 'Female' : 'Male'}</Text>

      <Title level={5}>Avatar</Title>
      <Text>{record?.avatar}</Text>

      <Title level={5}>Phone Number</Title>
      <Text>{record?.phoneNumber}</Text>

      <Title level={5}>Province</Title>
      <Text>{record?.address?.province}</Text>

      <Title level={5}>City</Title>
      <Text>{record?.address?.city}</Text>

      <Title level={5}>District</Title>
      <Text>{record?.address?.district}</Text>

      <Title level={5}>Address</Title>
      <Text>{record?.address?.address}</Text>

      <Title level={5}>Balance</Title>
      <Text>{record?.balance}</Text>
    </Show>
  );
};
