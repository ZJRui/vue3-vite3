<template>
    <a-layout-sider :trigger="null" :width="256">
        <div>
            <router-link to="/">
                log
            </router-link>
        </div>
        <sider-menu />
    </a-layout-sider>
</template>

<script setup>
import SiderMenu from './Menu.vue';
</script>

<style lang="less" scoped>

</style>
