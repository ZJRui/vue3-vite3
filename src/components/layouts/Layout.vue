<template>
    <t-layout>
        <t-header>
            <app-header/>
        </t-header>
        <t-layout>
            <t-aside style="border-top: 1px solid var(--component-border)">
                <app-sider />
            </t-aside>
            <t-layout>
                <t-content>
                    <app-content />
                </t-content>
                <t-footer>
                    <app-footer/>
                </t-footer>
            </t-layout>
        </t-layout>
    </t-layout>
</template>

<script setup>
import AppHeader from './Header.vue'
import AppSider from './Sider.vue'
import AppContent from './Content.vue'
import AppFooter from './Footer.vue'
</script>

<style lang="less" scoped>
.t-layout{
    height: 100%;
    .t-layout__content{
        height: calc(100% - 36px);
    }
    .t-layout__footer{
        width: 100%;
        height: 36px;
        padding: 0;
        line-height: 36px;
        text-align: center;
        color: #333;
        background-color: #FFF;
    }
}
</style>
