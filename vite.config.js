import { defineConfig } from 'vite'
import { resolve } from 'path';
/**
 * unplugin-auto-import这个插件用于解决在书写组件时，总是需要从vue中import引入相同依赖的重复劳动。
 * import { computed, ref } from 'vue'
 * 使用自动引入后就不需要手动一个个import
 * 插件会在代码被vite或者其他框架处理的时候，解析生成的源码AST（抽象语法树），找到未被导入但是在配置中定义了的模块或变量，然后在源代码中插入对应的 import 语句来导入这些模块或变量
 */
import AutoImport from 'unplugin-auto-import/vite';
/**
 * 使用 unplugin-vue-components 按需引入组件
 */
import Components from 'unplugin-vue-components/vite';
/**
 * TDesignResolver: TDesign 适配桌面端的组件库，
 * https://tdesign.tencent.com/vue/getting-started
 */
import { TDesignResolver } from 'unplugin-vue-components/resolvers';


import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import vue from '@vitejs/plugin-vue'

/**
 * 在学习、调试或创作插件时，我们建议在你的项目中引入 vite-plugin-inspect。 
 * 它可以帮助你检查 Vite 插件的中间状态。安装后，你可以访问 localhost:5173/__inspect/ 
 * 来检查你项目的模块和栈信息。请查阅 vite-plugin-inspect 文档 中的安装说明。
 */
import Inspect from 'vite-plugin-inspect'


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
    AutoImport({

      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],//自动导入vue3的hooks，
      //vue-next: https://tdesign.tencent.com/vue-next/getting-started 其实vue和vue@next是指vue的不同版本，vue-next是vue3
      // resolvers: [TDesignResolver({
      //   library: 'vue-next'
      // })],

      resolvers: [ElementPlusResolver(), TDesignResolver({
        library: 'vue-next'
      }),
      // Auto import icon components
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon',
      }),]
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(), TDesignResolver({
          library: 'vue-next'
        }
        )],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
        },
        math: 'strict',
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    // // 是否开启 https
    // https: false,
    // // 端口号
    // port: 3000,
    // // 监听所有地址
    // host: '192.168.3.19', //'0.0.0.0',
    // // 服务启动时是否自动打开浏览器
    // open: false,
    // // 允许跨域
    // cors: true,
    // 自定义代理规则
    proxy: {
      //代理所有 /api 的请求
      "/api": {
        // 代理请求之后的请求地址
        target: "http://shuyuan.cherryjr.com",//http://shuyuan.cherryjr.com/
        // 跨域配置
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          // Referer: 'http://example.com'
        }
      }
    }
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },


})
