import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Store from './store'
import TDesign from 'tdesign-vue-next';
import Router from './router';
import Directives from './directives' // 引入指令模块

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(Router).use(Store).use(TDesign).use(Directives).mount('#app')
