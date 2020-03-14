<template>
  <div id="home">
    <!-- 下载链接 -->
    <download-app></download-app>
    <!-- banner -->
    <home-banner></home-banner>
    <!-- 导航条 -->
    <nav-list></nav-list>
    <!-- ad -->
    <a href="/" class="newUserGetCoupon">
      <img src="https://source1.suddenfix.com/app/img/readpack_v2-normal.png" alt="闪电修新人福利">
    </a>
    <!-- 专题页 -->
    <show-special-list></show-special-list>
  </div>
</template>

<script>
import DownloadApp from './children/DownloadApp'
import HomeBanner from './children/HomeBanner'
import NavList from './children/NavList'
import ShowSpecialList from './children/ShowSpecialList'

export default {
  name: "Home",
  components: {
    DownloadApp,
    HomeBanner,
    NavList,
    ShowSpecialList
  }
}
</script>

<style lang="less" scoped>
// ad
.newUserGetCoupon{
  width: 100%;
  height: 2.04rem;
  margin-bottom: .48rem;
  display: block;

  img{
    width: 100%;
    height: 100%;
  }
}
</style>