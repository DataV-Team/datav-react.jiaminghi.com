import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable4.less'

const config = {
  data: [
    ['收费广场', '月累计：4起'],
    ['外场道路', '月累计：3起'],
    ['运维分中心', '月累计：3起'],
    ['服务区', '月累计：3起'],
    ['备件库房', '月累计：2起'],
    ['其他', '月累计：1起'],
  ],
  index: true,
  columnWidth: [30, 100],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-4">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon4.png')} />
        故障位置排行榜
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
