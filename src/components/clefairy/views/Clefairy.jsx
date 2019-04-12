import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  withRouter
} from 'react-router-dom'


import { Player, BigPlayButton, ControlBar, PlayToggle} from 'video-react';
import { getHintTopSync, setHiddenBoolSync, setDisLikeSync } from '../actionCreator'


import {
  ClefairyItem,
  ClefairyItemHead,
  ClefairyItemBody,
  ClefairyItemFooter,
  ClefairyItemActive,
  BorderClefairyItemActivetText,
  ClefairyItemComments,
  ClefairyItemComment,
  ClefairyItemStatus
} from './ClefairyStyled'

import arrow from 'assets/images/arrow.png'
import praise from 'assets/images/praise.jpg'
import step from 'assets/images/step.jpg'
import comments from 'assets/images/comments.jpg'
import jump from 'assets/images/jump.jpg'
import QQ from 'assets/images/QQ.jpg'

const mapState = state => ({
  hintTop: state.clefairy.hintTop,
  hidden: state.clefairy.hidden,
  disLike: state.clefairy.disLike
})

const mapDispatch = dispatch => ({
  getHintTop(hintTop){
    dispatch(getHintTopSync(hintTop))
  },
  setHidden(hidden){
    dispatch(setHiddenBoolSync(hidden))
  },
  setDisLike(disLike){
    dispatch(setDisLikeSync(disLike))
  }
})


class Clefairy extends Component {
  constructor(props) { 
    super(props)
    this.state = {
     
    }
  }
  // static getDerivedStateFromProps (nextProps, prevState) { 
  //   console.log(nextProps, prevState)
  // }
  render() {
    let items = this.props.items || null;
    return (
    <>
      {
        items ? (
          <ClefairyItem>
          <ClefairyItemHead icon={arrow}>
            <div>
              <a href={items.item.default_schema} >
                <img src={'https://sf1-nhcdn-tos.pstatp.com/obj/'+items.item.author.avatar.uri} alt="" />
                <div>
                  <p>{items.item.author.name}</p>
                  {
                    !!items.item.author.certify_info
                      ? (
                        <span>{items.item.author.certify_info.description}</span>
                      )
                      : null
                  } 
                </div>
              </a>
              <span onClick={(e)=> this.HandleHintClick(e, items.dislike_options)}></span>
            </div>
            <div>{items.item.author.description}</div>
          </ClefairyItemHead>
          <ClefairyItemBody hei={items.item.video.video_height}>
            <Player
              poster={items.item.video.cover_image.url_list[0].url}
            >
              <source src={items.item.video.video_download.url_list[1].url} type="video/mp4" />
              <BigPlayButton position="center" />
              <ControlBar autoHide={true} disableDefaultControls={true}>
                <PlayToggle />
              </ControlBar>
            </Player>
          </ClefairyItemBody>
            <ClefairyItemFooter>
              {
                !!items.item.video.hashtag_schema[0]
                  ? (
                    <>
                      {
                        items.item.video.hashtag_schema.map(
                          value => (
                            <ClefairyItemActive key={value.id_str}>
                              <a href="###">
                                <span></span>
                                <BorderClefairyItemActivetText>{value.base_hashtag.name}</BorderClefairyItemActivetText>
                              </a>
                            </ClefairyItemActive>
                          )
                        )
                      }
                    </>
                  )
                  : null
                }
                {
                  !!items.item.comments[0]
                  ? (
                    <>
                      <ClefairyItemComments>
                        {
                          items.item.comments.map(
                            value => (
                              <ClefairyItemComment key={value.alias_item_id}>
                                <div>
                                  <div>
                                    <img src={`https://p3-ppx.bytecdn.cn/img/${value.user.avatar.uri}~200x200.webp`} alt="" />
                                  </div>
                                  <div>
                                    <span>{value.user.name}</span>
                                    <div>
                                      <b>{value.like_count > 10000 ? (value.like_count/10000).toFixed(1)+'万' : value.like_count }</b>
                                      <span style={{ backgroundImage: `url(${praise})`}}></span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <p>{value.text}</p> 
                                </div>
                              </ClefairyItemComment>
                            )
                          )
                        }
                      </ClefairyItemComments>
                    </>
                  )
                  : null
                }
            <ClefairyItemStatus>
              <div>
                <span style={{ backgroundImage: `url(${praise})`}} ></span>
                <p>{items.item.stats.like_count > 10000 ? (items.item.stats.like_count/10000).toFixed(1)+'万' : items.item.stats.like_count}</p>
              </div>
              <div>
                <span style={{ backgroundImage: `url(${step})`}} ></span>
                <p>踩</p>
              </div>
              <div>
                <span style={{ backgroundImage: `url(${comments})`}} ></span>
                <p>{items.item.stats.comment_count === 0 ? '' : items.item.stats.comment_count}</p>
              </div>
              <div>
                <span style={{ backgroundImage: `url(${jump})`}} ></span>
                <p>{items.item.stats.share_count === 0 ? '' : items.item.stats.share_count}</p>
              </div>
              <div>
                <span style={{ backgroundImage: `url(${QQ})`}} ></span>
              </div>
          </ClefairyItemStatus>
          </ClefairyItemFooter>
        </ClefairyItem>
        ) : null
      }
    </>
    )
  }
  HandleHintClick(e, dislike){ 
    let screen = document.body.clientHeight 
    let top = e.target.getBoundingClientRect().top
    let topHeight = '';
    if(top < screen/2){
      topHeight = `
      top:${(top+20)/100}rem;
      `
    }else{
      topHeight = `bottom:${(screen-top-63)/100}rem;`
    }
    let bool = true;
    this.fetchData({topHeight, bool, dislike})
  }
  fetchData({topHeight, bool, dislike}){
    this.props.getHintTop(topHeight)
    this.props.setHidden(bool)
    this.props.setDisLike(dislike)
  }
  handleDetailClick() {
    this.props.history.push()
  }
}

export default connect(mapState, mapDispatch)(withRouter(Clefairy))