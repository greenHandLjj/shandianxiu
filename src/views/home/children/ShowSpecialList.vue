<template>
  <div class="show-special-list">
    <div class="show-special-wrp">
      <a href="/">
        <img
          src="https://source1.suddenfix.com/app/special_topic/screen2.png"
          class="special-img-left"
          alt="更换手机屏幕，完好如初，即可拥有"
        />
      </a>
      <div class="specials-rigt">
        <a href="/">
          <img
            src="https://source1.suddenfix.com/app/special_topic/battery2.png"
            class="special-img"
            alt="更换电池，告别N充烦恼"
          />
        </a>
        <a href="/">
          <img
            src="https://source1.suddenfix.com/app/special_topic/ram2.png"
            class="special-img"
            alt="内存容量升级，够大才爽快"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowSpecialList",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.show-special-list {
  padding: 0 0.24rem;

  .show-special-wrp {
    display: flex;
    justify-content: space-between;

    .special-img-left {
      width: 3.4rem;
      height: 3rem;
    }

    .specials-rigt {
      width: 3.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .special-img {
        width: 100%;
        height: 1.4rem;
      }
    }
  }
}
</style>