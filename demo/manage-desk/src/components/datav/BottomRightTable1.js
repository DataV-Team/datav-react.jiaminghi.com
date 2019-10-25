import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable1.less'

const config = {
  data: [
    ['张三', '月累计排除故障：4起'],
    ['李四', '月累计排除故障：3起'],
    ['王五', '月累计排除故障：3起'],
    ['赵六', '月累计排除故障：3起'],
    ['钱七', '月累计排除故障：2起'],
    ['孙八', '月累计排除故障：2起'],
    ['杨九', '月累计排除故障：2起'],
    ['吴十', '月累计排除故障：2起'],
    ['李雷', '月累计排除故障：2起'],
    ['韩梅梅', '月累计排除故障：2起'],
  ],
  index: true,
  columnWidth: [30, 70],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-1">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon1.png')} alt="icon" />
        人员贡献排行榜
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
