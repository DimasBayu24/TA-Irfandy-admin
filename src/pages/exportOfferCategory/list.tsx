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
import { ICategory } from 'interfaces';

export const ExportCategoryList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ICategory>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });
  const categoryIds = tableProps?.dataSource?.map((item) => item.parentId) ?? [];
  const { data: exportCategoriesData, isLoading } = useMany<ICategory>({
    resource: 'export-category',
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
          dataIndex="parentId"
          title="Parent Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={exportCategoriesData?.data.find((item) => item.id === value)?.title}
              />
            );
          }}
        />
        <Table.Column<ICategory>
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
