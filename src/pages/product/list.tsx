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
import { ICategory, IProduct } from 'interfaces';

export const ProductList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IProduct>({
    initialSorter: [
      {
        field: 'id',
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
          defaultSortOrder={getDefaultSortOrder('ID', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="ProductName"
          key="ProductName"
          title="Product"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('ProductName', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="Price"
          key="Price"
          title="Price"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('Price', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="Stock"
          key="Stock"
          title="Stock"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('Stock', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="Category"
          key="Category"
          title="Category"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('Category', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="PictureUrl"
          key="PictureUrl"
          title="Picture Url"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('PictureUrl', sorter)}
          sorter
        />
        <Table.Column<IProduct>
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
