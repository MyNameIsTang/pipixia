import Styled from 'styled-components'

const ClefairyItem = Styled.section`
  background: #fff;
  margin-top: .08rem;
`
const ClefairyItemHead = Styled.div`
  padding: .16rem .15rem 0;
  >div:nth-of-type(1){
    width: 100%;
    height: .32rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a{
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img{
      width: .32rem
      border-radius: 50%;
      height:100%;
      }
      p{
        flex: 1;
        padding-left: .13rem
        letter-spacing: .02rem;
        color: #181c18;
        font-size: .14rem;
        font-weight: bold;
        line-height: .32rem;
      }
    }
    span{
      width: .23rem;
      height: 100%
      background: url(${props => props.icon}) center center no-repeat;
      background-size: .12rem;
    }
  }
  >div:nth-of-type(2){
    width: 100%;
    padding: .08rem 0;
    font-size: .15rem;
    line-height: .24rem;
    color: #1c1c1c;
    font-weight: bold;
  }
`

const ClefairyItemBody = Styled.div`
  width: 100%;
  position: relative;
  >div:nth-of-type(1){
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      display: block;
      width: .52rem;
      height: .52rem;
      border-radius: 50%;
    }
  }
  >div:nth-of-type(2){
    width: 100%;
    height: ${props => (props.hei/150)}rem;
    video{
      width: 100%;
      height: 100%;
    }
  }
  
`

const ClefairyItemFoot = Styled.div`
  width: 100%;
  height: .5rem;
  display: flex;
  justify-content: space-around;
  color: #1c1c1c;
  font-size: .1rem;
  font-weight: bold;
  >div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    span{
      width: .2rem
      height: .2rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    p{
      padding-left: .04rem;
      line-height: .2rem;
    }
  }
  >div:last-child{
    display: none;
  }
`
export {
  ClefairyItem,
  ClefairyItemHead,
  ClefairyItemBody,
  ClefairyItemFoot
}