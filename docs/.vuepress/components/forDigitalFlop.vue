<template>
  <div class="for-digital-flop">
    <div :id="id"></div>
    <div class="button" @click="change">切换数据</div>
  </div>
</template>

<script>
import { render } from '../../guide/utils'

export default {
  name: 'ForDigitalFlop',
  props: ['data'],
  data () {
    return {
      id: `for-digital-flop-${Date.now()}`,

      index: 0,

      currentConfig: {}
    }
  },
  methods: {
    change () {
      let { index, data } = this

      index += 1

      if (index >= data.length) index = 0

      this.currentConfig = data[index]
      this.index = index

      this.renderNode()
    },
    renderNode () {
      const { id } = this

      render({
        r: [datav.DigitalFlop, { config: this.currentConfig, style: { width: '200px', height: '50px' } }],
        $: `#${id}`
      })
    }
  },
  mounted () {
    const { data } = this

    this.currentConfig = data[0]

    this.renderNode()
  }
}
</script>

<style lang="less">
.for-digital-flop {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .button {
    visibility: visible;
  }

  .button {
    position: absolute;
    right: 0px;
    bottom: 0px;
    background-color: #37a2da;
    color: #fff;
    padding: 3px 20px;
    font-size: 15px;
    font-weight: normal;
    cursor: pointer;
    visibility: hidden;

    &:active {
      color: #37a2da;
    }
  }
}
</style>
