<template>
  <div class="home-title">
    <div class="title">
      <slot name="title" />
    </div>
    <a v-if="href" :href="href" class="more-skip">
      <slot name="tip" />
      <img src="https://source1.suddenfix.com/2019/mini/mini_arrow_shallow.png">
    </a>
  </div>
</template>

<script>

export default {
  name: "HomeTitle",
  props: {
    href: {
      type: String
    }
  },
  data () {
    return {
      
    };
  }
}
</script>

<style lang="less" scoped>
.home-title{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.24rem 0.24rem;

  &::before{
    // 解决两倍像素问题
    content: "";
    position: absolute;
    left: 0.24rem;
    right: 0.24rem;
    top: 0;
    height: .02rem;
    transform: scale(1, 0.5);
    -webkit-transform: scale(1, 0.5);
    -moz-transform: scale(1, 0.5);
    -ms-transform: scale(1, 0.5);
    -o-transform: scale(1, 0.5);
    background-color: #EDEFF2;
  }

  .title{
    font-size: .32rem;
    font-weight: 600;
    color: rgba(48, 49, 51, 1);
  }

  .more-skip{
    display: flex;
    align-items: center;

    span{
      font-size: .28rem;
      font-weight: 400;
      color: rgba(191, 194, 204, 1);
      margin-right: .4rem;
    }
    img{
      width: .16rem;
      height: .24rem;
    }
  }
}
</style>