import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import { getCommonListAsync, getAttentionListAsync } from '../actionCreator'

import Common from './common/Common'
import Attention from './attention/Attention'

import HomeHead from './HomeHead'

import {
  HomeContent
} from './HomePageStyled'

import ClefairyHint from 'components/clefairy/views/ClefairyHint'

const mapState = state => ({
  commonList: state.homepage.commonList
})

const mapDispatch = dispatch => ({
  getCommondList(obj) { 
    dispatch(getCommonListAsync(obj))
  },
  getAttentionList() { 
    dispatch(getAttentionListAsync())
  }
})
 
class HomeContainer extends Component{
  constructor(props) { 
    super(props)
    this.state = {
      type: this.props.match.params.type,
      elem: this.getElement(this.props.match.params.type),
      fun: this.getElement,
      loading: this.loading,
      backTop: this.backTop
    }
    this.fetchData({ type: this.props.match.params.type})
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let nextType = nextProps.match.params.type;
    if (nextType !== prevState.type) { 
      if (nextType === 'attention') {
        nextProps.getAttentionList()
      } else { 
        nextProps.getCommondList({ type: nextType})
      }
      prevState.loading()
      prevState.backTop()
      return {
        ...prevState,
        type: nextType,
        elem: prevState.fun(nextType)
      }
    }
    return null
  }
  render() {
    return(
      <>
      <HomeContent>
        <HomeHead></HomeHead>
        <div className="bscroll-home">
          <div>
        {
          this.state.elem
        }
          </div>
        </div>
        <ClefairyHint></ClefairyHint>
      </HomeContent>
      </>
    )
  }
  
  componentDidMount() { 
    this.loading()
    this.bScroll = new BScroll('.bscroll-home',{
      probeType: 2,
      pullUpLoad: true,
      click: true,
      pullDownRefresh: {
        threshold: 30, // 下拉距离超过30px触发pullingDown事件
        stop: 20 // 回弹停留在距离顶部20px的位置
      }
    })
    this.bScroll.on('pullingUp', () => {
      console.log(0)
      // this.$nextTick(() => {
      //   bScroll.refresh()
      // })
    })
    this.bScroll.on('pullingDown', () => {
      console.log(this.props.location.pathname)
      // this.$nextTick(() => {
      //   bScroll.refresh()
      // })
      this.bScroll.finishPullDown();
    })
    this.bScroll.on('scrollEnd', (e) => { 
      // console.log(e)
    })
  }
  backTop = () => { 
    this.bScroll.scrollTo(0, 0, 300)
    this.bScroll.refresh()
  }
  getElement(type) { 
    switch (type) {
      case 'recommend':
      case 'game':
        return <Common />
      case 'attention':
        return <Attention />
      default:
        break;
    }
  }
  fetchData({ type }) {
    this.props.getCommondList({ type })
  }
  loading() {
    Toast.loading('Loading...', 30, () => {
      console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 1000);
  }
}

export default connect(mapState, mapDispatch)(withRouter(HomeContainer))