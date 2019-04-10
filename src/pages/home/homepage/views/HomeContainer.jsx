import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'


import Recommend from './recommend/Recommend'

// const mapState = state => ({
//   recommendList: state.homepage.recommendList
// })
// const mapDispatch = dispatch => ({
//   getRecommendList() { 
//     dispatch(getRecommendListAsync())
//   }
// })

class HomeContainer extends Component{
  constructor(props) { 
    super(props)
    this.state = {
      type: this.props.match.params.type,
      elem: this.getElement(this.props.match.params.type),
      fun: this.getElement
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.type !== prevState.type) { 
      return {
        ...prevState,
        type: nextProps.match.params.type,
        elem: prevState.fun(nextProps.match.params.type)
      }
    }
    return null
  }
  render() {
    return(
      <>
        {this.state.elem}
      </>
    )
  }
  getElement(type) { 
    switch (type) {
      case 'recommend':
        return <Recommend />
      default:
        break;
    }
  }
}

export default withRouter(HomeContainer)