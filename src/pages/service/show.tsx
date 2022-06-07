import { IResourceComponentsProps, useShow, useOne } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IService, ICategory } from 'interfaces';
import { ServicePackageList } from './servicePackage';

const { Title, Text } = Typography;

export const ServiceShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult, showId } = useShow<IService>({
    resource: 'talent-service',
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: serviceCategoryData } = useOne<ICategory>({
    resource: 'service-category',
    id: record?.categoryId ?? '',
    queryOptions: {
      enabled: !!record?.categoryId,
    },
  });

  return (
    <>
      <Show isLoading={isLoading}>
        <Title level={5}>Title</Title>
        <Text>{record?.title}</Text>

        <Title level={5}>Talent ID</Title>
        <Text>{record?.talentId}</Text>

        <Title level={5}>Category ID</Title>
        <Text>{serviceCategoryData?.data.title}</Text>

        <Title level={5}>Is Consultant</Title>
        <Text>{record?.isConsultant === true ? 'Yes' : 'No'}</Text>

        <Title level={5}>Description</Title>
        <Text>{record?.description}</Text>

        <Title level={5}>Consultant Price</Title>
        <Text>{record?.consultantPrice}</Text>

        <Title level={5}>Thumbnail</Title>
        <Text>{record?.thumbnail}</Text>
      </Show>
      {record ? <ServicePackageList serviceId={showId} /> : null}
    </>
  );
};
