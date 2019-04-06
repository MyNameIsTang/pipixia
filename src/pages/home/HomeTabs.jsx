import React, { Component } from 'react'

import { TabBar } from 'antd-mobile';
import HomePage from './homepage/HomePage'

import mine from 'assets/images/mine.png'
import home from 'assets/images/home.png'
import find from 'assets/images/find.png'
import news from 'assets/images/news.png'
import share from 'assets/images/share.png'

export default class HomeTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    };
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
            key="cookbook"
            icon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: `url(${home}) center center /  0.22rem 0.22rem no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: `url(${home}) center center /  0.22rem 0.22rem no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
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
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
            data-seed="logId1"
          >
            <div>发现</div>
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
              // this.setState({
              //   selectedTab: 'share'
              // });
              console.log(0)
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
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
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
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <div>我的</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
