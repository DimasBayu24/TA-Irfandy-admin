import { IResourceComponentsProps } from '@pankod/refine-core';
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
import { IExporter } from 'interfaces';
import dayjs from 'dayjs';

export const ExporterList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IExporter>({
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
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="joinedAt"
          key="joinedAt"
          title="Joined At"
          render={(value) => <TextField value={dayjs(value).format('YYYY-MM-DD')} />}
          defaultSortOrder={getDefaultSortOrder('joinedAt', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="expiredAt"
          key="expiredAt"
          title="Expired At"
          render={(value) => <TextField value={dayjs(value).format('YYYY-MM-DD')} />}
          defaultSortOrder={getDefaultSortOrder('expiredAt', sorter)}
          sorter
        />
        <Table.Column<IExporter>
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
