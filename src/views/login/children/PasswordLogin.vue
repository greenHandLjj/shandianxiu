<template>
  <!--手机号登录-->
  <div id="tel-login">
    <h2 class="title">登录</h2>
    <!-- 电话号码 -->
    <phone />
    <!-- 密码 -->
    <password />
    <!-- 图片验证码（图灵测试） -->
    <captcha />

    <!-- psd-login-entry -->
    <p class="psd-login-entry">
      <span>忘记密码</span>
      <span>手机号登录</span>
    </p>

    <!-- 登录 -->
    <input type="button" class="btn tel-btn" value="登录">
  </div>
</template>

<script>
import Phone from './Phone'
import Password from './Password'
import Captcha from './Captcha'

export default {
  name: "PasswordLogin",
  components: {
    Phone,
    Password,
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
    display: flex;
    justify-content: space-between;
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