<template>
<div :style="{ background: 'var(--bg-color-page)' }">
    <t-menu expandMutex>
      <t-menu-item value="0" :to="'/home'">
        <template #icon>
          <t-icon name="app" />
        </template>
        仪表盘{{ showSettingPanel }}
      </t-menu-item>
      <t-submenu value="1" title="金融频道">
        <template #icon>
          <t-icon name="money-circle" />
        </template>
        <t-menu-item value="1-1">
          <span>更新日期</span>
        </t-menu-item>
        <t-menu-item value="1-2">
          <span>股票列表</span>
        </t-menu-item>
      </t-submenu>
      <t-submenu value="2" title="学习频道">
        <template #icon>
          <t-icon name="edit" />
        </template>
        <t-submenu value="2-1" title="试卷">
          <t-menu-item value="3-1">一年级</t-menu-item>
          <t-menu-item value="3-2">二年级</t-menu-item>
          <t-menu-item value="3-3">三年级</t-menu-item>
        </t-submenu>
        <t-menu-item value="2-2">
          <span>考题字典</span>
        </t-menu-item>
      </t-submenu>
      <t-menu-item value="5" :to="'/about'">
        <template #icon>
          <t-icon name="view-module" />
        </template>
        关于我们
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();
const {showSettingPanel} = storeToRefs(settingStore)
</script>

<style lang="less" scoped>

</style>
