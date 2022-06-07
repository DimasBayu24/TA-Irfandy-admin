import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { ICourseSession, IExportCourse, IExporter } from 'interfaces';

const { Title, Text } = Typography;

export const CourseSessionShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ICourseSession>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: exporterData } = useOne<IExporter>({
    resource: 'exporter',
    id: record?.exporterId ?? '',
    queryOptions: {
      enabled: !!record?.exporterId,
    },
  });

  const { data: courseData } = useOne<IExportCourse>({
    resource: 'exporter',
    id: record?.courseId ?? '',
    queryOptions: {
      enabled: !!record?.courseId,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Current Chapter Number</Title>
      <Text>{record?.currentChapterNumber}</Text>

      <Title level={5}>Certificate Link</Title>
      <Text>{record?.certificateLink}</Text>

      <Title level={5}>Exporter</Title>
      <Text>{exporterData?.data.id}</Text>

      <Title level={5}>Export Course</Title>
      <Text>{courseData?.data.title}</Text>

      <Title level={5}>Is Finished</Title>
      <Text>{record?.isFinished === true ? 'Yes' : 'No'}</Text>
    </Show>
  );
};
