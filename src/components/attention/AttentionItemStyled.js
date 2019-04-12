import Styled from 'styled-components'

import border from "components/styled/border";

const AttentionList = Styled.div`
  width: 100%;
  overflow: hidden;
`
const AttentionListItem = Styled.div`
  width: 100%;
  height: ${props => props.type === 'attention' ? '.56rem' : '.88rem' };
  ${props => props.type === 'attention' ? '' : 'padding: .12rem 0;'}
  margin-bottom: ${props => props.type === 'attention' ? '.27rem' : '0' };
  display: flex;
  justify-content: space-between;
  align-items: center;
  >a{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:nth-of-type(1){
      width: ${props => props.type === 'attention' ? '.56rem' : '.64rem' };
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: ${props => props.type === 'attention' ? '50%' : '.07rem' };
        display: block;
      }
    }
    >div:nth-of-type(2){
      height: 100%;
      padding: 0 .17rem 0 .1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h3{
        font-size: .15rem; 
        color: #1c1c1c;
      }
      p{
        width: 1.5rem;
        font-size: .12rem; 
        color: #404040;
        overflow: hidden;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span{
        font-size: .1rem; 
        color: #999999;
      }
    }
  }
  >div{
    width: .56rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .12rem;
    span{
      width: 100%;
      height: .28rem;
      line-height: .28rem;
      color: #fff;
      text-align: center;
      border-radius: .14rem;
      background: -webkit-linear-gradient(left top, #fd798d , #ff7d8a); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(bottom right, #fd798d, #ff7d8a); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(bottom right, #fd798d, #ff7d8a); /* Firefox 3.6 - 15 */
      background: linear-gradient(to bottom right, #fd798d , #ff7d8a); /* 标准的语法 */
    }
  }
`
const BorderAttentionListItem = border({
  component: AttentionListItem,
  color: '#eee',
  width: '0 0 2px 0'
})

export { 
  AttentionList,
  AttentionListItem,
  BorderAttentionListItem
}