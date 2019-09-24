import React from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './BottomLeftChart1.less'

const option = {
  series: [
    {
      type: 'pie',
      data: [
        { name: '监控系统', value: 93, radius: ['30%', '33%'] },
        { name: '收费系统', value: 65, radius: ['32%', '35%'] },
        { name: '通信系统', value: 32, radius: ['31%', '37%'] },
        { name: '供配电系统', value: 44, radius: ['31%', '32%'] },
        { name: '其它', value: 52, radius: ['32%', '35%'] },
      ],
      outsideLabel: {
        labelLineEndLength: 20,
        formatter: '{percent}%\n{name}',
        style: {
          fill: '#fff',
        },
      },
    },
    {
      name: 'decoration ring',
      type: 'pie',
      data: [{ value: 10, radius: ['50%', '53%'] }],
      outsideLabel: {
        show: false,
      },
      pieStyle: {
        fill: 'rgba(255, 255, 255, 0.2)',
      },
    },
    {
      name: 'decoration ring',
      type: 'pie',
      data: [{ value: 10, radius: ['45%', '46%'] }],
      outsideLabel: {
        show: false,
      },
      pieStyle: {
        fill: 'rgba(255, 255, 255, 0.2)',
      },
    },
  ],
  color: ['#00c0ff', '#3de7c9', '#fff', '#00c0ff', '#3de7c9', '#fff'],
}

export default () => (
  <div className="bottom-left-chart-1">
    <div className="header-name">机电设备完好率</div>
    <div className="details-value">
      <span>99.01</span>%
    </div>
    <Charts option={option} />
  </div>
)
