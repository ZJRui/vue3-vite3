<template>
    <t-head-menu value="item1" height="120px">
        <template #logo>
            <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
            <t-button theme="default" shape="square" variant="text" @click="changeCollapsed">
                <t-icon class="collapsed-icon" name="view-list" />
            </t-button>
        </template>
        <template #operations>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
            <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        </template>
    </t-head-menu>
</template>
<script setup>
// import { useSettingStore } from '@/store';
// const settingStore = useSettingStore();
// const changeCollapsed = () => {
//   settingStore.updateConfig({
//     isSidebarCompact: !settingStore.isSidebarCompact,
//   });
// };
</script>
<style scoped>
</style>