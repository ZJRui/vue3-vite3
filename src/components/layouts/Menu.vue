<template>
    <template v-if="menusObj?.children && menusObj.children.length>0 ">
      <t-submenu :value="menusObj.id" :title="menusObj.title">
        <template v-if="menusObj.icon && menusObj.parentId==0" #icon>
          <t-icon :name="menusObj.icon" />
        </template>
        <template v-for="(item, index) in menusObj.children" :key="index">
            <Menu :menusObj="item"></Menu>
        </template>
      </t-submenu>
    </template>
    <template v-else>
      <t-menu-item :value="menusObj.id" :title="menusObj.title" :to="menusObj.url">
        <template v-if="menusObj.icon && menusObj.parentId==0" #icon>
          <t-icon :name="menusObj.icon" />
        </template>
        {{menusObj.title}}
      </t-menu-item>
    </template>
</template>
<script setup>
import Menu from './Menu.vue'
import { defineProps } from 'vue'
const props = defineProps({
    menusObj: {
        type: Object,
        default: ()=>{
            return {}
        }
    }
});
</script>
<style lang="less">
</style>