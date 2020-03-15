<template>
  <div class="repair-news">

    <a class="article-single" v-for="(item, index) in list" :key="index" :href="item.href">
      <div class="detail-info">
        <div class="article-title">
          {{item.articleTitle}}
        </div>
        <div class="article-date">
          {{item.articleDate}}
        </div>
      </div>
      <div class="img-box">
        <img
          :src="item.src"
          class="article-img"
        />
      </div>
    </a>

  </div>
</template>

<script>
export default {
  name: "RepairNews",
  data() {
    return {
      list: [
        {
          href: '/',
          articleTitle: '458711美元！一台全功能苹果Apple-1电脑被成功拍下',
          articleDate: '2020-03-14',
          src: 'https://source1.suddenfix.com/articlePic/1defa6fc1655b6e9b5e7b6f3b592851b.jpg'
        },
        {
          href: '/',
          articleTitle: '继意大利之后，苹果关闭西班牙所有直营门店',
          articleDate: '2020-03-14',
          src: 'https://source1.suddenfix.com/articlePic/f50aaaa2d26696e9ddd8766ff0ad8f36.jpg'
        },
        {
          href: '/',
          articleTitle: '中国本轮疫情流行高峰过去 苹果所有零售店恢复营业',
          articleDate: '2020-03-14',
          src: 'https://source1.suddenfix.com/articlePic/2bb4dbb8d33047f010250e85a83251f7.png'
        },
        {
          href: '/',
          articleTitle: '小米手机维修时，需要注意什么？',
          articleDate: '2020-03-14',
          src: 'https://source1.suddenfix.com/articlePic/16d407358dd79e0c9af437ccc61915f9.jpg'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.repair-news {
  padding: 0rem 0.24rem;
  margin-bottom: .5rem;

  .article-single {
    display: flex;

    &:not(:last-child) {
      margin-bottom: .24rem;
    }

    .detail-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .article-title {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 0.28rem;
        font-weight: 400;
        color: rgba(48, 49, 51, 1);
        line-height: 0.4rem;
      }
      .article-date {
        font-size: 0.24rem;
        font-weight: 400;
        color: rgba(191, 194, 204, 1);
        line-height: 0.34rem;
      }
    }

    .img-box {
      img {
        width: 2.7rem;
        height: 1.54rem;
      }
    }
  }
}
</style>