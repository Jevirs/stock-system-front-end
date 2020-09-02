import Mock from "mockjs";
import loginAPI from "./login";
import sectorAPI from './sector'

/* 登录 */
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);

/* 用户模块 */
Mock.mock(/\/user\/info/, "get", loginAPI.getInfo);
Mock.mock(/\/user\/list/, "get", loginAPI.getUsers);
Mock.mock(/\/user\/delete/, "post", loginAPI.deleteUser);
Mock.mock(/\/user\/edit/, "post", loginAPI.editUser);
Mock.mock(/\/user\/add/, "post", loginAPI.addUser);

/* 板块模块 */
Mock.mock(/\/sector\/list/, "get", sectorAPI.getSector);
Mock.mock(/\/sector\/delete/, "post", sectorAPI.deleteSector);
Mock.mock(/\/sector\/edit/, "post", sectorAPI.editSector);
Mock.mock(/\/sector\/add/, "post", sectorAPI.addSector);

export default Mock;
