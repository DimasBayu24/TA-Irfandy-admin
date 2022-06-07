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
import { ICustomer, IOrder, IOrderItem } from 'interfaces';
import dayjs from 'dayjs';

export const OrderItemList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IOrderItem>({
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
          dataIndex="OrderID"
          key="OrderID"
          title="Order ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="ProductID"
          key="ProductID"
          title="Product ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="Quantity"
          key="Quantity"
          title="Quantity"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IOrderItem>
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
