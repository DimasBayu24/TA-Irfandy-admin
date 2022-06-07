import { IResourceComponentsProps, useShow, useOne } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';
import dayjs from 'dayjs';

import { IEntrepreneur, IUser } from 'interfaces';
import { ProductOrderList } from './productOrder';

const { Title, Text } = Typography;

export const EntrepreneurShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult, showId } = useShow<IEntrepreneur>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: userData } = useOne<IUser>({
    resource: 'user',
    id: record?.id ?? '',
    queryOptions: {
      enabled: !!record?.id,
    },
  });

  return (
    <>
      <Show isLoading={isLoading}>
        <Title level={5}>User ID</Title>
        <Text>{record?.id}</Text>

        <Title level={5}>Name</Title>
        <Text>{userData?.data.name}</Text>

        <Title level={5}>Username</Title>
        <Text>{userData?.data.username}</Text>

        <Title level={5}>Email</Title>
        <Text>{userData?.data.email}</Text>

        <Title level={5}>Balance</Title>
        <Text>{userData?.data.balance}</Text>

        <Title level={5}>Expired At</Title>
        <Text>{dayjs(record?.expiredAt).format('YYYY-MM-DD')}</Text>
      </Show>
      {userData ? <ProductOrderList entrepreneurId={showId} /> : null}
    </>
  );
};
