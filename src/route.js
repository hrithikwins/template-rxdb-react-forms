import AssessmentIcon from '@material-ui/icons/Assessment';
import StorageIcon from '@material-ui/icons/Storage';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import SortByAlphaOutlinedIcon from '@material-ui/icons/SortByAlphaOutlined';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import DashBoard from 'views/dashboard/DashBoard.js';
import Data from 'views/Data/Data.js';

// import App from 'realtime/database/data/app.js';
// import Data from 'views/Data/Data.js';
// import EditProduct from 'views/Data/EditProduct.js';


const createRoutes = [
  {
    path: "/app",
    name: "Summary",
    icon: AssessmentIcon,
    component: DashBoard,
  },
  {
    path: "/data",
    name: "Data Management",
    icon: StorageIcon,
    component: Data,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: AccountBalanceWalletOutlinedIcon,
    component: DashBoard,
  },
  {
    path: "/barcode",
    name: "Barcode",
    icon: HorizontalSplitIcon,
    component: DashBoard,
  },
  {
    path: "/report",
    name: "Reports",
    icon: ReceiptIcon,
    component: DashBoard,
  },
  {
    path: "/query",
    name: "Queries",
    icon: SortByAlphaOutlinedIcon,
    component: DashBoard,
  },
  {
    path: "/utilities",
    name: "Utilities",
    icon: PhonelinkSetupIcon,
    component: DashBoard,

  },
  {
    path: "/rtl-page",
    name: "System Admin",
    icon: SupervisorAccountIcon,
    component: DashBoard,
  },
  {
    path: "/upgrade-to-pro",
    name: "Logout",
    icon: ExitToAppOutlinedIcon,
    component: DashBoard,
  },
  {
    path: "/edit-product",
    icon: ExitToAppOutlinedIcon,
    name: "Edit Products",
    component: DashBoard,
  }
];


export default createRoutes;
