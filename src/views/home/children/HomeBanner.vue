<template>

  <swiper :options="swiperOption" class="banner-swiper">
    <swiper-slide v-for="(slide, index) in bannerList" :key="index" class="bannerBox">
      <a :href="slide.href" class="bannerImg">
        <img :src="slide.src" />
      </a>
    </swiper-slide>
  </swiper>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "HomeBanner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      bannerList: [
        {
          link:
            "https://mfix.suddenfix.com/index/serviceadvantage.html?header=0",
          src:
            "https://source1.suddenfix.com/app/img/banner_new/indexBanner003.png"
        },
        {
          link:
            "https://www.suddenfix.com/activities/h5.activity/maskactivity.html",
          src:
            "https://source1.suddenfix.com/app/img/banner/2020helpReturn/app.png"
        },
        {
          link:
            "https://www.suddenfix.com/activities/fix_activity/sdftakecar.html",
          src:
            "https://source1.suddenfix.com/app/img/banner/2020zerotouch/zero_touch.png"
        }
      ],
      swiperOption: {
        spaceBetween: 0,
        effect: 'fade',
        autoplay: true,
        loop: true
      }
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.banner-swiper {
  width: 7.02rem;
  overflow: hidden;
  border-radius: .2rem;
  height: 3rem;
  position: relative;
  margin: 0.24rem auto 0;
  box-shadow: 0px 2px 2px rgba(23, 23, 23, .2);

  .bannerBox {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0 !important;

    &.swiper-slide-active{
      opacity: 1 !important;
    }

    .bannerImg{
      position: absolute;
      width: 100%;
      height: 100%;

      img{
        width: 100%;
      }
    }
  }
}
</style>