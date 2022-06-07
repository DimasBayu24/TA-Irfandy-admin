import { IResourceComponentsProps } from '@pankod/refine-core';
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
import { IExportCourse } from 'interfaces';

export const ExportCourseList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IExportCourse>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
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
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('title', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="organizer"
          key="organizer"
          title="Organizer"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('organizer', sorter)}
          sorter
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
          dataIndex="memberMonthMinimum"
          key="memberMonthMinimum"
          title="MemberMonthMinimum"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('memberMonthMinimum', sorter)}
          sorter
        />
        <Table.Column<IExportCourse>
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
