<template>
  <div class="phone">
    <input
      type="text"
      placeholder="手机号"
      name="mobilenum"
      maxlength="11"
    />
  </div>
</template>

<script>

export default {
  name: "Phone",
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
.phone{

  input{
    width: 100%;
  }
}
</style>