---
sidebarDepth: 2
---

# 水位图

<vue-page-btn />

水位图有三种形态，多种配置，具体使用示例如下：

```html
<WaterLevelPond config={config} style={{width: '150px', height: '200px'}} />
```

<click-to-copy :info="waterLevelPondTag" />

## 矩形水位图

<div class="chart-container" id="water-level-pond1"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo1.js
</fold-box>

## 圆角水位图

<div class="chart-container" id="water-level-pond2"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo2.js
</fold-box>

## 圆形水位图

<div class="chart-container" id="water-level-pond3"></div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo3.js
</fold-box>

## config 属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
data|水位位置<sup>[1]</sup>|`Arrya<Number>`|---|`[]`
shape|水位图形状|`String`|[2]|`'rect'`
colors|水位图配色|`Array<String>`|[3]|[4]
waveNum|波浪数量|`Number`|---|`3`
waveHeight|波浪高度|`Number`|---|`40`
waveOpacity|波浪透明度|`Number`|---|`0.4`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[5]</sup>
</full-width-table>

## 注释

[1] 可以有多个水位，但默认显示值最大的水位信息。

[2] 有三种形状可供选择：矩形`rect`、圆角矩形`roundRect`、圆形`round`。

[3] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[4] 默认配色为`['#00BAFF', '#3DE7C9']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[5] 自动使用最大的水位值替换字符串中的`'{value}'`标记。

<script>
import { render } from './utils'

import waterLevelPond from './codeData/waterLevelPond/index.js'

export default {
  data () {
    return {
      waterLevelPondTag: `<WaterLevelPond config={config} style={{width: '150px', height: '200px'}} />`,

      ...waterLevelPond,
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      Array(3).fill({width: '150px', height: '200px'}).forEach((style, i) => render({
        r: [datav.WaterLevelPond, { config: this[`waterLevelPond${i + 1}`], style }],
        $: `#water-level-pond${i + 1}`
      }))
    }
  }
}
</script>

<style>
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
