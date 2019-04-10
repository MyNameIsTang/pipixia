import React, { Component } from 'react'
import { Header } from './HeaderStyled'
import search from 'assets/images/search.png'
import { NavLink } from 'react-router-dom'
export default class Head extends Component {
  render() {
    return (
      <Header>
        <div>
          <ul className="clear">
            <li><NavLink to="/home/attention" activeClassName="selected">关注</NavLink></li>
            <li><NavLink to="/home/recommend" activeClassName="selected">推荐</NavLink></li>
            <li><NavLink to="/home/video" activeClassName="selected">视频</NavLink></li>
            <li><NavLink to="/home/game" activeClassName="selected">游戏</NavLink></li>
            <li><NavLink to="/home/picture" activeClassName="selected">图片</NavLink></li>
            <li><NavLink to="/home/character" activeClassName="selected">文字</NavLink></li>
            <li><NavLink to="/home/comedy" activeClassName="selected">喜剧人</NavLink></li>
          </ul>
        </div>
        <div>
          <img src={search} alt="搜索"/>
        </div>
      </Header>
    )
  }
}
