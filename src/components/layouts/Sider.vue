<template>
<div :style="{ background: 'var(--bg-color-page)'}">
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
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();
settingStore.getMenus();
const showSettingPanel = computed(()=>settingStore.showSettingPanel);
const widthSider = computed(()=>showSettingPanel ? '232px' : '64px');
const menusList = computed(()=>settingStore.menusList);
</script>

<style lang="less">
.t-layout__sider{
  width: v-bind(widthSider);
}
</style>
