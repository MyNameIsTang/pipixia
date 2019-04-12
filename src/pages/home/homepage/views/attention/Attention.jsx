import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getAttentionListAsync } from '../../actionCreator'

import AttentionUI from './AttentionUI'

const mapState = state => ({
  attentionList: state.homepage.attentionList
})
const mapDispatch = dispatch => ({
  getAttentionList() { 
    dispatch(getAttentionListAsync())
  }
})

class Attention extends Component{
  constructor(props) { 
    super(props)
    this.fetchData()
  }
  render(){
    return (
      <AttentionUI {...this.props} anchorClick={this.handleAnchorClick} />
    )
  }
  fetchData(){
    this.props.getAttentionList()
  }
  handleAnchorClick(id) { 
    console.log(id)
  }
}

export default connect(mapState, mapDispatch)(Attention)