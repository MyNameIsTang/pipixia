import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {
  HomeTopList,
  HomeTopListItem
} from './RecommendUIStyled'
import Clefairy from 'components/clefairy/views/Clefairy'



class RecommendUI extends Component { 
  constructor(props) { 
    super(props)
    this.state = {

    }
  }

  render() { 
    return(
      <>
        {
          Object.keys(this.props.recommendList).length === 0
          ? null
          : (
              <>
                <HomeTopList className="topgame" length={this.props.recommendList.data.story_info.story_list.length}>
                  <div>
                    {
                      this.props.recommendList.data.story_info.story_list.map(
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
                {
                  this.props.recommendList.data.data.map(
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
    if (!this.bScroll) { 
      this.bScroll = new BScroll('.topgame',{
        probeType: 2,
        scrollX: true,
        click:true
      })
    }
  }
}

export default RecommendUI