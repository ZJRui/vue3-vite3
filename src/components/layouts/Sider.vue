<template>
  <div :style="{ background: 'var(--bg-color-page)' }">
    <t-menu expandMutex :collapsed="showSettingPanel">
      <template v-for="(item, index) in menusList" :key="index">
        <Menu :menusObj="item"></Menu>
      </template>
    </t-menu>
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
import { computed } from 'vue';
import { useSettingStore, useResTagsStore } from '@/store';
//获取到store对象
const settingStore = useSettingStore();
//执行store对象的action
settingStore.getMenus();

//定义当前模块中使用到的属性， 通过计算属性的方式定义， 依赖的是store中的属性
const showSettingPanel = computed(() => settingStore.showSettingPanel);
const widthSider = computed(() => showSettingPanel ? '232px' : '64px');
const menusList = computed(() => settingStore.menusList);


const resTagsStore = useResTagsStore();
//返回Promise对象
let reqTagsMsgResult = resTagsStore.reqResTags();
reqTagsMsgResult.then((resMsg) => {
  console.log("")
}).catch((err) => {
  //弹窗提示错误信息
  console.log(err)
})



</script>

<style lang="less">
.t-layout__sider {
  width: v-bind(widthSider);
}
</style>
