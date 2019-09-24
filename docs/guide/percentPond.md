---
sidebarDepth: 2
---

# 进度池

（[Vue 版本](http://datav.jiaminghi.com/guide/percentPond.html)）

```html
<PercentPond config={config} style={{width: '200px', height: '100px'}} />
```

<click-to-copy :info="percentPondTag" />

## 基本示例

<div class="chart-container" style="height: 150px;" id="percent-pond1"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo1.js
</fold-box>

## 调节边框

<div class="chart-container" style="height: 150px;" id="percent-pond2"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo2.js
</fold-box>

## 线条间隙

<div class="chart-container" style="height: 150px;" id="percent-pond3"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo3.js
</fold-box>

## 局部渐变

<div class="chart-container" style="height: 150px;" id="percent-pond4"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo4.js
</fold-box>

## 定制块隙长度

<div class="chart-container" style="height: 150px;" id="percent-pond5"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo5.js
</fold-box>

::: tip TIP
百分比标签已通过 CSS`display:none`隐藏。
:::

## config 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
value|进度池数值|`Number`|`0-100`|`0`
colors|进度池配色|`Array<String>`|[1]|[2]
borderWidth|边框宽度|`Number`|---|`3`
borderGap|边框间隙|`Number`|---|`3`
lineDash|线条间隙|`Array<Number>`|---|`[5, 1]`
textColor|文字颜色|`String`|[1]|`#fff`
borderRadius|边框半径|`Number`|---|`5`
localGradient|局部渐变|`Boolean`|---|`false`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[3]</sup>
</full-width-table>

## 注释

[1] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[2] 默认配色为`['#3DE7C9', '#00BAFF']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[3] 自动使用`value`的值替换字符串中的`'{value}'`标记。

<script>
import { render } from './utils'

import percentPond from './codeData/percentPond/index.js'

export default {
  data () {
    return {
      percentPondTag: `<PercentPond config={config} style={{width: '200px', height: '100px'}} />`,

      ...percentPond
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      Array(5).fill({width: '200px', height: '100px'}).forEach((style, i) => render({
        r: [datav.PercentPond, {
          config: this[`percentPond${i + 1}`],
          style: i === 4 ? { width: '300px', height: '40px' } : style,
          className: i === 4 ? 'hidden-text' : ''
        }],
        $: `#percent-pond${i + 1}`
      }))
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

  .hidden-text {
    text {
      display: none;
    }
  }
}
</style>
