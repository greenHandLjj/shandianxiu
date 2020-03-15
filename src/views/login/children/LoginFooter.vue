<template>
  <div class="login-footer">
    <div class="link">
        <a class="help" href="/">帮助</a>
        <a class="privacy" href="/">隐私</a>
    </div>
    <p class="copyright">copyright&nbsp;©&nbsp;2016-2019&nbsp;深圳闪电修网络科技有限公司</p>
  </div>
</template>

<script>

export default {
  name: "LoginFooter",
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
.login-footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;

  .link{
    display: flex;
    justify-content: space-around;
    width: 4.08rem;
    margin: 0 auto;
    padding-bottom: .16rem;
    line-height: .44rem;
    
    a{
      font-size: .28rem;
      color: rgba(0,0,0,0.45);
    }
  }

  .copyright{
    font-size: .24rem;
    color: rgba(0,0,0,0.45);
    line-height: .4rem;
    padding-bottom: .48rem;
  }
}
</style>