import React from 'react'

import {
  FullScreenContainer,
  BorderBox1,
  BorderBox2,
  BorderBox6,
  Decoration4,
} from '@jiaminghi/data-view-react'

import TopLeftCmp from './TopLeftCmp'
import TopMiddleCmp from './TopMiddleCmp'
import TopRightCmp from './TopRightCmp'

import BottomLeftChart1 from './BottomLeftChart1'
import BottomLeftChart2 from './BottomLeftChart2'

import BottomRightTable1 from './BottomRightTable1'
import BottomRightTable2 from './BottomRightTable2'
import BottomRightTable3 from './BottomRightTable3'
import BottomRightTable4 from './BottomRightTable4'

import './index.less'

const style = { width: '5px', height: '45%' }

const style2 = {
  width: '120px',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  marginLeft: '200px',
}

export default () => (
  <div id="data-view">
    <FullScreenContainer>
      <div className="main-header">
        <div className="mh-left">
          技术支持:
          <a href="https://github.com/jiaming743/DataV">https://github.com/jiaming743/DataV</a>
        </div>
        <div className="mh-middle">Demo-机电运维管理台</div>
        <div className="mh-right">
          <BorderBox2 style={style2}>设备档案馆</BorderBox2>
        </div>
      </div>

      <BorderBox1 className="main-container">
        <div className="mc-top">
          <TopLeftCmp />
          <TopMiddleCmp />
          <TopRightCmp />
        </div>
        <div className="mc-bottom">
          <BorderBox6 className="bottom-left-container">
            <Decoration4 className="mcb-decoration-1" style={style} />
            <Decoration4 className="mcb-decoration-2" style={style} />
            <BottomLeftChart1 />
            <BottomLeftChart2 />
          </BorderBox6>

          <div className="bottom-right-container">
            <BottomRightTable1 />
            <BottomRightTable2 />
            <BottomRightTable3 />
            <BottomRightTable4 />
          </div>
        </div>
      </BorderBox1>
    </FullScreenContainer>
  </div>
)
