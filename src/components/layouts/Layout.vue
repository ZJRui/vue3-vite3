<template>
    <div class="app-layout has-sider">
        <layout-sider/>
        <layout-main />
    </div>
</template>

<script setup>
import LayoutSider from './Sider.vue'
import LayoutMain from './Main.vue'
</script>

<style lang="less" scoped>
.app-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;

    &.has-sider {
        flex-direction: row;
    }
}
</style>
