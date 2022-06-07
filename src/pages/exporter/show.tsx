import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IUser, IExporter } from 'interfaces';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

export const ExporterShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IExporter>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: productUserData } = useOne<IUser>({
    resource: 'user',
    id: record?.id ?? '',
    queryOptions: {
      enabled: !!record?.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{productUserData?.data.name}</Text>

      <Title level={5}>Joined At</Title>
      <Text>{dayjs(record?.joinedAt).format('YYYY-MM-DD')}</Text>

      <Title level={5}>Expired At</Title>
      <Text>{dayjs(record?.expiredAt).format('YYYY-MM-DD')}</Text>
    </Show>
  );
};
