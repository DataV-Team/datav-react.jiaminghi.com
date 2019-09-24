# Loading 加载

数据尚未加载完成时，可以显示 Loading 效果，增强用户体验。（[Vue 版本](http://datav.jiaminghi.com/guide/loading.html)）

<div id="loading"></div>

```html
<Loading>Loading...</Loading>
```

<click-to-copy :info="loadingTag" />

<script>
import { render } from './utils'

export default {
  data () {
    return {
      loadingTag: `<Loading>Loading...</Loading>`
    }
  },
  mounted () {
    this.renderNode()
  },
  methods: {
    renderNode () {
      render({
        r: [datav.Loading, null, 'Loading...'],
        $: '#loading'
      })
    }
  }
}
</script>

<style lang="less" scoped>
#loading {
  position: relative;
  height: 150px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;
  color: #fff;
}
</style>
