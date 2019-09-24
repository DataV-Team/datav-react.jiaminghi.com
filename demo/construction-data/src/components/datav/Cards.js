import React, { useState, useEffect } from 'react'

import { Charts, DigitalFlop } from '@jiaminghi/data-view-react'

import './Cards.less'

function getData() {
  return new Array(5).fill(0).map((foo, i) => ({
    title: '测试路段' + (i + i),
    total: {
      number: [randomExtend(9000, 10000)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#ea6027',
        fontWeight: 'bold',
      },
    },
    num: {
      number: [randomExtend(30, 60)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#26fcd8',
        fontWeight: 'bold',
      },
    },
    ring: {
      series: [
        {
          type: 'gauge',
          startAngle: -Math.PI / 2,
          endAngle: Math.PI * 1.5,
          arcLineWidth: 13,
          radius: '80%',
          data: [{ name: '资金占比', value: randomExtend(40, 60) }],
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: false,
          },
          backgroundArc: {
            style: {
              stroke: '#224590',
            },
          },
          details: {
            show: true,
            formatter: '资金占比{value}%',
            style: {
              fill: '#1ed3e5',
              fontSize: 20,
            },
          },
        },
      ],
      color: ['#03d3ec'],
    },
  }))
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default () => {
  const [cards, setData] = useState([])

  useEffect(() => {
    createData()

    setInterval(createData, 30000)
  }, [])

  function createData() {
    setData(getData())
  }

  return (
    <div id="cards">
      {cards.map((card, i) => (
        <div className="card-item" key={card.title}>
          <div className="card-header">
            <div className="card-header-left">{card.title}</div>
            <div className="card-header-right">{'0' + (i + 1)}</div>
          </div>
          <Charts className="ring-charts" option={card.ring} />
          <div className="card-footer">
            <div className="card-footer-item">
              <div className="footer-title">累计金额</div>
              <div className="footer-detail">
                <DigitalFlop config={card.total} style={{ width: '70%', height: '35px' }} />元
              </div>
            </div>
            <div className="card-footer-item">
              <div className="footer-title">巡查病害</div>
              <div className="footer-detail">
                <DigitalFlop config={card.num} style={{ width: '70%', height: '35px' }} />处
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
