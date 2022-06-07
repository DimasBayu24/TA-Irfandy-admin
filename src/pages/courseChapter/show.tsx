import { IResourceComponentsProps, useOne, useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

import { IExportCourse, ICourseChapter } from 'interfaces';

const { Title, Text } = Typography;

export const CourseChapterShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<ICourseChapter>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: productExportCourseData } = useOne<IExportCourse>({
    resource: 'export-course',
    id: record?.id ?? '',
    queryOptions: {
      enabled: !!record?.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Chapter Number</Title>
      <Text>{record?.chapterNumber}</Text>

      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>ExportCourse</Title>
      <Text>{productExportCourseData?.data.title}</Text>

      <Title level={5}>Description</Title>
      <Text>{record?.description}</Text>

      <Title level={5}>Video Url</Title>
      <Text>{record?.videoUrl}</Text>

      <Title level={5}>Explanation</Title>
      <Text>{record?.explanation}</Text>
    </Show>
  );
};
