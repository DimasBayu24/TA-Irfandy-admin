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
import { IExportCourse, ICourseChapter } from 'interfaces';

export const CourseChapterList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ICourseChapter>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.courseId) ?? [];
  const { data: categoriesData, isLoading } = useMany<IExportCourse>({
    resource: 'export-course',
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
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
          dataIndex="chapterNumber"
          key="chapterNumber"
          title="Chapter Number"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('chapterNumber', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('title', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="id"
          title="ExportCourse"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField value={categoriesData?.data.find((item) => item.id === value)?.title} />
            );
          }}
        />
        <Table.Column
          dataIndex="description"
          key="description"
          title="Description"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('description', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="videoUrl"
          key="videoUrl"
          title="Video Url"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('videoUrl', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="explanation"
          key="explanation"
          title="Explanation"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('explanation', sorter)}
          sorter
        />
        <Table.Column<ICourseChapter>
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
