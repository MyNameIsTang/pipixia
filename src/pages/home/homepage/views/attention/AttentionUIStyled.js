import Styled from 'styled-components'

const AttentionHead = Styled.section`
  width: 100%;
  height: .97rem;
  padding-bottom: .1rem;
  background: #fff;
  >div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: .54rem;
      height: .51rem;
    }
    p{
      padding-left: .1rem;
      color: #999999;
    }
  }
`
const AttentionBody = Styled.section`
  width: 100%;
  margin-top: .06rem;
  padding: 0 .15rem;
  background: #fff;
  >div:nth-of-type(1){
    width: 100%;
    height: .72rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
      color: #404040;
    }
  }
`

export { 
  AttentionHead,
  AttentionBody
}