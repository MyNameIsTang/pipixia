import React, { Component } from 'react'

import {
  withRouter
} from 'react-router-dom'

import { TabBar } from 'antd-mobile';
import HomePage from './homepage/views/HomePage'
import Discovery from './discovery/views/Discovery'
import Mine from './mine/Mine'

import mine from 'assets/images/mine.png'
import home from 'assets/images/home.png'
import find from 'assets/images/find.png'
import news from 'assets/images/news.png'
import share from 'assets/images/share.png'

class HomeTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true
    };
  }
  static getDerivedStateFromProps(nextProps, PrevState) { 
    if (nextProps.match.params.type !== PrevState.selectedTab) {
      return {
        ...PrevState,
        selectedTab: nextProps.match.params.type
      }
    }
    return null
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'absolute', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item  
            title="首页"
            key="home"
            icon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: `url(${home}) center center /  0.22rem 0.22rem no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: `url(${home}) center center /  0.22rem 0.22rem no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.props.history.push('/')
            }}
            data-seed="logId"
          >
            <HomePage></HomePage>
          </TabBar.Item>
        
          <TabBar.Item
            icon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${find}) center center /  0.22rem 0.22rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${find}) center center /  0.22rem 0.22rem no-repeat` }}
              />
            }
            title="发现"
            key="discovery"
            selected={this.state.selectedTab === 'discovery'}
            onPress={() => {
              this.props.history.push('/discovery')
            }}
            data-seed="logId1"
          >
            <Discovery></Discovery>
          </TabBar.Item>

          <TabBar.Item
            className ="color"
            icon={
              <div style={{
                width: '0.46rem',
                height: '0.46rem',
                backgroundColor: '#ff5173',
                backgroundImage: `url(${share})`,
                backgroundPosition: 'center center',
                backgroundSize: '0.24rem 0.24rem',
                backgroundRepeat:'no-repeat',
                borderRadius:'50%'
              }}
              ></div>
            }
            key="share"
            selected={this.state.selectedTab === 'share'}
            onPress={() => {
              // this.props.history.push('/discovery')
            }}
          >
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${news}) center center /  0.22rem 0.22rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${news}) center center /  0.22rem 0.22rem no-repeat` }}
              />
            }
            title="消息"
            key="news"
            selected={this.state.selectedTab === 'news'}
            onPress={() => {
              this.props.history.push('/news')
            }}
          >
            <div>消息</div>
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${mine}) center center /  0.22rem 0.22rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: `url(${mine}) center center /  0.22rem 0.22rem no-repeat` }}
              />
             
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.props.history.push('/mine')
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
  handleClick() { 
    console.log(0)
  }
}

export default withRouter(HomeTabs)