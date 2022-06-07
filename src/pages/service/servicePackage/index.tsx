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
import { IServicePackage } from 'interfaces';
import { ServicePackageCreate } from './create';
import { ServicePackageEdit } from './edit';

export const ServicePackageList: React.FC<{ serviceId?: BaseKey }> = (props) => {
  const { serviceId } = props;

  const { tableProps, sorter } = useTable<IServicePackage>({
    resource: 'service-package',
    permanentFilter: [
      {
        field: 'serviceId',
        operator: 'eq',
        value: serviceId,
      },
    ],
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
    queryOptions: {
      enabled: !!serviceId,
    },
  });

  const {
    formProps: createFormProps,
    drawerProps: createDrawerProps,
    show: createDrawerShow,
    saveButtonProps: createSaveButtonProps,
    deleteButtonProps,
    form: createForm,
  } = useDrawerForm<IServicePackage>({
    action: 'create',
    resource: 'service-package',
    redirect: false,
  });

  const {
    formProps: editFormProps,
    drawerProps: editDrawerProps,
    show: editDrawerShow,
    saveButtonProps: editSaveButtonProps,
    id: editId,
    formLoading,
  } = useDrawerForm<IServicePackage>({
    action: 'edit',
    resource: 'service-package',
    redirect: false,
  });

  return (
    <>
      <List
        title="Service Package"
        resource="service-package"
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
            dataIndex="title"
            key="title"
            title="Title"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('title', sorter)}
            sorter
          />
          <Table.Column
            dataIndex="deliveryTime"
            key="deliveryTime"
            title="Delivery Time"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('deliveryTime', sorter)}
            sorter
          />
          <Table.Column
            dataIndex="price"
            key="price"
            title="Price"
            render={(value) => <TextField value={value} />}
            defaultSortOrder={getDefaultSortOrder('price', sorter)}
            sorter
          />
          <Table.Column<IServicePackage>
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
                    resourceName="service-package"
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
      <ServicePackageCreate
        drawerProps={createDrawerProps}
        saveButtonProps={createSaveButtonProps}
        formProps={createFormProps}
        serviceId={serviceId}
      />
      <ServicePackageEdit
        drawerProps={editDrawerProps}
        saveButtonProps={editSaveButtonProps}
        formProps={editFormProps}
        id={editId?.toString()}
        serviceId={serviceId}
        formLoading={formLoading}
      />
    </>
  );
};
