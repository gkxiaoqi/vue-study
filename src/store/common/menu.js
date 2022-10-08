// 不写，演示用

export default {
  state: {
    isCollapse: true, // 控制菜单展开与折叠
    menuList: [],
  },
  mutations: {
    change(state, status) {
      state.isCollapse = Boolean(status);
    },
  },
  actions: {},
  getters: {},
  modules: {},
};
