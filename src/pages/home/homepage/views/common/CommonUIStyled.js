import Styled from 'styled-components'

const HomeTopList = Styled.div`
  width: 100%;
  height: .94rem;
  background: #fff;
  padding: 0 .08rem;
  >div{
    height: 100%;
    width: ${props => (props.length*64)/100}rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
const HomeTopListItem = Styled.a`
  /* width: 20%; */
  
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img{
    width: .48rem;
    border-radius: 50%;
    display: block;
  }
  p{
    width: .58rem;
    text-align: center;
    color: #1c1c1c;
    font-size: .12rem;
    margin-bottom: .07rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
export { 
  HomeTopList,
  HomeTopListItem
}