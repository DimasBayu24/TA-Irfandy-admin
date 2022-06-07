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
import { ITransportation } from 'interfaces';

export const TransportationList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ITransportation>({
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
          dataIndex="Type"
          key="Type"
          title="Type"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Size"
          key="Size"
          title="Size"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Price"
          key="Price"
          title="Price"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<ITransportation>
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
