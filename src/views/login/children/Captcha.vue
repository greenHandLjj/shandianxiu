<template>
  <div class="captcha">
    <input maxlength="4" type="text" placeholder="验证码" name="captcha" />
    <img class="captcha-img" @click="refresh" src="https://login.suddenfix.com/captcha.html" alt="captcha" />
  </div>
</template>

<script>

export default {
  name: "Captcha",
  data () {
    return {
    };
  },
  methods: {
    refresh(e) {
      let currentTarget = e.currentTarget
      // 刷新验证码
      currentTarget.src = "https://login.suddenfix.com/captcha.html?r=" + Math.random()
    }
  }
}
</script>

<style lang="less" scoped>
.captcha-img{
  background: #FFFFFF;
  border: .02rem solid transparent;
  border-radius: .08rem;
  width: 2.04rem;
  height: .8rem;
}
</style>