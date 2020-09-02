import Mock from "mockjs";
let List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: i,
      name: "@cname(5, 10)",
      time: "@datetime",
      remark: "@ctitle(10, 20)"
    })
  );
}
export default {
  getSector: (config) => {

    return {
      code: 0,
      data: {
        total: List.length,
        list: List,
      },
    };
  },
  deleteSector: (config) => {
    const { id } = JSON.parse(config.body);
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1);
    return {
      code: 0,
    };
  },
  editSector: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1, data);
    return {
      code: 0,
    };
  },
  addSector: (config) => {

  }
};
