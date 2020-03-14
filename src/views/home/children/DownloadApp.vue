<template>
  <div class="downLoadSDFApp" v-if="show">
      <div class="close" @click="show = false"></div>
      <div class="sdficon"></div>
      <div class="dwonText">
          <div class="d-title">下载闪电修APP</div>
          <div class="d-suntitle">极速上门 先修后付</div>
      </div>
      <a href="/" class="dwonLoadBtn">立即下载</a>
  </div>
</template>

<script>
export default {
  name: 'DownloadApp',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="less" scoped>
.downLoadSDFApp {
  display: flex;
  align-items: center;
  height: 1rem;
  background: rgba(127, 127, 127, 1);
  
  .close{
    margin-left: .24rem;
    width: .32rem;
    height: .32rem;
    background: url(~assets/img/miniClose.png) no-repeat;
    background-size: 100% 100%;
  }
  .sdficon{
    width: .84rem;
    height: .84rem;
    background: url(~assets/img/sdfIcon.png) no-repeat;
    background-size: 100% 100%;
    margin-left: .12rem;
  }
  .dwonText{
    flex: 1;
    margin-left: .24rem;

    .d-title{
      font-size: .28rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: .4rem;
    }
    .d-suntitle{
      font-size: .24rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: .34rem;
    }
  }
  .dwonLoadBtn{
    width: 2.2rem;
    background: rgba(25, 211, 197, 1);
    font-size: .32rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: .44rem;
    text-shadow: 0.02rem 0.02rem 0rem rgba(13, 169, 180, 1);
    line-height: 1rem;
    text-align: center;
  }
}
</style>