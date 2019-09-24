import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable3.less'

const config = {
  data: [
    ['栏杆机不抬杆', '月累计：4起'],
    ['栏杆机落杆', '月累计：3起'],
    ['光端机故障', '月累计：3起'],
    ['票据打印机', '月累计：3起'],
    ['视频花屏', '月累计：2起'],
    ['车牌识别仪', '月累计：1起'],
  ],
  index: true,
  columnWidth: [30, 100],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-3">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon3.png')} />
        常见故障排行
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
