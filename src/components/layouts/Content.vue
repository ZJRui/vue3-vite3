<template>
    <transition name="page-toggle">
        <router-view class="app-content" />
    </transition>
</template>
<style lang="less" scoped>
.app-content{
    padding: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    background-color: #FFF;
    border-radius: 5px;
}
</style>