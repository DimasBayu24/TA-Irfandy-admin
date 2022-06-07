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
import { ICategory, IExportOffer } from 'interfaces';

export const ExportOfferList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IExportOffer>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.categoryId) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
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
          dataIndex="description"
          key="description"
          title="Description"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('description', sorter)}
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
        <Table.Column
          dataIndex="region"
          key="region"
          title="Region"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('region', sorter)}
          sorter
        />
        <Table.Column<IExportOffer>
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
