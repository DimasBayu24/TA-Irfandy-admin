import { IResourceComponentsProps, useMany } from '@pankod/refine-core';
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  ShowButton,
} from '@pankod/refine-antd';
import { ICourseSession, IExportCourse, IExporter } from 'interfaces';

export const CourseSessionList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ICourseSession>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const exporterIds = tableProps?.dataSource?.map((item) => item.exporterId) ?? [];
  const exportCourseIds = tableProps?.dataSource?.map((item) => item.courseId) ?? [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data: exportersData, isLoadingExporter } = useMany<IExporter>({
    resource: 'exporter',
    ids: exporterIds,
    queryOptions: {
      enabled: exporterIds.length > 0,
    },
  });
  const { data: exportCoursesData, isLoading } = useMany<IExportCourse>({
    resource: 'export-course',
    ids: exportCourseIds,
    queryOptions: {
      enabled: exportCourseIds.length > 0,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="currentChapterNumber"
          key="currentChapterNumber"
          title="Current Chapter Number"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('currentChapterNumber', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="certificateLink"
          key="certificateLink"
          title="Certificate Link"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('certificateLink', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="exporterId"
          title="Exporter"
          render={(value) => {
            if (isLoadingExporter) {
              return <TextField value="Loading..." />;
            }

            return <TextField value={exportersData?.data.find((item) => item.id === value)?.id} />;
          }}
        />
        <Table.Column
          dataIndex="courseId"
          title="Export Course"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField value={exportCoursesData?.data.find((item) => item.id === value)?.title} />
            );
          }}
        />
        <Table.Column
          dataIndex="isFinished"
          key="isFinished"
          title="Is Finished"
          render={(value) => <TextField value={value === true ? 'Yes' : 'No'} />}
          defaultSortOrder={getDefaultSortOrder('isFinished', sorter)}
          sorter
        />
        <Table.Column<ICourseSession>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
