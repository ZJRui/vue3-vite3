<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="2"></el-col>
                    <el-col :span="22">
                        <el-link href="/">
                            <el-image src="http://shuyuan.cherryjr.com/logo.png" fit="fit">

                                <template #placeholder>
                                    <div class="image-slot">Loading<span class="dot">...</span></div>
                                </template>
                            </el-image>
                        </el-link>
                        <el-link :icon="Edit">Edit</el-link>
                    </el-col>
                    <el-col :span="2"></el-col>
                </el-row>



            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
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
.demo-image__placeholder .dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}</style>