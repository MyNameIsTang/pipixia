import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setHiddenBoolSync } from '../actionCreator'
import { 
  Hint,
  HintContainer,
  BorderedHintItem
} from './ClefairyHintStyled'

const mapState = state => ({
  hintTop: state.clefairy.hintTop,
  hidden: state.clefairy.hidden,
  disLike: state.clefairy.disLike
})

const mapDispatch = dispatch => ({
  setHidden(hidden){
    dispatch(setHiddenBoolSync(hidden))
  }
})

class ClefairyHint extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Hint hidden={this.props.hidden || false} onClick={this.handleClick}>
        <HintContainer hintTop={this.props.hintTop}>
          {
            this.props.disLike.lenght === 0 ? null : (
              <>
                {
                  this.props.disLike.map(
                    value => (
                      <BorderedHintItem key={value.dislike_type}>
                        <span style={{backgroundImage:`url(https://p3-ppx.bytecdn.cn/img/${value.icon_image.uri}~69x69.webp)`}}></span>
                        <p>{value.dislike_desc}</p>
                      </BorderedHintItem>
                    )
                  )
                }
              </>
            )
          } 
        </HintContainer>
      </Hint>
    )
  }
  handleClick = (e) => {
    e.stopPropagation()
    let bool = false;
    this.fetchData({ bool })
  }
  fetchData({ bool }){
    this.props.setHidden(bool)
  }
}

export default connect(mapState, mapDispatch)(ClefairyHint)