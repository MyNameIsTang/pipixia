import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getFindListAsync } from 'pages/home/discovery/actionCreator'

import AttentionItem from 'components/attention/AttentionItem'

import {
  RecommendContainar
} from "./RecommendStyled";
  
const mapState = state => ({
  findList: state.discovery.findList
})

const mapDispatch = dispatch => ({
  getFindList() { 
    dispatch(getFindListAsync())
  }
  
})

class Recommend extends Component { 
  constructor(props) {
    super(props)
    this.fetchDate()
  }
  render(){
    return (
      <>
        <RecommendContainar>
          {
            Object.keys(this.props.findList).length > 0
              ? (
                <AttentionItem types={"recommend"} {...this.props} anchorClick={this.handleAnchorClick} />
              )
              : null
          }
        
        </RecommendContainar>
      </>
    )
  }
  fetchDate(){
    this.props.getFindList()
  }
  handleAnchorClick(id) { 
    console.log(id)
  }
}

export default connect(mapState, mapDispatch)(Recommend)