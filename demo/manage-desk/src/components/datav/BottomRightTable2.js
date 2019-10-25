import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable2.less'

const config = {
  data: [
    ['液晶显示器', '月累计：4起'],
    ['收费键盘', '月累计：3起'],
    ['车牌识别仪', '月累计：3起'],
    ['自动栏杆机', '月累计：3起'],
    ['称重仪表盘', '月累计：2起'],
    ['门架机柜空调', '月累计：1起'],
  ],
  index: true,
  columnWidth: [30, 100],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-2">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon2.png')} alt="icon" />
        故障设备排行榜
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
