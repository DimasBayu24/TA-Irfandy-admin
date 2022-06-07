import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICategory, IAcademy } from 'interfaces';

const { Title, Text } = Typography;

export const AcademyShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IAcademy>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: exportOfferCategoryData } = useOne<ICategory>({
    resource: 'academy-category',
    id: record?.categoryId ?? '',
    queryOptions: {
      enabled: !!record?.categoryId,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Organizer</Title>
      <Text>{record?.organizer}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Event Time</Title>
      <Text>{record?.eventTime}</Text>

      <Title level={5}>Event Contact</Title>
      <Text>{record?.eventContact}</Text>

      <Title level={5}>Event Link</Title>
      <Text>{record?.eventLink}</Text>

      <Title level={5}>Is Course?</Title>
      <Text>{record?.isCourse === true ? 'Yes' : 'No'}</Text>

      <Title level={5}>Registration Link</Title>
      <Text>{record?.registrationLink}</Text>

      <Title level={5}>Event Picture</Title>
      <Text>{record?.eventPicture}</Text>

      <Title level={5}>Category</Title>
      <Text>{exportOfferCategoryData?.data.title}</Text>
    </Show>
  );
};
