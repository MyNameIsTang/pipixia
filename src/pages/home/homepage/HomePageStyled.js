import Styled from 'styled-components'

const HomeContainer = Styled.main`
  display: flex;
  flex-direction: column;
  main{
    position: relative;
    flex: 1;
    overflow: auto;
  }
`
const HomeTopList = Styled.div`
  width: 100%;
  height: .94rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  padding: 0 .08rem;
`
const HomeTopListItem = Styled.a`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img{
    width: .48rem;
    display: block;
  }
  p{
    width: 100%;
    text-align: center;
    color: #1c1c1c;
    font-size: .12rem;
    margin-bottom: .07rem;
  }
`
export { 
  HomeContainer,
  HomeTopList,
  HomeTopListItem
}