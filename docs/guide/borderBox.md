# 边框

边框均由**SVG**元素绘制，体积轻量不失真，它们的使用极为方便。<vue-page-btn />

::: tip 边框内布局
边框组件默认宽高均为 100%，组件内容将子组件（类似于 Vue 插槽）分发至边框组件下 class 为`border-box-content`的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。
:::

::: tip 重置宽高
如果边框组件的父容器宽高发生了变化，而边框组件没有侦知这一变化，边框就无法自适应父容器宽高。针对这种情况，你可以给边框绑定key值，在父容器宽高发生变化且完成渲染后更改key值，强制边框组件重新渲染，获取正确的宽高。但这会造成边框内的组件同样重新渲染。
:::	:::

## 自定义颜色
所有边框均支持自定义颜色，配置项及示例如下。

```html
<BorderBox1 color={['red', 'green']} >BorderBox1</BorderBox1>
```

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
color|自定义颜色|`string[]`|`-`|`-`
</full-width-table>

::: tip TIP
`color`属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB及RGBA。
:::

## BorderBox1

<div class="border-box-contaier" id="border-box-contaier1"></div>

```html
<BorderBox1>BorderBox1</BorderBox1>
```

<click-to-copy :info="info1" />

## BorderBox2

<div class="border-box-contaier" id="border-box-contaier2"></div>

```html
<BorderBox2>BorderBox2</BorderBox2>
```

<click-to-copy :info="info2" />

## BorderBox3

<div class="border-box-contaier" id="border-box-contaier3"></div>

```html
<BorderBox3>BorderBox3</BorderBox3>
```

<click-to-copy :info="info3" />

## BorderBox4

<div class="border-box-contaier" id="border-box-contaier4"></div>

```html
<BorderBox4>BorderBox4</BorderBox4>
```

<click-to-copy :info="info4" />

## BorderBox4(reverse)

<div class="border-box-contaier" id="border-box-contaier4-1"></div>

```html
<BorderBox4 reverse="{true}">BorderBox4</BorderBox4>
```

与上边的边框组件略有不同的是，该组件具有翻转形态，你只需要设置 reverse 属性为 true 即可

<click-to-copy :info="info4Reverse" />

## BorderBox5

<div class="border-box-contaier" id="border-box-contaier5"></div>

```html
<BorderBox5>BorderBox5</BorderBox5>
```

<click-to-copy :info="info5" />

## BorderBox5(reverse)

<div class="border-box-contaier" id="border-box-contaier5-1"></div>

```html
<BorderBox5 reverse="{true}">BorderBox5</BorderBox5>
```

<click-to-copy :info="info5Reverse" />

## BorderBox6

<div class="border-box-contaier" id="border-box-contaier6"></div>

```html
<BorderBox6>BorderBox6</BorderBox6>
```

<click-to-copy :info="info6" />

## BorderBox7

<div class="border-box-contaier" id="border-box-contaier7"></div>

```html
<BorderBox7>BorderBox7</BorderBox7>
```

<click-to-copy :info="info7" />

## BorderBox8

<div class="border-box-contaier" id="border-box-contaier8"></div>

```html
<BorderBox8>BorderBox8</BorderBox8>
```

<click-to-copy :info="info8" />

### 特殊配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`3`
</full-width-table>

## BorderBox9

<div class="border-box-contaier" id="border-box-contaier9"></div>

```html
<BorderBox9>BorderBox9</BorderBox9>
```

<click-to-copy :info="info9" />

## BorderBox10

<div class="border-box-contaier" id="border-box-contaier10"></div>

```html
<BorderBox10>BorderBox10</BorderBox10>
```

<click-to-copy :info="info10" />

## BorderBox11

<div class="border-box-contaier" id="border-box-contaier11"></div>

```html
<BorderBox11>BorderBox11</BorderBox11>
```

<click-to-copy :info="info11" />

### 特殊配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
title|边框标题|`String`|`-`|`''`
titleWidth|标题宽度|`Number`|`-`|`250`
</full-width-table>

## BorderBox12

<div class="border-box-contaier" id="border-box-contaier12"></div>

```html
<BorderBox12>BorderBox12</BorderBox12>
```

<click-to-copy :info="info12" />

## BorderBox13

<div class="border-box-contaier" id="border-box-contaier13"></div>

```html
<BorderBox13>BorderBox13</BorderBox13>
```

<click-to-copy :info="info13" />

<script>
import { render } from './utils'

export default {
  data () {
    return {
      info1: `<BorderBox1>BorderBox1</BorderBox1>`,
      info2: `<BorderBox2>BorderBox2</BorderBox2>`,
      info3: `<BorderBox3>BorderBox3</BorderBox3>`,
      info4: `<BorderBox4>BorderBox4</BorderBox4>`,
      info4Reverse: `<BorderBox4 reverse={true}>BorderBox4</BorderBox4>`,
      info5: `<BorderBox5>BorderBox5</BorderBox5>`,
      info5Reverse: `<BorderBox5 reverse={true}>BorderBox5</BorderBox5>`,
      info6: `<BorderBox6>BorderBox6</BorderBox6>`,
      info7: `<BorderBox7>BorderBox7</BorderBox7>`,
      info8: `<BorderBox8>BorderBox8</BorderBox8>`,
      info9: `<BorderBox9>BorderBox9</BorderBox9>`,
      info10: `<BorderBox10>BorderBox10</BorderBox10>`,
      info11: `<BorderBox11 title="dv-border-box-11">BorderBox11</BorderBox11>`,
      info12: `<BorderBox12>BorderBox12</BorderBox12>`,
      info13: `<BorderBox13>BorderBox13</BorderBox13>`,
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      Array(13).fill(0).forEach((v, i) => {
        i++
        const e = datav[`BorderBox${i}`]

        if (i === 11) {
          render({ r: [e, { title: 'BorderBox11', children: 'BorderBox11' }], $: `#border-box-contaier11` })

          return
        }
        

        render({ r: [e], $: `#border-box-contaier${i}` })

        if (i === 4 || i === 5) {
          render({ r: [e, { reverse: true }], $: `#border-box-contaier${i}-1` })
          return
        }
      })
    }
  }
}
</script>

<style lang="less">
.border-box-contaier {
  height: 300px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #282c34;

  .border-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: bold;
  }
}
</style>
