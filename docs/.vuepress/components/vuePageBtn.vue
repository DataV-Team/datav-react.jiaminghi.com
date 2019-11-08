<template>
  <span class="vue-page-btn">
    （<span class="green" @click="turnToVuePage">Vue版<OutboundLink /></span>）
  </span>
</template>

<script>
export default {
  name: 'ReactPageBtn',
  methods: {
    turnToVuePage () {
      const { pathname } = location

      window.open(`http://datav.jiaminghi.com${pathname}`)
    }
  }
}
</script>

<style lang="less">
.vue-page-btn .green {
  color: #3eaf7c;
  cursor: pointer;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
</style>
