const tokens = {
  admin: "admin-token",
  guest: "operator-token"
};

const users = {
  "admin-token": {
    id: 1,
    user_id: "1",
    role_id: "1",
    user_name: "管理A",
    user_passwd: "admin123456",
    remark: "管理员A",
  },
  "operator-token": {
    id: 2,
    user_id: "2",
    role_id: "2",
    user_name: "操作员B",
    user_passwd: "operator8888",
    remark: "华西证券VIP操作员",
  },
};

export default {
  login: (config) => {
    const { user_name } = JSON.parse(config.body);
    const token = tokens[user_name];
    if (!token) {
      return {
        status: 1,
        message: "用户名或密码错误",
      };
    }
    return {
      status: 0,
      data: users[token]
    }
  },
  getInfo: (config) => {
    const { token } = JSON.parse(config.body);
    return {
      status: 0,
      data: users[token]
    }
  },
  getUsers: () => {
    return {
      status: 0,
      data: Object.values(users),
    };
  },
  deleteUser: (config) => {
    return {
      status: 0,
    };
  },
  editUser: (config) => {
    return {
      status: 0,
    };
  },
  addUser: (config) => {
    return {
      status: 0,
    };
  },
  logout: (_) => {
    return {
      status: 0,
    };
  },
};
