import React from 'react'

import { Charts } from '@jiaminghi/data-view-react'

import './BottomLeftChart2.less'

const option = {
  series: [
    {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 7,
      data: [
        { name: '8小时以内', value: 25, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] },
        {
          name: '24小时以内',
          value: 45,
          gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
          radius: '52%',
        },
        {
          name: '48小时以内',
          value: 65,
          gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
          radius: '44%',
        },
        {
          name: '72小时以内',
          value: 35,
          gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
          radius: '36%',
        },
        {
          name: '大于72小时',
          value: 25,
          gradient: ['#03c2fd', '#1ed3e5', '#2fded6'],
          radius: '28%',
        },
      ],
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      dataItemStyle: {
        lineCap: 'round',
      },
      backgroundArc: {
        show: false,
      },
      details: {
        show: true,
        formatter: '{name}',
        position: 'start',
        offset: [-10, 0],
        style: {
          fill: '#fff',
          fontSize: 12,
          textAlign: 'right',
        },
      },
    },
  ],
}

export default () => (
  <div className="bottom-left-chart-2">
    <div className="header-name">任务维修平均用时</div>
    <div className="details-value">
      <span>55.1</span>小时
    </div>
    <Charts option={option} />
  </div>
)
