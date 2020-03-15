<template>
  <div id="login">
    <!-- logo -->
    <div class="login-header">
        <img class="login-logo" src="~assets/img/login.svg" alt="">
        <p class="slogan">让高效服务创造社会价值</p>
    </div>

    <!-- 登录表单 -->
    <login-form></login-form>

    <!-- 底部 -->
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginForm from './children/LoginForm'
import LoginFooter from './children/LoginFooter'

export default {
  name: "Login",
  components: {
    LoginForm,
    LoginFooter
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
#login{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  height: 100vh;

  .login-header{
    margin-top: .5rem;
    text-align: center;

    .login-logo{
      width: 6.28rem;
      height: .62rem;
      margin: 0 auto 0;
      display: block;
    }
    .slogan{
      margin-top: .36rem;
      font-size: .28rem;
      color: rgba(0,0,0,0.45);
      line-height: .44rem;
      text-align: center;
    }
  }

}
</style>