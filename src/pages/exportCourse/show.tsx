import { IResourceComponentsProps, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IExportCourse } from 'interfaces';

const { Title, Text } = Typography;

export const ExportCourseShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IExportCourse>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Organizer</Title>
      <Text>{record?.organizer}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>MemberMonthMinimum</Title>
      <Text>{record?.memberMonthMinimum}</Text>
    </Show>
  );
};
