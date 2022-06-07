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
import { IService, ICategory } from 'interfaces';

export const ServiceList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IService>({
    resource: 'talent-service',
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const categoryIds = tableProps?.dataSource?.map((item) => item.categoryId) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: 'service-category',
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
          dataIndex="talentId"
          key="talentId"
          title="Talent ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('talentId', sorter)}
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
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('title', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="isConsultant"
          key="isConsultant"
          title="Is Consultant?"
          render={(value) => <TextField value={value === true ? 'Yes' : 'No'} />}
          defaultSortOrder={getDefaultSortOrder('isConsultant', sorter)}
          sorter
        />
        <Table.Column<IService>
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
