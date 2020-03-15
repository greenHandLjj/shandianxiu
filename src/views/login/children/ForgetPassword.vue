<template>
  <!--手机号登录-->
  <div class="forget-password">
    <h2 class="title">忘记密码</h2>
    <!-- 电话号码 -->
    <phone />
    <!-- 图片验证码（图灵测试） -->
    <captcha />
    <!-- 短信验证码 -->
    <input-code></input-code>
    <!-- 密码 -->
    <password />

    <div class="control">
      <!-- 重置 -->
      <input type="button" class="btn" value="重置">

      <!-- psd-login-entry -->
      <p class="psd-login-entry">使用已有帐户登录</p>
    </div>
  </div>
</template>

<script>
import Phone from './Phone'
import InputCode from './InputCode'
import Captcha from './Captcha'
import Password from './Password'

export default {
  name: "ForgetPassword",
  components: {
    Phone,
    InputCode,
    Captcha,
    Password
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.forget-password{

  .control{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn{
      width: 3.52rem;
      background:  #067880;
      border-radius: 2rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      font-size: .32rem;
      color: #FFFFFF;
    }
    p{
      font-size: .28rem;
      color: #19D3C5;
    }
  }
}
</style>