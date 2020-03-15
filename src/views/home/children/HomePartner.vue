<template>
  <div class="partner">
    <img src="https://source1.suddenfix.com/app/partners/liantong.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/tengxun.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/baidu.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/zhongguodianxin.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/biguiyuan.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/xinghejituan.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/wanke.png" class="partnerImg" alt="">
    <img src="https://source1.suddenfix.com/app/partners/huangtingguangchang.png" class="partnerImg" alt="">
  </div>
</template>

<script>

export default {
  name: "HomePartner",
  data () {
    return {
    };
  }
}
</script>

<style lang="less" scoped>
.partner{
  font-size: 0;
  padding: 0rem .24rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img{
    width: 23%;
    display: inline-block;
  }
}
</style>