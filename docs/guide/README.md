# 介绍

组件库基于 React（[Vue 版本](http://datav.jiaminghi.com)），主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用：

- **边框**

带有不同边框的容器

- **装饰**

用来点缀页面效果，增加视觉效果

- **图表**

图表组件基于[Charts](http://charts.jiaminghi.com)封装，轻量，易用

- **其他**

飞线图/水位图/轮播表/...

::: tip TIP
建议使用 Chrome 浏览器。

组件 props 均未设置深度监听，刷新 props 时，请直接生成**新的 props**，请勿直接更新 props 下某一个属性，这样组件将无法刷新状态。

`someProps.someAttr = ['foo', 'foo']`是无效的

`someProps = { someAttr: ['foo', 'foo'] }`才是有效的
:::

## 安装

- npm 安装

```sh
npm install @jiaminghi/data-view-react
```

- yarn 安装

```sh
yarn add @jiaminghi/data-view-react
```

## 使用

```js
import dataV from '@jiaminghi/data-view-react'

datav.BorderBox1

// 或者
import { BorderBox1 } from '@jiaminghi/data-view-react'
```

## 按需引入

按需引入仅支持基于**ES module**的**tree shaking**，按需引入示例如下：

```js
import BorderBox1 from '@jiaminghi/data-view-react/es/borderBox1'
```

## UMD 版

`UMD`版可直接使用`script`标签引入，引入后通过**datav**命名空间使用对应的组件，引入`data-view-react`前请确保已引入`react 和 react-dom`。

<fold-box title="点击以展示/隐藏UMD版使用示例">
<<< @/docs/guide/umdExample.html
</fold-box>
