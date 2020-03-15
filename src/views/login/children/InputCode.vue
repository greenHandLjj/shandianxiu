<template>
  <div class="code">
    <input type="text" placeholder="验证码" maxlength="6" name="vcode" />
    <input class="get-code" type="button" value="获取验证码" />
  </div>
</template>

<script>

export default {
  name: "InputCode",
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
.code{

  .get-code{
    background: #FFFFFF;
    text-align: center;
    border: .02rem solid #D9D9D9;
    border-radius: .08rem;
    width: 2.04rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    color: rgba(0,0,0,0.65)
  }
}
</style>