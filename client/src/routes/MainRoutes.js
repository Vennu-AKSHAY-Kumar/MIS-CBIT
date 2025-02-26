import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));


//Blocks Data 
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/Ablockdata')));
const CblockData = Loadable(lazy(() => import('views/utilities/Cblockdata')));
const DblockData = Loadable(lazy(() => import('views/utilities/Dblockdata')));
const NblockData = Loadable(lazy(() => import('views/utilities/Nblockdata')));
const KblockData = Loadable(lazy(() => import('views/utilities/Kblockdata')));
const LblockData = Loadable(lazy(() => import('views/utilities/Lblockdata')));
const BblockData = Loadable(lazy(() => import('views/utilities/Bblockdata')));
const MblockData = Loadable(lazy(() => import('views/utilities/Mblockdata')));
const GblockData = Loadable(lazy(() => import('views/utilities/Gblockdata')));
const HblockData = Loadable(lazy(() => import('views/utilities/Hblockdata')));
const SMSblockData = Loadable(lazy(() => import('views/utilities/SMSblockdata')));
const RDblockData = Loadable(lazy(() => import('views/utilities/R&Dblockdata')));
const SampleData = Loadable(lazy(() => import('views/utilities/LblockAllData')));
const AlldataLblock = Loadable(lazy(() => import('views/utilities/LblockAlldatapublic')));
const Allfilter = Loadable(lazy(() => import('views/FilterSearch/FilterSearch')));

//Admin Data 
const AdminABlock = Loadable(lazy(() => import('views/utilities/AdminAblock')));
const AdminBBlock = Loadable(lazy(() => import('views/utilities/AdminBblock')));
const AdminCBlock = Loadable(lazy(() => import('views/utilities/AdminCblock')));
const AdminDBlock = Loadable(lazy(() => import('views/utilities/AdminDblock')));
const AdminNBlock = Loadable(lazy(() => import('views/utilities/AdminNblock')));
const AdminKBlock = Loadable(lazy(() => import('views/utilities/AdminKblock')));
const AdminMBlock = Loadable(lazy(() => import('views/utilities/AdminMblock')));
const AdminLBlock = Loadable(lazy(() => import('views/utilities/AdminLblock')));
const AdminGBlock = Loadable(lazy(() => import('views/utilities/AdminGblock')));
const AdminHBlock = Loadable(lazy(() => import('views/utilities/AdminHblock')));
const AdminRDBlock = Loadable(lazy(() => import('views/utilities/AdminR&Dblock')));
const AdminSMSBlock = Loadable(lazy(() => import('views/utilities/AdminSMSblock')));

const AdminBulkUpload = Loadable(lazy(() => import('views/utilities/AdminBulkUpload')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/librarypage')));
const FilterSearch = Loadable(lazy(() => import('../menu-items/DataTable')));
const OutdoorSports = Loadable(lazy(() => import('views/outdoorsports')));
const IndoorSports = Loadable(lazy(() => import('views/indoorsports')));

//footer 
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'data',
          element: <FilterSearch/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Ablock',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Cblock',
          element: <CblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Dblock',
          element: <DblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Nblock',
          element: <NblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Kblock',
          element: <KblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Mblock',
          element: <MblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
       
        {
          path: 'Lblock',
          element: <LblockData/>,
          children:[
            {
              path: 'IT',
              element: <AlldataLblock/>
            },
          ]
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Bblock',
          element: <BblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Gblock',
          element: <GblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'Hblock',
          element: <HblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'SMSblock',
          element: <SMSblockData/>
        }
      ]
    },
    {
      path: 'blocks',
      children: [
        {
          path: 'R&Dblock',
          element: <RDblockData/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Ablock',
          element: <AdminABlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Bblock',
          element: <AdminBBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Cblock',
          element: <AdminCBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Dblock',
          element: <AdminDBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Gblock',
          element: <AdminGBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Hblock',
          element: <AdminHBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Kblock',
          element: <AdminKBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Mblock',
          element: <AdminMBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Nblock',
          element: <AdminNBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'Lblock',
          element: <AdminLBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'R&Dblock',
          element: <AdminRDBlock/>
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'SMSblock',
          element: <AdminSMSBlock/>
        }
      ]
    },
    {
      path: 'alldata',
      element: <Allfilter />
    },
    {
      path: '/bulkupload',
      element: <AdminBulkUpload />
    },
    {
      path: 'librarypage',
      element: <SamplePage />
    },
    {
      path: 'outdoorsports',
      element: <OutdoorSports />
    },
    {
      path: 'indoorsports',
      element: <IndoorSports />
    },
    {
      path: 'sampledata',
      element: <SampleData/>
    },
    {
      path: 'IT',
      element: <AlldataLblock/>
    },
    
  ]
};

export default MainRoutes;
