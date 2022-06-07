import { IResourceComponentsProps, useShow, useOne } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';
import dayjs from 'dayjs';

import { ITalent, IUser } from 'interfaces';

const { Title, Text } = Typography;

export const TalentShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ITalent>();
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

        <Title level={5}>Title</Title>
        <Text>{record?.title}</Text>

        <Title level={5}>Is Expert</Title>
        <Text>{record?.isExpert === true ? 'Yes' : 'No'}</Text>

        <Title level={5}>Join At</Title>
        <Text>{dayjs(record?.joinAt).format('YYYY-MM-DD')}</Text>

        <Title level={5}>Skill Set</Title>
        <Text>{record?.skillSet}</Text>

        <Title level={5}>Bio</Title>
        <Text>{record?.bio}</Text>

        <Title level={5}>Portfolio</Title>
        <Text>{record?.portfolio}</Text>

        <Title level={5}>Banner</Title>
        <Text>{record?.banner}</Text>
      </Show>
    </>
  );
};
