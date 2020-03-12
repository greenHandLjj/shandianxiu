<template>
  <div id="app">
    <!-- 主内容区 -->
    <router-view></router-view>
    <!-- 全局底部导航 -->
    <global-nav-bar></global-nav-bar>
  </div>
</template>

<script>
import GlobalNavBar from "components/globalNavBar/GlobalNavBar"

export default {
  name: "App",
  components: {
    GlobalNavBar
  }
}
</script>

<style lang="less">
@import 'assets/css/reset.css';
@import '//at.alicdn.com/t/font_1688230_9er115g9cbb.css';

</style>
