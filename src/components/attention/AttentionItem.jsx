 import React, { Component } from 'react'
 
import { 
  AttentionList,
  AttentionListItem,
  BorderAttentionListItem
} from './AttentionItemStyled'

 export default class AttentionItem extends Component {
  constructor(props){
     super(props)
    this.state = {
       
     }
   }
   render() {
     let type = this.props.types
     let data = []
     let Attention = null
     if (type === 'attention') { 
       data = this.props.attentionList.data.data
       Attention = AttentionListItem
     }else{
        data = this.props.findList.data.hashtags
        Attention = BorderAttentionListItem
     }
     
     return (
       <>
       <AttentionList>
        {
          data.map(
            value => (
              <Attention key={type === 'attention' ? value.cell_id : value.id_str} type={type}>
                <a href="###" onClick={ () => this.props.anchorClick( type === 'attention' ? value.cell_id : value.id_str)}>
                  <div>
                    <img src={`https://p3-ppx.bytecdn.cn/img/${ type === 'attention' ? value.user_info.avatar.uri+'~200x200.webp' : value.base_hashtag.icon.uri+'~200x200.jpeg'}`} alt="" />
                  </div>
                  <div>
                    <h3>{type === 'attention' ? value.user_info.name : value.base_hashtag.name}</h3>
                    {
                      type === 'attention'
                      ? (
                          <>
                            <p>{value.user_info.certify_info ? value.user_info.certify_info.description : ''}</p>
                            <span>{value.user_info.followers_count > 10000 ? (value.user_info.followers_count/10000).toFixed(1)+'万' : value.user_info.followers_count}人关注</span>
                          </>
                      )
                        : (
                          <span>{value.works_num > 10000 ? (value.works_num/10000).toFixed(1)+'万' : value.works_num}条热门内容</span>                          
                      )
                    }
                  </div>
                </a>
                <div>
                  <span>关注</span>
                </div>
              </Attention>
            )
          )
        }     
         </AttentionList>
        </>
     )
   }
 }
 