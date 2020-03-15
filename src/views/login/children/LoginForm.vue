<template>
  <div class="form">
    <tel-login-form></tel-login-form>
    <!-- <password-login></password-login> -->
    <!-- <forget-password></forget-password> -->
  </div>
</template>

<script>
import TelLoginForm from './TelLoginForm'
import PasswordLogin from './PasswordLogin'
import ForgetPassword from './ForgetPassword'

export default {
  name: "LoginForm",
  components: {
    // 电弧号码登录
    TelLoginForm,
    // 密码登录
    PasswordLogin,
    // 忘记密码
    ForgetPassword
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="less">
.form{
  padding: 0 .32rem;

  // 以下样式直接作用于内部组件元素
  .title{
    font-size: .32rem;
    color: rgba(0,0,0,0.85);
    line-height: .48rem;
    padding-top: .4rem;
    display: inline-block;
    padding-bottom: .4rem;
  }

  input[type='text']{
    background: #FFFFFF;
    border: 0.02rem solid rgba(0,0,0,0.15);
    padding-left: .32rem;
    border-radius: .08rem;
    height: .8rem;
    line-height: .8rem;
    margin-bottom: .48rem;
    font-size: .32rem;

    &::placeholder{
      color: #ccc;
    }
  }

  .captcha,
  .code{
    display: flex;
    justify-content: space-between;

    input[type='text']{
      width: 4.66rem;
    }
  }

}
</style>