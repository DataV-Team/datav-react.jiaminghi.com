# 介绍

组件库基于 React<vue-page-btn />，主要用于构建大屏（**全屏**）数据展示页面即**数据可视化**，具有多种类型组件可供使用：

- **边框**

带有不同边框的容器

- **装饰**

用来点缀页面效果，增加视觉效果

- **图表**

图表组件基于[Charts](http://charts.jiaminghi.com)封装，轻量，易用

- **其他**

飞线图/水位图/轮播表/...

## 用前必看

使用前应阅读以下提示，这样出现相应问题后可以快速解决。

::: tip 兼容性
组件库的开发和调试都使用Chrome浏览器，没有时间和精力做其他浏览器的兼容，尤其是IE。

所以请使用Chrome浏览器。
:::

::: warning 宽高异常
组件的默认宽高都是100%，可以根据父容器宽高进行自适应，但在某些情况下组件宽高可能表现异常，这种情况一般是因为组件的父容器宽高发生了变化，而组件没有侦知这一变化，你可以在组件上绑定key值，在更改父容器宽高且页面完成重绘后，更新key值，使组件重新创建，以获取正确宽高。
:::

::: danger 状态更新
在 Vue 中可以对数据进行突变，但是在 React 不推荐这样子做。尤其是通过 props 传递数据时。组件内部使用的 React hooks 仅仅只会进行浅比较。因此直接生成**新的 props 对象**，请勿直接更新某个 props 数据下某一个属性，这样组件将无法刷新状态。
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
import * as datav from '@jiaminghi/data-view-react'

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
