import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  useDrawerForm,
} from '@pankod/refine-antd';
import { BaseKey } from '@pankod/refine-core';
import { IProductOrder } from 'interfaces';
import { ProductOrderCreate } from './create';
import { ProductOrderEdit } from './edit';

export const ProductOrderList: React.FC<{ entrepreneurId?: BaseKey }> = (props) => {
  const { entrepreneurId } = props;

  const { tableProps, sorter } = useTable<IProductOrder>({
    resource: 'product-order',
    permanentFilter: [
      {
        field: 'entrepreneurId',
        operator: 'eq',
        value: entrepreneurId,
      },
    ],
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
    queryOptions: {
      enabled: !!entrepreneurId,
    },
  });

  const {
    formProps: createFormProps,
    drawerProps: createDrawerProps,
    show: createDrawerShow,
    saveButtonProps: createSaveButtonProps,
    deleteButtonProps,
    form: createForm,
  } = useDrawerForm<IProductOrder>({
    action: 'create',
    resource: 'product-order',
    redirect: false,
  });

  const {
    formProps: editFormProps,
    drawerProps: editDrawerProps,
    show: editDrawerShow,
    saveButtonProps: editSaveButtonProps,
    id: editId,
    formLoading,
  } = useDrawerForm<IProductOrder>({
    action: 'edit',
    resource: 'product-order',
    redirect: false,
    warnWhenUnsavedChanges: true,
  });

  return (
    <>
      <List
        title="Product Order"
        resource="product-order"
        createButtonProps={{
          onClick: () => {
            createForm.resetFields();
            createDrawerShow();
          },
        }}
      >
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
            dataIndex="productId"
            key="productId"
            title="Product ID"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('productId', sorter)}
            sorter
          />
          <Table.Column
            dataIndex="quantity"
            key="quantity"
            title="Quantity"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('quantity', sorter)}
            sorter
          />
          <Table.Column
            dataIndex="status"
            key="status"
            title="Order Status"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('status', sorter)}
            sorter
          />
          <Table.Column
            dataIndex="trackerId"
            key="trackerId"
            title="Tracker ID"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('trackerId', sorter)}
            sorter
          />
          <Table.Column<IProductOrder>
            title="Actions"
            dataIndex="actions"
            render={(_, record) => {
              return (
                <Space>
                  <EditButton
                    hideText
                    size="small"
                    recordItemId={record.id}
                    onClick={() => editDrawerShow(record.id)}
                  />
                  <DeleteButton
                    {...deleteButtonProps}
                    resourceName="product-order"
                    hideText
                    size="small"
                    recordItemId={record.id}
                  />
                </Space>
              );
            }}
          />
        </Table>
      </List>
      <ProductOrderCreate
        drawerProps={createDrawerProps}
        saveButtonProps={createSaveButtonProps}
        formProps={createFormProps}
        entrepreneurId={entrepreneurId}
      />
      <ProductOrderEdit
        drawerProps={editDrawerProps}
        saveButtonProps={editSaveButtonProps}
        formProps={editFormProps}
        id={editId?.toString()}
        entrepreneurId={entrepreneurId}
        formLoading={formLoading}
      />
    </>
  );
};
