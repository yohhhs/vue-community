<template>
  <div class="m-footer">
    <router-link tag="div" class="tab-item" to="/ipage">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/release">
      <span class="tab-link">发布</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/message">
      <span class="tab-link">消息</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang='less'>
  .m-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #333333;
    .tab-item {
      flex-grow: 1;
      text-align: center;
      color: #ffffff;
      &.router-link-active {
        .tab-link {
          color: #80bd01;
        }
       }
    }
  }
</style>
