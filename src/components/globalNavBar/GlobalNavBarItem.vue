<template>
  <div class="item" :class="{active: isActive}" @click="navigeTo">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GlobalNavBarItem",
  props: {
    url: {
      type: String,
      default: '/'
    }
  },
  computed: {
    isActive() {
      let route = this.$route.matched[0]
      if(route) {
        if(route.path.indexOf(this.url) >= 0) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    navigeTo() {
      this.$router.replace(this.url)
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  text-align: center;
  width: 0.96rem;

  &.active{
    p, .iconfont{
      color: #19D3C5;
    }
  }

  .iconfont, p{
    color: rgba(144,147,153,1);
  }
  .iconfont{
    font-size: .48rem;
    margin: .12rem auto 0;
  }
  p{
    font-size: .2rem;
    font-weight: 400;
    line-height: .28rem;
    padding-top: .05rem;
  }
}
</style>