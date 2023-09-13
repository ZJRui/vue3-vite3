import { createRouter, createWebHistory } from 'vue-router';

import baseRouters from './modules';

//QUESTION  为什么这个地方需要展开，而不是直接赋值？
//而 ... 运算符用于展开数组元素，将数组的内容复制到新数组中。
//这种方式可以确保 routes 数组是一个新的数组，而不是引用了 baseRouters 的相同数组。
//这对于后续可能对 routes 数组的修改或操作非常有用，因为它不会影响到原始的 baseRouters 数组。
const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  //滚动行为 to,from , 第三个参数 savedPosition，只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发）
  //返回一个ScrollToOptions位置对象，返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior(to,from,savedPosition) {
    //表示始终在app元素上方0px位置滚动
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

//路由守卫
router.beforeEach((to, from, next)=>{
  document.title = to.meta.title || "后台";
  const role = true;// localStorage.getItem("userName")
  if(!role && to.path !== "/login"){
    next("/login");
  }else{
    if(to.path === "/"){
      next("/home");
    }else{
      next();
    }
  }
});

export default router;