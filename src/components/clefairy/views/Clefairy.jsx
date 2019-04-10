import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHintTopSync, setHiddenBoolSync, setDisLikeSync } from '../actionCreator'
import {
  ClefairyItem,
  ClefairyItemHead,
  ClefairyItemBody,
  ClefairyItemFoot
} from './ClefairyStyled'

// import icon from 'assets/images/icon/icon_03.jpg'
import arrow from 'assets/images/arrow.png'
import praise from 'assets/images/praise.jpg'
import step from 'assets/images/step.jpg'
import comments from 'assets/images/comments.jpg'
import jump from 'assets/images/jump.jpg'
import QQ from 'assets/images/QQ.jpg'
import play from 'assets/images/play.png'

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
      video:''
      
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
              <a href={items.item.default_schema}>
                <img src={'https://sf1-nhcdn-tos.pstatp.com/obj/'+items.item.author.avatar.uri} alt="" />
                <p>{items.item.author.name}</p>
              </a>
              <span onClick={(e)=> this.HandleHintClick(e, items.dislike_options)}></span>
            </div>
            <div>{items.item.author.description}</div>
          </ClefairyItemHead>
          <ClefairyItemBody hei={items.item.video.video_height}>
            <div style={{backgroundImage: `url(${items.item.video.cover_image.url_list[0].url})`}}>
              <img src={play} alt=""/>
            </div>
            <div dangerouslySetInnerHTML={{__html:`<video controls="" name="media"><source src=${items.item.video.video_download.url_list[1].url} type="video/mp4"></video>`}}></div>
          </ClefairyItemBody>
          <ClefairyItemFoot>
            <div>
              <span style={{ backgroundImage: `url(${praise})`}} ></span>
              <p>{items.item.stats.like_count === 0 ? '' : items.item.stats.like_count}</p>
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
          </ClefairyItemFoot>
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
}

export default connect(mapState, mapDispatch)(Clefairy)