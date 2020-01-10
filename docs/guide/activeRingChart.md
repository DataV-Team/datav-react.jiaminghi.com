---
sidebarDepth: 2
---

# 动态环图

基于**Charts**封装。<vue-page-btn />

```html
<ActiveRingChart config={config} style={{ width: '300px', height: '300px'}} />
```

<click-to-copy :info="activeRingChartTag" />

## 基本示例

<div class="chart-container" id="active-ringChart1"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo1.js
</fold-box>

## 线条粗细

<div class="chart-container" id="active-ringChart2"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo2.js
</fold-box>

## 调节半径

<div class="chart-container fontsize" id="active-ringChart3"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo3.js
</fold-box>

## config 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
radius|环半径|`String|Number`|`'50%'|100`|`'50%'`
activeRadius|环半径（动态）|`String|Number`|`'55%'|110`|`'55%'`
data|环数据|`Array<Object>`|[data属性](/guide/activeRingChart.html#data属性)|`[]`
lineWidth|环线条宽度|`Number`|---|`20`
activeTimeGap|切换间隔(ms)|`Number`|---|`3000`
color|环颜色|`Array<String>`|[1]|`[]`
digitalFlopStyle|数字翻牌器样式|`Object`|---|[2]
digitalFlopToFixed|数字翻牌器小数位数|`Number`|---|`0`
animationCurve|动效曲线|`String`|[Transition](http://transition.jiaminghi.com/curveTable/)|`'easeOutCubic'`
animationFrame|动效帧数|`Number`|[3]|`50`
</full-width-table>

## config 注释

[1] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[2] `digitalFlopStyle`用于配置内置的数字翻牌器样式，详情可查阅[数字翻牌器](/guide/digitalFlop.html#基本示例)，你可以配置该项来设置数字翻牌器的文字颜色和大小。默认值如下：

```js
digitalFlopStyle: {
  fontSize: 25,
  fill: '#fff'
}
```

[3] `animationFrame`用于配置动画过程的帧数即动画时长。

## data 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|环对应名称|`String`|---|---
value|环对应值|`Number`|---|---
</full-width-table>

<script>
import activeRingChart from './codeData/activeRingChart/index.js'

import { render } from './utils'

const style = { width: '300px', height: '300px'}

export default {
  data () {
    return {
      activeRingChartTag: `<ActiveRingChart config={config} style={{ width: '300px', height: '300px'}} />`,

      ...activeRingChart
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      [1, 2, 3].forEach(v => 
        render({
          r: [datav.ActiveRingChart, { config: this[`activeRingChart${v}`], style }],
          $: `#active-ringChart${v}`
        })
      )
    }
  }
}
</script>

<style lang="less">
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7ec699;
  font-weight: bold;
}
</style>
