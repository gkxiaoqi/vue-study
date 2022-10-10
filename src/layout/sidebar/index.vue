<template>
  <div class="logo-hd">
    <h2><span class="big">A</span><span class="sub-tit">dmin</span></h2>
  </div>
  <!-- 这里放菜单信息 -->
  <el-menu
    class="menu"
    active-text-color="#409eff"
    background-color="#001529"
    text-color="#fff"
    default-active="1"
    :unique-opened="true"
    :default-openeds="['1', '2']"
  >
    <el-sub-menu
      v-for="(item, index) in menuList"
      :key="item.id"
      :index="'m-' + index"
    >
      <template #title>
        <el-icon :size="14">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span class="menu-name">{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="(child, childIndex) in item.children"
        :key="child.id"
        :index="index + '-' + childIndex"
      >
        <a
          :target="child.target"
          v-if="child.target"
          @click="handleOpenNewWindow"
          >{{ child.name }}</a
        >
        <router-link :to="child.url" class="menu-name" v-else>{{
          child.name
        }}</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const menuList = reactive([
  {
    id: 1,
    name: "首页",
    url: "/home",
    meta: {
      icon: "House",
    },
    children: [
      { id: 3, name: "运营中心", url: "/home" },
      { id: 4, name: "流星特效", url: "/home1", target: "_blank" },
      { id: 5, name: "Canvas", url: "/canvas" },
    ],
  },
]);
const handleOpenNewWindow = () => {
  const routerData = router.resolve({ name: "home1" });
  window.open(routerData.href, "_blank");
};
</script>

<style lang="scss" scoped>
$menuColor: #409eff;
.logo-hd {
  text-align: center;
  color: #fff;
}
h2 {
  font-size: 20px;
}
.big {
  font-size: 24px;
  font-weight: 500;
  color: #f60;
}
.sidebar-hide .sub-tit {
  display: none;
}

.menu {
  border-right: 0;
  transition: all 0.2s;
}
.menu-name {
  color: #fff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.is-opened .el-menu-item {
  background-color: #000c17;
}
.is-opened .is-active {
  background-color: $menuColor !important ;
}
.el-menu-item {
  font-size: 12px;
  --el-menu-sub-item-height: 40px;
  --el-menu-active-color: $menuColor;
  a {
    text-decoration: none;
    color: hsla(0, 0%, 100%, 0.65);
  }
  .router-link-active {
    color: #fff;
  }
}
.is-active {
  background-color: $menuColor;
}
.is-active:hover {
  background-color: $menuColor;
}
.el-menu-item:hover {
  a {
    color: #fff;
  }
}
</style>

