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
import { ICategory, IAcademy } from 'interfaces';
import dayjs from 'dayjs';

export const AcademyList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IAcademy>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.categoryId) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: 'academy-category',
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
          dataIndex="eventTime"
          key="eventTime"
          title="Event Time"
          render={(value) => <TextField value={dayjs(value).format('YYYY-MM-DD')} />}
          defaultSortOrder={getDefaultSortOrder('eventTime', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="eventContact"
          key="eventContact"
          title="Event Contact"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('eventContact', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="eventLink"
          key="eventLink"
          title="Event Link"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('eventLink', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="isCourse"
          key="isCourse"
          title="Is Course?"
          render={(value) => <TextField value={value === true ? 'Yes' : 'No'} />}
          defaultSortOrder={getDefaultSortOrder('isCourse', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="registrationLink"
          key="registrationLink"
          title="Registration Link"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('registrationLink', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="eventPicture"
          key="eventPicture"
          title="Event Picture"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('eventPicture', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="categoryId"
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField value={categoriesData?.data.find((item) => item.id === value)?.title} />
            );
          }}
        />
        <Table.Column<IAcademy>
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
