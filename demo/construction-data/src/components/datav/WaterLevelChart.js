import React from 'react'

import { WaterLevelPond } from '@jiaminghi/data-view-react'

import './WaterLevelChart.less'

const config = {
  data: [45],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
}

export default () => {
  return (
    <div id="water-level-chart">
      <div className="water-level-chart-title">计划资金累计完成情况</div>

      <div className="water-level-chart-details">
        累计完成<span>235,680</span>元
      </div>

      <div className="chart-container">
        <WaterLevelPond config={config} />
      </div>
    </div>
  )
}
