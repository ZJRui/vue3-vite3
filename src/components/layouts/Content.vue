<template>
<a-layout-content>
        <!----此位置可加面包屑-->
        <div>
            <transition name="page-toggle">
                <router-view class="app-content" />
            </transition>
        </div>
    </a-layout-content>
</template>
<style scoped>
</style>