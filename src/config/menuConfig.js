/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */

import { HomeOutlined, UserOutlined, PayCircleOutlined, MenuOutlined, ProfileOutlined } from '@ant-design/icons';

const menuList = [
  {
    title: "总控台",
    path: "/dashboard",
    icon: HomeOutlined,
    roles: ["admin"]
  },
  {
    title: "账户管理",
    path: "/account",
    icon: ProfileOutlined,
    roles: ["admin"]
  },
  {
    title: "交易管理",
    path: "/trade",
    icon: PayCircleOutlined,
    roles: ["admin", "guest"]
  },
  {
    title: "板块管理",
    path: "/plate",
    icon: MenuOutlined,
    roles: ["admin"]
  },
  {
    title: "用户管理",
    path: "/user",
    icon: UserOutlined,
    roles: ["admin"]
  }
];
export default menuList;
