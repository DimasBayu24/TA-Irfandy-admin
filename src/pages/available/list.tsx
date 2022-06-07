import { IResourceComponentsProps, useMany } from '@pankod/refine-core';
import {
  List,
  Table,
  TextField,
  useTable,
  Space,
  EditButton,
  DeleteButton,
  ShowButton,
} from '@pankod/refine-antd';
import { ICustomer, IAvailable, IProduct } from 'interfaces';

export const AvailableList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IAvailable>({
    initialSorter: [
      {
        field: 'ID',
        order: 'desc',
      },
    ],
  });

  const userIds = tableProps?.dataSource?.map((item) => item.ProductID) ?? [];
  const { data: categoriesData, isLoading } = useMany<IProduct>({
    resource: 'product',
    ids: userIds,
    queryOptions: {
      enabled: userIds.length > 0,
    },
  });

  return (
    <List>
      <button onClick={() => console.log('ini apa aja sih', categoriesData)} />
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="ID"
          key="ID"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="ProductID"
          title="ProductName"
          render={(value) => {
            console.log('tes value', value, categoriesData?.data);

            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={categoriesData?.data.find((item) => item.ID === value)?.ProductName}
              />
            );
          }}
        />
        <Table.Column
          dataIndex="Day"
          key="Day"
          title="Day"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column<IAvailable>
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
