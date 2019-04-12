import React from 'react'

import AttentionItem from 'components/attention/AttentionItem'

import { 
  AttentionHead,
  AttentionBody
} from './AttentionUIStyled'


import attenlog from 'assets/images/icon/atten_03.png'

export default props => {
  let attentionList = props.attentionList
  return (
    <>
      {
        Object.keys(attentionList).length === 0
          ? null
          : (
            <>
              <AttentionHead>
                <div>
                  <img src={attenlog} alt="" />
                  <p>你还没有关注任何人哦~</p>
                </div>
              </AttentionHead>
              <AttentionBody>
                <div>
                  <p>推荐你一些有趣的人吧</p>
                </div>
                <AttentionItem types={"attention"} {...props} />
              </AttentionBody>
            </>
          )
        }
    </>
  )
}
