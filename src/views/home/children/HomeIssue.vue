<template>
  <div class="issue">
    <a
      class="single-issue"
      href="/"
    >
      <div class="issue-title">下单时需要支付费用吗？</div>
      <div class="issue-answer">不需要，下单后预约维修，修好付款。</div>
    </a>
    <a
      class="single-issue"
      href="/"
    >
      <div class="issue-title">维修的品类有哪些?</div>
      <div
        class="issue-answer"
      >闪电修支持当前市场主流智能手机的维修（苹果、三星、小米、OPPO、VIVO、魅族，和乐视），具体支持维修机型以官网公布为准。同时我们还支持iPad、苹果手表等设备维修。</div>
    </a>
    <a
      class="single-issue"
      href="/"
    >
      <div class="issue-title">闪电修是免费上门维修吗?</div>
      <div
        class="issue-answer"
      >针对屏幕、电池、后壳等更换配件的情况，可直接预约工程师免费上门维修。如果是进水，不开机等涉及手机主板维修的情况，则需要由工程师将手机带回公司维修总部，用大型专业设备对手机进行全面检测。</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeIssue",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.issue{
  padding: 0rem .24rem;
  margin-bottom: .5rem;

  .single-issue{
    
    .issue-title{
      display: flex;
      align-items: center;
      font-size: .28rem;
      font-weight: 500;
      color: rgba(48, 49, 51, 1);
      line-height: .4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: .42rem;
      margin-bottom: .24rem;

      &::before{
        content: "";
        width: .3rem;
        height: .3rem;
        background: url(~assets/img/shanToutiaoIsue.png) no-repeat;
        background-size: 100% 100%;
        margin-right: 0.1rem;
        margin-left: -.4rem;
      }
    }
    .issue-answer{
      font-size: .28rem;
      font-weight: 300;
      color: rgba(48, 49, 51, 1);
      line-height: .4rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      padding-left: .42rem;
      position: relative;
      
      &:not(:last-child) {
        margin-bottom: .24rem;
      }
    }
  }
}
</style>