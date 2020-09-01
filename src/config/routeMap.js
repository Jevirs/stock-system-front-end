import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'), loading: Loading });
const User = Loadable({ loader: () => import(/*webpackChunkName:'User'*/'@/views/user'), loading: Loading });
const Trade = Loadable({ loader: () => import(/*webpackChunkName:'Trade'*/'@/views/trade'), loading: Loading });
const Sector = Loadable({ loader: () => import(/*webpackChunkName:'Sector'*/'@/views/sector'), loading: Loading });
const Account = Loadable({ loader: () => import(/*webpackChunkName:'Account'*/'@/views/account'), loading: Loading });
const Error404 = Loadable({ loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'), loading: Loading });

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/trade", component: Trade, roles: ["admin", "guest"] },
  { path: "/account", component: Account, roles: ["admin"] },
  { path: "/sector", component: Sector, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
