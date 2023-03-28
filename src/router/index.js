import { createRouter, createWebHistory } from 'vue-router';

import baseRouters from './modules';

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
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
    next();
  }
});

export default router;