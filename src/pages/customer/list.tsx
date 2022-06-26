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
import { ICustomer } from 'interfaces';

export const CustomerList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ICustomer>({
    initialSorter: [
      {
        field: 'ID',
        order: 'desc',
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="ID"
          key="ID"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Username"
          key="Username"
          title="Username"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Fullname"
          key="Fullname"
          title="Fullname"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Phone"
          key="Phone"
          title="Phone"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Role"
          key="Role"
          title="Role"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ICustomer>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.ID} />
              <ShowButton hideText size="small" recordItemId={record.ID} />
              <DeleteButton hideText size="small" recordItemId={record.ID} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
