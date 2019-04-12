import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  NavLink
} from 'react-router-dom'
import BScroll from 'better-scroll'

import Recommend from './recommend/Recommend'
import Attention from './attention/Attention'
import { 
  DiscoveryContainer,
  DiscoveryHead,
  DiscoveryContent
} from './DiscoveryStyled'

class Discovery extends Component{
  render() { 
    return (
      <>
        <DiscoveryContainer>
          <DiscoveryHead>
            <ul>
              <li><NavLink to="/discovery/attention" activeClassName="selected">关注</NavLink></li>
              <li><NavLink to="/discovery/recommend" activeClassName="selected">推荐</NavLink></li>
            </ul>
          </DiscoveryHead>
          <DiscoveryContent className="discovery_scroll">
            <div>
              <Switch>
                <Redirect exact from='/discovery' to='/discovery/recommend'></Redirect>
                <Route path='/discovery/attention' component={Attention}></Route>
                <Route exact path='/discovery/recommend' component={Recommend}></Route>
              </Switch>
            </div>
          </DiscoveryContent>
        </DiscoveryContainer>
      </>
    )
  }
  componentDidMount() { 
    this.bScroll = new BScroll('.discovery_scroll',{
      probeType: 2,
      pullUpLoad: true,
      click: true
    })
    this.bScroll.on('pullingUp', () => {
      console.log(0)
      // this.$nextTick(() => {
      //   bScroll.refresh()
      // })
    })
  }
}

export default withRouter(Discovery)