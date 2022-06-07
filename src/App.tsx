import { Refine } from '@pankod/refine-core';
import { notificationProvider, Layout, ErrorComponent } from '@pankod/refine-antd';
import routerProvider from '@pankod/refine-react-router';
import '@pankod/refine-antd/dist/styles.min.css';
import { DashboardDataProvider } from 'api';
import { authProvider } from './authProvider';
import { Login } from 'pages/login';
import {
  // RoleModule,
  // AclModule,
  // UserModule,
  // EntrepreneurModule,
  // ProductCategoryModule,
  ProductModule,
  // ServiceCategoryModule,
  // TalentModule,
  // ServiceModule,
  // ExportOfferModule,
  // ExportOfferCategoryModule,
  // ExportCourseModule,
  // ExporterModule,
  // CourseSessionModule,
  // CourseChapterModule,
  // AcademyModule,
  // AcademyCategoryModule,
  // DestinationModule,
  // TransportationModule,
  // ProductPackageModule,
  OrderModule,
  CustomerModule,
  AvailableModule,
  OrderItemModule,
} from 'pages';
import { Sidebar } from 'components';

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      Layout={Layout}
      dataProvider={{
        default: DashboardDataProvider(`${process.env.REACT_APP_BASE_URL}`),
      }}
      authProvider={authProvider}
      LoginPage={Login}
      resources={[
        // DestinationModule,
        // TransportationModule,
        // ProductPackageModule,
        OrderModule,
        CustomerModule,
        OrderItemModule,
        // RoleModule,
        // AclModule,
        // UserModule,
        // EntrepreneurModule,
        // ProductCategoryModule,
        ProductModule,
        AvailableModule,
        // ServiceCategoryModule,
        // TalentModule,
        // ServiceModule,
        // ExportOfferModule,
        // ExportOfferCategoryModule,
        // ExportCourseModule,
        // ExporterModule,
        // CourseSessionModule,
        // CourseChapterModule,
        // AcademyModule,
        // AcademyCategoryModule,
      ]}
      Sider={Sidebar}
      catchAll={<ErrorComponent />}
    />
  );
}

export default App;
