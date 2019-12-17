---
sidebarDepth: 2
---

# 装饰

你可以使用装饰去点缀你的页面，以增强视觉效果，与边框组件相同，他们也是用**SVG**元素绘制的。<vue-page-btn />

## 自定义颜色
所有装饰均支持自定义颜色，配置项及示例如下。

```html
<Decoration1 color={['red', 'green']} />
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

## Decoration1

<div class="decoration-contaier" id="decoration-contaier1"></div>

```html
<Decoration1 style={{width: '200px', height: '50px'}} />
```

<click-to-copy :info="info1" />

## Decoration2

<div class="decoration-contaier" id="decoration-contaier2"></div>

```html
<Decoration2 style={{width: '200px', height: '5px'}} />
```

<click-to-copy :info="info2" />

## Decoration2(reverse)

<div class="decoration-contaier" id="decoration-contaier2-1"></div>

```html
<Decoration2 reverse={true} style={{width: '5px', height: '150px'}}/>
```

<click-to-copy :info="info2r" />

## Decoration3

<div class="decoration-contaier" id="decoration-contaier3"></div>

```html
<Decoration3 style={{width: '250px', height: '30px'}],} />
```

<click-to-copy :info="info3" />

## Decoration4

<div class="decoration-contaier" id="decoration-contaier4"></div>

```html
<Decoration4 style={{width: '5px', height: '150px'}} />
```

<click-to-copy :info="info4" />

## Decoration4(reverse)

<div class="decoration-contaier" id="decoration-contaier4-1"></div>

```html
<Decoration4 reverse={true} style={{width: '250px', height: '5px'}} />
```

<click-to-copy :info="info4r" />

## Decoration5

<div class="decoration-contaier" id="decoration-contaier5"></div>

```html
<Decoration5 style={{width: '300px', height: '40px'}} />
```

<click-to-copy :info="info5" />

## Decoration6

<div class="decoration-contaier" id="decoration-contaier6"></div>

```html
<Decoration6 style={{width: '300px', height: '30px'}} />
```

<click-to-copy :info="info6" />

## Decoration7

<div class="decoration-contaier font1" id="decoration-contaier7"></div>

```html
<Decoration7 style={{width: '150px', height: '30px'}}>Decoration</Decoration7>
```

<click-to-copy :info="info7" />

## Decoration8

<div class="decoration-contaier" id="decoration-contaier8"></div>

```html
<Decoration8 style={{width: '300px', height: '50px'}} />
```

<click-to-copy :info="info8" />

## Decoration8(reverse)

<div class="decoration-contaier" id="decoration-contaier8-1"></div>

```html
<Decoration8 reverse={true} style={{width: '300px', height: '50px'}} />
```

<click-to-copy :info="info8r" />

## Decoration9

<div class="decoration-contaier font2" id="decoration-contaier9"></div>

```html
<Decoration9 style={{width: '150px', height: '150px'}}>66%</Decoration9>
```

<click-to-copy :info="info9" />

### 特殊配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`3`
</full-width-table>

## Decoration10

<div class="decoration-contaier font2" id="decoration-contaier10"></div>

```html
<Decoration10 style={{width: '90%', height: '5px'}} />
```

<click-to-copy :info="info10" />

## Decoration11

<div class="decoration-contaier font1" id="decoration-contaier11"></div>

```html
<Decoration11 style={{width: '200px', height: '60px'}} >Decoration11</Decoration11>
```

<click-to-copy :info="info11" />

<script>
import { render } from './utils'

const styles = [
  [{width: '200px', height: '50px'}],
  [{width: '200px', height: '5px'}, {width: '5px', height: '150px'}],
  [{width: '250px', height: '30px'}],
  [{width: '5px', height: '150px'}, {width: '250px', height: '5px'}],
  [{width: '300px', height: '40px'}],
  [{width: '300px', height: '30px'}],
  [{width: '150px', height: '30px'}],
  [{width: '300px', height: '50px'}, {width: '300px', height: '50px'}],
  [{width: '150px', height: '150px'}],
  [{width: '90%', height: '5px'}],
  [{width: '200px', height: '60px'}],
]

export default {
  data () {
    return {
      info1: `<Decoration1 style={{width: '200px', height: '50px'}} />`,
      info2: `<Decoration2 style={{width: '200px', height: '5px'}} />`,
      info2r: `<Decoration2 reverse={true} style={{width: '5px', height: '150px'}} />`,
      info3: `<Decoration3 style={{width: '250px', height: '30px'}} />`,
      info4: `<Decoration4 style={{width: '5px', height: '150px'}} />`,
      info4r: `<Decoration4 reverse={true} style={{width: '250px', height: '5px'}} />`,
      info5: `<Decoration5 style={{width: '300px', height: '40px'}} />"`,
      info6: `<Decoration6 style={{width: '300px', height: '30px'}} />`,
      info7: `<Decoration7 style={{width: '150px', height: '30px'}}>Decoration</Decoration7>`,
      info8: `<Decoration8 style={{width: '300px', height: '50px'}} />`,
      info8r: `<Decoration8 reverse={true} style={{width: '300px', height: '50px'}} />`,
      info9: `<Decoration9 style={{width: '150px', height: '150px'}}>66%</Decoration9>`,
      info10: `<Decoration10 style={{width: '90%', height: '5px'}} />`,
      info11: `<Decoration11 style={{width: '200px', height: '60px'}} >Decoration11</Decoration11>`
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      styles.forEach((v, i) => {
        i++
        const e = datav[`Decoration${i}`]

        if (i === 7 || i === 11) {
          render({ r: [e, { style: v[0], children: `Decoration${i}` }], $: `#decoration-contaier${i}` })
          return
        }

        if (i === 9) {
          render({ r: [e, { style: v[0], children: '66%' }], $: `#decoration-contaier${i}` })
          return
        }

        render({ r: [e, { style: v[0] }], $: `#decoration-contaier${i}` })

        if (i === 2 || i === 4 || i === 8) {
          render({ r: [e, { reverse: true, style: v[1] }], $: `#decoration-contaier${i}-1` })
        }
      })
    }
  }
}
</script>

<style lang="less">
.decoration-contaier {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  overflow: hidden;
  color: #fff;
}

.font1 {
  color: #7ec699;
  font-weight: bold;
}

.font2 {
  color: #7ec699;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0 0 3px #7acaec;
}
</style>
