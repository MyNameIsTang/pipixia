import React, { Component } from 'react'

import { connect } from 'react-redux'

import CommonUI from './CommonUI'

const mapState = state => ({
  commonList: state.homepage.commonList
})

class Common extends Component{
  constructor(props) { 
    super(props)
    this.state = {

    }
  }
  render (){
    return (
      <CommonUI {...this.props}></CommonUI>
    )
  } 
}
export default connect(mapState)(Common)