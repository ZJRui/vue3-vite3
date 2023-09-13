<template>
    <div class="common-layout">
        <el-container class="border-2 border-rose-600 ">
            <el-header class="nav-header border-2 border-green-600">
                <div class="navbar-wrapper">
                    <el-link href="/">
                        <el-image src="https://element-plus.org/images/element-plus-logo.svg" fit="fit">
                            <template #placeholder>
                                <div class="image-slot">Loading<span class="dot">...</span></div>
                            </template>
                        </el-image>
                    </el-link>
                </div>
            </el-header>
            <el-container class="">

                <el-aside style="height: 1200px;" class="sidebar border-yellow-500 border-2
                fixed
                
                ">Aside</el-aside>
                <div id="page-content" class="page-content has-sidebar">
                    <el-container style="height: 2000px;">
                        <el-main class="border border-indigo-600 ">

                            <el-container>

                                <el-main class="doc-content-container">Main</el-main>
                                <el-aside width="200px" class="toc-wrapper">

                                    <div class="navLeftBar">
                                        <el-link :underline="false">Without Underline</el-link>
                                        <el-link :underline="false">Without Underline</el-link>
                                        <el-link :underline="false">Without Underline</el-link>
                                        <el-link :underline="false">Without Underline</el-link>
                                        <el-link :underline="false">Without Underline</el-link>
                                    </div>
                                </el-aside>
                            </el-container>


                        </el-main>
                        <el-footer class="border border-orange-400 ">Footer</el-footer>
                    </el-container>
                </div>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup>


import { Edit, View as IconView } from '@element-plus/icons-vue'

</script>
<style scoped>
.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}

.dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
}

.navbar-wrapper {
    padding: 0 32px;

}

.nav-header {
    position: sticky;
    top: 0;
}

.page-content {
   
    width: 100%;
}
.doc-content-container {
    width: 800px;
}

.toc-wrapper {
    padding-left: 96px
}
.navLeftBar{
    width: 100px;
    position:sticky;
    top:85px
}
</style>