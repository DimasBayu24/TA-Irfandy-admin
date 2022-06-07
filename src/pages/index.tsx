import { IResourceComponents } from '@pankod/refine-core/dist';
import {
  TeamOutlined,
  UserOutlined,
  PartitionOutlined,
  ShopOutlined,
  TagsOutlined,
  RobotOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import { RoleCreate, RoleEdit, RoleList, RoleShow } from './role';
import { AclCreate, AclEdit, AclList, AclShow } from './acl';
import { UserCreate, UserEdit, UserList, UserShow } from './user';
import {
  EntrepreneurCreate,
  EntrepreneurEdit,
  EntrepreneurList,
  EntrepreneurShow,
} from './entrepreneur';
import {
  ProductCategoryCreate,
  ProductCategoryEdit,
  ProductCategoryList,
  ProductCategoryShow,
} from './productCategory';
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './product';
import {
  DestinationCreate,
  DestinationEdit,
  DestinationList,
  DestinationShow,
} from './destination';
import { AvailableCreate, AvailableEdit, AvailableList, AvailableShow } from './available';
import { CustomerCreate, CustomerEdit, CustomerList, CustomerShow } from './customer';
import { OrderCreate, OrderEdit, OrderList, OrderShow } from './order';
import {
  ProductPackageCreate,
  ProductPackageEdit,
  ProductPackageList,
  ProductPackageShow,
} from './productPackage';
import { OrderItemCreate, OrderItemEdit, OrderItemList, OrderItemShow } from './orderItem';
import {
  TransportationCreate,
  TransportationEdit,
  TransportationList,
  TransportationShow,
} from './transportation';
import { TalentCreate, TalentEdit, TalentList, TalentShow } from './talent';
import {
  ServiceCategoryCreate,
  ServiceCategoryEdit,
  ServiceCategoryList,
  ServiceCategoryShow,
} from './serviceCategory';
import { ServiceCreate, ServiceEdit, ServiceList, ServiceShow } from './service';
import {
  ExportOfferCreate,
  ExportOfferEdit,
  ExportOfferList,
  ExportOfferShow,
} from './exportOffer';

import {
  ExportCategoryCreate,
  ExportCategoryEdit,
  ExportCategoryList,
  ExportCategoryShow,
} from './exportOfferCategory';

import {
  ExportCourseCreate,
  ExportCourseEdit,
  ExportCourseList,
  ExportCourseShow,
} from './exportCourse';

import {
  CourseSessionCreate,
  CourseSessionEdit,
  CourseSessionList,
  CourseSessionShow,
} from './courseSession';

import {
  CourseChapterCreate,
  CourseChapterEdit,
  CourseChapterList,
  CourseChapterShow,
} from './courseChapter';

import { ExporterCreate, ExporterEdit, ExporterList, ExporterShow } from './exporter';

import { AcademyCreate, AcademyEdit, AcademyList, AcademyShow } from './academy';

import {
  AcademyCategoryCreate,
  AcademyCategoryEdit,
  AcademyCategoryList,
  AcademyCategoryShow,
} from './academyCategory';

import { ReactNode } from 'react';

interface ResourceProps extends IResourceComponents {
  name: string;
  canDelete?: boolean;
  icon?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}

export const RoleModule: ResourceProps = {
  icon: <TeamOutlined />,
  name: 'role',
  list: RoleList,
  create: RoleCreate,
  edit: RoleEdit,
  show: RoleShow,
};

export const AclModule: ResourceProps = {
  name: 'acl',
  list: AclList,
  create: AclCreate,
  edit: AclEdit,
  show: AclShow,
};

export const UserModule: ResourceProps = {
  icon: <UserOutlined />,
  name: 'user',
  list: UserList,
  create: UserCreate,
  edit: UserEdit,
  show: UserShow,
};

export const EntrepreneurModule: ResourceProps = {
  icon: <ShopOutlined />,
  name: 'entrepreneur',
  list: EntrepreneurList,
  create: EntrepreneurCreate,
  edit: EntrepreneurEdit,
  show: EntrepreneurShow,
};

export const ProductCategoryModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'product-category',
  list: ProductCategoryList,
  create: ProductCategoryCreate,
  edit: ProductCategoryEdit,
  show: ProductCategoryShow,
};

export const DestinationModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'destination',
  list: DestinationList,
  create: DestinationCreate,
  edit: DestinationEdit,
  show: DestinationShow,
};

export const OrderModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'order',
  list: OrderList,
  create: OrderCreate,
  edit: OrderEdit,
  show: OrderShow,
};

export const CustomerModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'user',
  list: CustomerList,
  create: CustomerCreate,
  edit: CustomerEdit,
  show: CustomerShow,
};

export const ProductPackageModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'product_package',
  list: ProductPackageList,
  create: ProductPackageCreate,
  edit: ProductPackageEdit,
  show: ProductPackageShow,
};

export const OrderItemModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'order_item',
  list: OrderItemList,
  create: OrderItemCreate,
  edit: OrderItemEdit,
  show: OrderItemShow,
};

export const AvailableModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'available',
  list: AvailableList,
  create: AvailableCreate,
  edit: AvailableEdit,
  show: AvailableShow,
};

export const TransportationModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'transportation',
  list: TransportationList,
  create: TransportationCreate,
  edit: TransportationEdit,
  show: TransportationShow,
};

export const ProductModule: ResourceProps = {
  icon: <TagsOutlined />,
  name: 'product',
  list: ProductList,
  create: ProductCreate,
  edit: ProductEdit,
  show: ProductShow,
};

export const TalentModule: ResourceProps = {
  icon: <RobotOutlined />,
  name: 'talent',
  list: TalentList,
  create: TalentCreate,
  edit: TalentEdit,
  show: TalentShow,
};

export const ServiceCategoryModule: ResourceProps = {
  icon: <PartitionOutlined />,
  name: 'service-category',
  list: ServiceCategoryList,
  create: ServiceCategoryCreate,
  edit: ServiceCategoryEdit,
  show: ServiceCategoryShow,
};

export const ServiceModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'talent-service',
  list: ServiceList,
  create: ServiceCreate,
  edit: ServiceEdit,
  show: ServiceShow,
};

export const ExportOfferCategoryModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'export-category',
  list: ExportCategoryList,
  create: ExportCategoryCreate,
  edit: ExportCategoryEdit,
  show: ExportCategoryShow,
};

export const ExportOfferModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'export-offer',
  list: ExportOfferList,
  create: ExportOfferCreate,
  edit: ExportOfferEdit,
  show: ExportOfferShow,
};

export const ExportCourseModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'export-course',
  list: ExportCourseList,
  create: ExportCourseCreate,
  edit: ExportCourseEdit,
  show: ExportCourseShow,
};

export const ExporterModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'exporter',
  list: ExporterList,
  create: ExporterCreate,
  edit: ExporterEdit,
  show: ExporterShow,
};

export const CourseSessionModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'course-session',
  list: CourseSessionList,
  create: CourseSessionCreate,
  edit: CourseSessionEdit,
  show: CourseSessionShow,
};

export const CourseChapterModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'course-chapter',
  list: CourseChapterList,
  create: CourseChapterCreate,
  edit: CourseChapterEdit,
  show: CourseChapterShow,
};

export const AcademyModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'academy-topic',
  list: AcademyList,
  create: AcademyCreate,
  edit: AcademyEdit,
  show: AcademyShow,
};

export const AcademyCategoryModule: ResourceProps = {
  icon: <DeploymentUnitOutlined />,
  name: 'academy-category',
  list: AcademyCategoryList,
  create: AcademyCategoryCreate,
  edit: AcademyCategoryEdit,
  show: AcademyCategoryShow,
};
