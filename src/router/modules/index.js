import { Layout } from '@/components/layouts';

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title:"登录页"
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    name: 'index',
    meta: {
      title:"首页"
    },
    component: Layout,
    children: [
      {
          path: '/home',
          name: 'home',
          meta: {
            title:"首页",
            rights: ['views', 'add'],
          },
          component: () => import('@/views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title:"关于"
        },
        component: () => import('@/views/About.vue')
      }
    ]
  }
];