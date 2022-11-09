<template>
  <h3>Home page</h3>
  <el-button @click="getTest">Get Request Test</el-button>
  <div v-if="state.result && state.result.length > 0">
    <div class="item" v-for="item in state.result" :key="item.id">
      id: {{ item.id }}, name: {{ item.name }}, email: {{ item.email }}
    </div>
  </div>
  <Loading />
  <div class="chess-board">
    <div class="one"></div>
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
  撒旦法撒旦法撒旦法撒旦法是
    <!-- <div class="two"></div>
    <div class="one"></div>
    <div class="two"></div>
    <div class="one"></div>
    <div class="two"></div>
    <div class="one"></div>
    <div class="two"></div>
    <div class="one"></div> -->
  </div>
  <div class="triangle">
  </div>
</template>

<script setup>
import { getDemo } from "@/api/demo";
import { reactive } from "vue";

console.log(Math.sqrt(100**2 - 50**2))
const state = reactive({
  loading: false,
  result: [],
});
function getTest() {
  const param = {
    postId: 1,
  };
  getDemo(param)
    .then((res) => {
      // 成功后这里处理业务逻辑
      state.result = res;
    })
    .catch((err) => {
      // 失败了这里处理业务逻辑
    });
}
</script>
<style lang="scss" scoped>
.chess-board {
  width: 300px;
  height: 300px;
  .one {
    float: right;
    width: 100px;
    height: 100px;
    background-color: black;
  }
  .two {
    float: right;
    width: 100px;
    height: 100px;
    background-color: white;
  }
}
.triangle {
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-right: 100px solid green;
}
</style>