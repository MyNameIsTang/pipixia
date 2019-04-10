import React, { Component } from 'react'
import HomeHead from './HomeHead'
import {
  HomeContent
} from './HomePageStyled'

import ClefairyHint from 'components/clefairy/views/ClefairyHint'
import HomeContainer from './HomeContainer'
import BScroll from 'better-scroll'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
    <>
      <HomeContent>
        <HomeHead></HomeHead>
        <div className="bscroll-home">
          <div>
            <Switch>
              <Redirect exact from='/' to='/home/recommend'/>
              <Route path='/home/:type' component={HomeContainer}/>
              {/* <Route path='/material' component={}/> */}
            </Switch>
          </div>
        </div>
        <ClefairyHint></ClefairyHint>
      </HomeContent>
    </>
    )
  }
  componentDidMount() { 
    let bScroll = new BScroll('.bscroll-home',{
      probeType: 2,
      pullUpLoad: true,
      click: true,
      pullDownRefresh: {
        threshold: 30, // 下拉距离超过30px触发pullingDown事件
        stop: 20 // 回弹停留在距离顶部20px的位置
      }
    })
    bScroll.on('pullingUp', () => {
      console.log(0)
      // this.$nextTick(() => {
      //   bScroll.refresh()
      // })
    })
    bScroll.on('pullingDown', () => {
      console.log(this.props.location.pathname)
      // this.$nextTick(() => {
      //   bScroll.refresh()
      // })
      bScroll.finishPullDown();
    })
    bScroll.on('scrollEnd', (e) => { 
      // console.log(e)
    })
  }
}

export default withRouter(HomePage)