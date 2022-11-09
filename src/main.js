import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import store from './store/index';
// 权限路由过滤
import './permission';
import Loading from './components/Loading';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(Loading);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
