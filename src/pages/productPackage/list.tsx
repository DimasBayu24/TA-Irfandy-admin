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
import { IProductPackage } from 'interfaces';

export const ProductPackageList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IProductPackage>({
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
          dataIndex="Package"
          key="Package"
          title="Package"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="DestinationPlace"
          key="DestinationPlace"
          title="Destination Place"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Price"
          key="Price"
          title="Price"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IProductPackage>
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
