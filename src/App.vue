<template>
  <div id="app">
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import ipage from 'components/ipage/ipage'
  import mFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      ipage,
      mFooter
    }
  }
</script>

<style>

</style>
