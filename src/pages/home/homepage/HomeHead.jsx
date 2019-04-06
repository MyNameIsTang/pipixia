import React, { Component } from 'react'
import { Header } from './HeaderStyled'
import search from 'assets/images/search.png'

export default class Head extends Component {
  render() {
    return (
      <Header>
        <div>
          <ul className="clear">
            <li>关注</li>
            <li>推荐</li>
            <li>视频</li>
            <li>游戏</li>
            <li>图片</li>
            <li>文字</li>
            <li>喜剧人</li>
          </ul>
        </div>
        <div>
          <img src={search} alt="搜索"/>
        </div>
      </Header>
    )
  }
}
