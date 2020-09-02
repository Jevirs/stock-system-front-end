const getOptions = (dict) => {
  let options = [];
  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      const value = dict[key];
      options.push({
        key,
        value
      })
    }
  }
  return options;
}

const roleDict = {
  '1': 'admin',
  '2': 'operator'
};
const cnRoleDict = {
  '1': '管理员',
  '2': '交易员'
};


export { roleDict, cnRoleDict, getOptions }; 