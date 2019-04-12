import Styled from 'styled-components'
import border from 'components/styled/border'

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
      div{
        height: 100%;
        padding-left: .13rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        p{
          letter-spacing: .02rem;
          color: #181c18;
          font-size: .14rem;
          font-weight: bold;
          line-height: .18rem;
        }
        span{
          font-size: .12rem;
          color: #9b9b9b;
        }
      }
      
    }
    >span{
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
    height: ${props => (props.hei/150)}rem;
    video{
      width: 100%;
      height: 100%;
    }
  }
  
`

const ClefairyItemFooter = Styled.div`
  width: 100%;
  padding: 0 .15rem;
`

const ClefairyItemActive = Styled.div`
  width: 100%;
  height: .33rem;
  padding-top: .1rem;
  a{
    height: 100%;
    display:flex;
    justify-content: flex-start;
    span{
      width: .22rem;
      background-image: url('https://p3-ppx.bytecdn.cn/img/p1056/88c5ea2b90134313b99cf2f9a87e9ca1~noop_w0:tpl4.image');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border-radius: .03rem 0 0 .03rem;
    }
  }
`
const ClefairyItemActiveText = Styled.p`
  height: 100%;
  padding: 0 .06rem;
  line-height: .22rem;
  background: #fff;
  color: #ff6880;
`

const BorderClefairyItemActivetText = border({
  component: ClefairyItemActiveText,
  color: '#ffa4b3',
  width: '1px 1px 1px 0',
})

const ClefairyItemComments = Styled.section`
  width: 100%;
  padding: .1rem;
  margin-top: .1rem;
  background: #f9f9f9;
`
const ClefairyItemComment = Styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: #1c1c1c;
  border-radius: .04rem;
  >div:nth-of-type(1){
    width: 100%;
    height: .24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:nth-of-type(1){
      width: .24rem;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    >div:nth-of-type(2){
      height: 100%;
      padding: .03rem 0 0 .1rem;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .12rem;
      >span{
        line-height: .2rem;
      }
      >div{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        b{
          margin-right: .08rem;
          line-height: .2rem;
          font-weight: normal;
        }
        span{
          width: .14rem;
          height: .14rem;
          margin-bottom: .04rem;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
  >div:nth-of-type(2){
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: start;
    p{
      padding: .05rem 0;
      line-height: .24rem; 
    }
  }
`

const ClefairyItemStatus = Styled.div`
  width: 100%;
  height: .5rem;
  display: flex;
  justify-content: space-between;
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
  ClefairyItemFooter,
  ClefairyItemActive,
  BorderClefairyItemActivetText,
  ClefairyItemComments,
  ClefairyItemComment,
  ClefairyItemStatus
}