---
sidebarDepth: 2
---

# 排名轮播表

排名轮播表同轮播表类似，也可以选择单条轮播或整页轮播。（[Vue 版本](http://datav.jiaminghi.com/guide/scrollRankingBoard.html)）

```html
<ScrollRankingBoard config={config} style={{width: '500px', height: '300px'}} />
```

<click-to-copy :info="scrollRankingBoardTag" />

## 单条滚动

<div class="chart-container" id="scroll-ranking-board1"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo1.js
</fold-box>

## 整页滚动

<div class="chart-container" id="scroll-ranking-board2"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo2.js
</fold-box>

## 数值单位

<div class="chart-container" id="scroll-ranking-board3"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo3.js
</fold-box>

## config 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
data|表数据|`Array<Object>`|[data属性](/guide/scrollRankingBoard.html#data属性)|`[]`
rowNum|表行数|`Number`|---|`5`
waitTime|轮播时间间隔(ms)|`Number`|---|`2000`
carousel|轮播方式|`String`|`'single'|'page'`|`'single'`
unit|数值单位|`String`|---|`''`
</full-width-table>

## data 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|名称|`String`|---|---
value|数值|`Number`|---|---
</full-width-table>

<script>
import { render } from './utils'

import scrollRankingBoard from './codeData/scrollRankingBoard/index.js'

export default {
  data () {
    return {
      ...scrollRankingBoard,

      scrollRankingBoardTag: `<ScrollRankingBoard config={config} style={{width: '500px', height: '300px'}} />`,
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      Array(3).fill({width: '500px', height: '300px'}).forEach((style, i) => render({
        r: [datav.ScrollRankingBoard, {config: this[`scrollRankingBoard${i + 1}`], style}],
        $: `#scroll-ranking-board${i + 1}`
      }))
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 350px;
  background-color: #282c34;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
}
</style>
