
//QUESTION: 这种写法可以吗？ from后面是一个路径，而不是指定的文件
import { Layout } from '@/components/layouts';

//QUESTION Vue3中setUp语法，没有export name，那么组件的名称是如何确定的？
import ResLayout from '@/components/layouts/ResLayout.vue'


export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "登录页"
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/res',
    name: '资源',
    meta: {
      title: "资源"
    },
    // component:()=>import('@/views/Res.vue')
    component: ResLayout

  },
  {
    path: '/',
    name: 'index',
    meta: {
      title: "首页"
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: "首页",
          rights: ['views', 'add'],
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: "关于"
        },
        component: () => import('@/views/About.vue')
      }
    ]
  }
];