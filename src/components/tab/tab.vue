<template>
  <div class="tab">
    <span v-for="(item, index) in classNames" class="tab-item" :class="{active:index==currentIndex}" @click="changeClass(index)">{{item}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        currentIndex: 0,
        classNames: ['全部', '精华', 'weex', '分享', '问答', '招聘']
      }
    },
    methods: {
      changeClass(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped lang='less'>
  .tab {
    position: fixed;
    top: 55px;
    left: 0;
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #333333;
    .tab-item {
      flex-grow: 1;
      padding-bottom: 5px;
      text-align: center;
      font-size: 14px;
      color: #ffffff;
      &.active {
        color: #80bd01;
      }
    }
  }
</style>
