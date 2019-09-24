import React from 'react'

import { FullScreenContainer } from '@jiaminghi/data-view-react'

import TopHeader from './TopHeader'
import DigitalFlop from './DigitalFlop'
import RankingBoard from './RankingBoard'
import RoseChart from './RoseChart'
import WaterLevelChart from './WaterLevelChart'
import ScrollBoard from './ScrollBoard'
import Cards from './Cards'

import './index.less'

export default () => {
  return (
    <div id="data-view">
      <FullScreenContainer>
        <TopHeader />

        <div className="main-content">
          <DigitalFlop />

          <div className="block-left-right-content">
            <RankingBoard />

            <div className="block-top-bottom-content">
              <div className="block-top-content">
                <RoseChart />

                <WaterLevelChart />

                <ScrollBoard />
              </div>

              <Cards />
            </div>
          </div>
        </div>
      </FullScreenContainer>
    </div>
  )
}
