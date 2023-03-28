<template>
    <transition name="page-toggle">
      <router-view />
    </transition>
  </template>
  
  
  <style scoped lang="less">
  // 页面切换动画
  .page-toggle-enter-active {
    transition: all 0.2s ease-in 0.25s;
  }
  .page-toggle-leave-active {
    transition: all 0.2s ease-out 0s;
  }
  .page-toggle-enter,
  .page-toggle-leave-to {
    opacity: 0;
  }
  </style>
  