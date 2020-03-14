<template>
  <div class="nav-list">
      <a class="nav-single" v-for="(item, index) in navList" :key="index" :href="item.href">
          <img :src="item.src" :alt="item.title" class="nav-img">
          <div class="nav-title">{{item.title}}</div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data() {
    return {
      navList: [
        {
          href: 'https://mfix.suddenfix.com/index/selectmodel.html?modelProblemId=13',
          src: 'https://source1.suddenfix.com/mini/main_icon/screen2.png',
          title: '换屏幕'
        },
        {
          href: 'https://mfix.suddenfix.com/index/selectmodel.html?modelProblemId=15',
          src: 'https://source1.suddenfix.com/mini/main_icon/battery2.png',
          title: '换电池'
        },
        {
          href: 'https://mfix.suddenfix.com/index/selectmodel.html?modelProblemId=26',
          src: 'https://source1.suddenfix.com/mini/main_icon/ram2.png',
          title: '内存升级'
        },
        {
          href: 'https://mfix.suddenfix.com/index/selectmodel.html',
          src: 'https://source1.suddenfix.com/mini/main_icon/other2.png',
          title: '更多服务'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nav-list{
  padding-top: .44rem;
  padding-bottom: .38rem;
  padding-left: .44rem;
  padding-right: .42rem;
  display: flex;
  justify-content: space-between;

  .nav-single{
    width: 1.12rem;

    .nav-img{
      width: 1.12rem;
      height: 1.12rem;
    }
    .nav-title{
      font-size: .24rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: .36rem;
      padding-top: .12rem;
      text-align: center;
    }

  }

}
</style>