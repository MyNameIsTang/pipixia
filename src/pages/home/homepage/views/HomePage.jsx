import React, { Component } from 'react'

import HomeContainer from './HomeContainer'

import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

class HomePage extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
    <>
      <Switch>
        <Redirect exact from='/home' to='/home/recommend'/>
          <Route
            path='/home/:type'
            render={() => (
              <HomeContainer
                backTop={this.backTop}
              />
            )}
          />
      </Switch>
    </>
    )
  }
}

export default withRouter(HomePage)