import { IResourceComponentsProps, useList } from '@pankod/refine-core';
import {
  Tag,
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  TagField,
  ShowButton,
} from '@pankod/refine-antd';
import { IAcl, IRole } from 'interfaces';

export const AclList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IAcl>({
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
          dataIndex="method"
          key="method"
          title="Method"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('method', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="url"
          key="url"
          title="Url"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('url', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="permitted"
          title="Permitted"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return value
              ? value.map((id: string) => (
                  <Tag key={id}>{rolesData?.data.find((role) => role.id === id)?.title}</Tag>
                ))
              : [];
          }}
        />
        <Table.Column
          dataIndex="isPublic"
          key="isPublic"
          title="Is Public?"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('isPublic', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="isIdempotent"
          key="isIdempotent"
          title="Is Idempotent?"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('isIdempotent', sorter)}
          sorter
        />
        <Table.Column<IAcl>
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
