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

    <!-- title -->
    <home-title href="/">
      <span slot="title">四步维修流程</span>
      <span slot="tip">帮助中心</span>
    </home-title>
    <!-- 维修流程 -->
    <div class="maintain-flow">
      <img src="https://source1.suddenfix.com/2019/mini/maintainFlowImg.png" alt="">
    </div>

    <!-- title -->
    <home-title>
      <span slot="title">常见问题</span>
    </home-title>
    <!-- 常见问题 -->
    <home-issue></home-issue>

    <!-- title -->
    <home-title href="/">
      <span slot="title">维修资讯</span>
      <span slot="tip">更多资讯</span>
    </home-title>
    <!-- 维修资讯 -->
    <repair-news></repair-news>

    <!-- title -->
    <home-title href="/">
      <span slot="title">合作伙伴</span>
      <span slot="tip">了解更多</span>
    </home-title>
    <!-- 维修资讯 -->
    <home-partner></home-partner>

    <!-- 备案 -->
    <div class="base-line">
      <p>粤ICP备15087042号</p>
    </div>

  </div>
</template>

<script>
import DownloadApp from './children/DownloadApp'
import HomeBanner from './children/HomeBanner'
import NavList from './children/NavList'
import ShowSpecialList from './children/ShowSpecialList'
import HomeTitle from './children/HomeTitle'
import HomeIssue from './children/HomeIssue'
import RepairNews from './children/RepairNews'
import HomePartner from './children/HomePartner'


export default {
  name: "Home",
  components: {
    DownloadApp,
    HomeBanner,
    NavList,
    ShowSpecialList,
    HomeTitle,
    HomeIssue,
    RepairNews,
    HomePartner
  }
}
</script>

<style lang="less" scoped>
#home{
  padding-bottom: 1rem;
}

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

// 维修流程
.maintain-flow{
  margin-bottom: .5rem;
  padding: 0 0.24rem;

  img{
    width: 100%;
  }
}

// 备案号
.base-line{
  background: rgba(245, 247, 250, 1);
  font-size: .24rem;
  font-weight: 400;
  color: rgba(191, 194, 204, 1);
  line-height: .96rem;
  text-align: center;
}
</style>