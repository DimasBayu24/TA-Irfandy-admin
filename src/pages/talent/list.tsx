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
import { ITalent } from 'interfaces';
import dayjs from 'dayjs';

export const TalentList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ITalent>({
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
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('title', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="isExpert"
          key="isExpert"
          title="Is Expert?"
          render={(value) => <TextField value={value === true ? 'Yes' : 'No'} />}
          defaultSortOrder={getDefaultSortOrder('isExpert', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="joinAt"
          key="joinAt"
          title="Join At"
          render={(value) => <TextField value={dayjs(value).format('YYYY-MM-DD')} />}
          defaultSortOrder={getDefaultSortOrder('joinAt', sorter)}
          sorter
        />
        <Table.Column<ITalent>
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
