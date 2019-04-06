import React, { Component } from 'react'
import HomeHead from './HomeHead'
import {
  HomeContainer,
  HomeTopList,
  HomeTopListItem
} from './HomePageStyled'

import Clefairy from 'components/clefairy/Clefairy'

import game1 from 'assets/images/game/game_01.jpg'
import game2 from 'assets/images/game/game_02.jpg'
import game3 from 'assets/images/game/game_03.jpg'
import game4 from 'assets/images/game/game_04.jpg'
import game5 from 'assets/images/game/game_05.jpg'

export default class HomePage extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeHead></HomeHead>
        <main>
          <div>
            <HomeTopList>
              <HomeTopListItem>
                <img src={game1} alt="" />
                <p>脸萌冲撞</p>
              </HomeTopListItem>
              <HomeTopListItem>
                <img src={game2} alt="" />
                <p>扫脸出笑话</p>
              </HomeTopListItem>
              <HomeTopListItem>
                <img src={game3} alt="" />
                <p>采油小怪</p>
              </HomeTopListItem>
              <HomeTopListItem>
                <img src={game4} alt="" />
                <p>梦幻2048</p>
              </HomeTopListItem>
              <HomeTopListItem>
                <img src={game5} alt="" />
                <p>真皮王者</p>
              </HomeTopListItem>
            </HomeTopList>
            <Clefairy></Clefairy>
          </div>
        </main>
      </HomeContainer>
    )
  }
}
