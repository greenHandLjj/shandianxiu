<template>
  <!--手机号登录-->
  <div id="tel-login">
    <h2 class="title">登录</h2>
    <!-- 电话号码 -->
    <phone />
    <!-- 图片验证码（图灵测试） -->
    <captcha />
    <!-- 短信验证码 -->
    <input-code></input-code>

    <!-- psd-login-entry -->
    <p class="psd-login-entry">账号密码登录</p>

    <!-- 登录 -->
    <input type="button" class="btn tel-btn" value="登录">
  </div>
</template>

<script>
import Phone from './Phone'
import InputCode from './InputCode'
import Captcha from './Captcha'

export default {
  name: "LoginForm",
  components: {
    Phone,
    InputCode,
    Captcha
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#tel-login{

  .psd-login-entry{
    font-size: .28rem;
    color: #19D3C5;
    line-height: .44rem;
    text-align: right;
    margin-bottom: .48rem;
  }

  .btn{
    background: #067880;
    border-radius: 2rem;
    width: 6.86rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    font-size: .32rem;
    color: #FFFFFF;
  }
}
</style>