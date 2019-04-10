import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getRecommendListAsync } from '../../actionCreator'

import RecommendUI from './RecommendUI'

const mapState = state => ({
  recommendList: state.homepage.recommendList
})
const mapDispatch = dispatch => ({
  getRecommendList() { 
    dispatch(getRecommendListAsync())
  }
})

class Recommend extends Component{
  constructor(props) { 
    super(props)
    this.fetchData()
  }
  render (){
    return (
      <RecommendUI {...this.props}></RecommendUI>
    )
  } 
  fetchData(){
    this.props.getRecommendList()
  }
}
export default connect(mapState, mapDispatch)(Recommend)