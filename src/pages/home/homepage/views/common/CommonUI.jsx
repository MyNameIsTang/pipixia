import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {
  HomeTopList,
  HomeTopListItem
} from './CommonUIStyled'
import Clefairy from 'components/clefairy/views/Clefairy'


class RecommendUI extends Component { 
  constructor(props) { 
    super(props)
    this.state = {

    }
  }

  render() { 
    let commonList = this.props.commonList
    return(
      <>
        {
          Object.keys(commonList).length === 0
          ? null
          : (
              <>
                {
                  !!commonList.data.story_info.story_list
                    ? (
                      <>
                        <HomeTopList className="topgame" length={commonList.data.story_info.story_list.length}>
                          <div>
                            {
                              commonList.data.story_info.story_list.map(
                                value => (
                                  <HomeTopListItem key={value.story_id}>
                                    <img src={value.icon.url_list[0].url} alt="" />
                                    <p>{value.name}</p>
                                  </HomeTopListItem>
                              )
                            )
                            }
                          </div>
                        </HomeTopList>
                      </>
                    )
                    : null
                }
                {
                  commonList.data.data.map(
                    value => (
                      <Clefairy key={value.cell_id} items={value}></Clefairy>
                    )
                  )
                }
              </>
            )
        }
      </>
    )
  }
  componentDidUpdate() {
    console.log(this.props)
    if (!this.bScroll && !!this.props.commonList.data.story_info.story_list) { 
      
      this.bScroll = new BScroll('.topgame',{
        probeType: 2,
        scrollX: true,
        click:true
      })
    }
  }
}

export default RecommendUI