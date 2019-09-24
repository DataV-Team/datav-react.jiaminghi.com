import React from 'react'

import { ScrollRankingBoard } from '@jiaminghi/data-view-react'

import './RankingBoard.less'

const config = {
  data: [
    {
      name: '日常养护',
      value: 55,
    },
    {
      name: '交通事故',
      value: 120,
    },
    {
      name: '路面',
      value: 78,
    },
    {
      name: '桥通',
      value: 66,
    },
    {
      name: '计日工',
      value: 80,
    },
    {
      name: '路基',
      value: 45,
    },
    {
      name: '交安设施',
      value: 29,
    },
    {
      name: '除雪',
      value: 29,
    },
    {
      name: '绿化',
      value: 29,
    },
  ],
  rowNum: 9,
}

export default () => {
  return (
    <div id="ranking-board">
      <div className="ranking-board-title">巡查上报记录数量</div>
      <ScrollRankingBoard config={config} />
    </div>
  )
}
