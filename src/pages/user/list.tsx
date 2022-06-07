import { IResourceComponentsProps, useList } from '@pankod/refine-core';
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
import { IRole } from 'interfaces';

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IRole>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  });

  const { data: rolesData, isLoading } = useList<IRole>({
    resource: 'role',
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
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('name', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="username"
          key="username"
          title="Username"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('username', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="email"
          key="email"
          title="Email"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('email', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="roleIds"
          key="roleIds"
          title="Role"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={
                  value
                    ? value
                        .map((id: string) => rolesData?.data.find((role) => role.id === id)?.title)
                        .join(', ')
                    : '-'
                }
              />
            );
          }}
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('status', sorter)}
          sorter
        />
        <Table.Column<IRole>
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
