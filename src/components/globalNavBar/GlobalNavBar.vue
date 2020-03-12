<template>
  <div id="nav-bar">
    <global-nav-bar-item url="/home">
      <i class="iconfont icon-shouyex"></i>
      <p>首页</p>
    </global-nav-bar-item>
    <global-nav-bar-item url="/repair">
      <i class="iconfont icon-weixiu"></i>
      <p>维修</p>
    </global-nav-bar-item>
    <global-nav-bar-item url="/profile">
      <i class="iconfont icon-wode1"></i>
      <p>我的</p>
    </global-nav-bar-item>
  </div>
</template>

<script>
import GlobalNavBarItem from "./GlobalNavBarItem"

export default {
  name: "GlobalNavBar",
  components: {
    GlobalNavBarItem
  }
}
</script>

<style lang="less" scoped>
#nav-bar{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 1rem;
  padding: 0rem .46rem;
  background-color: #fff;
  box-shadow: 0px 1px 0px 0px rgba(237,239,242,1);
  border-top: 1px solid #EDEFF2;
}
</style>