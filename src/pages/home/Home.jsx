import React, { Component } from 'react'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'


import HomeTabs from './HomeTabs'
import Personage from 'pages/common/personage/Personage'
import { HomeContainer } from './HomeStyled'
class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Switch>
          <Redirect exact from='/' to='/home'  ></Redirect>
          <Route path='/:type' component={HomeTabs} ></Route>
          <Route path='/detail' component={Personage} ></Route>
        </Switch>
      </HomeContainer>
    )
  }
}
export default withRouter(Home)