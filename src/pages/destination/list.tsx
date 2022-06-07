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
import { IDestination } from 'interfaces';

export const DestinationList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IDestination>({
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
          dataIndex="Place"
          key="Place"
          title="Place"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="PlaceOption"
          key="PlaceOption"
          title="Place Option"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Price"
          key="Price"
          title="Price"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IDestination>
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
