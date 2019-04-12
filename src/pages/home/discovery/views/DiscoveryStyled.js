import Styled from 'styled-components'

const DiscoveryContainer = Styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
`

const DiscoveryHead = Styled.header`
  width: 100%;
  height: .49rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li{
      font-size: .14rem;
      a{
        color: #999999;
      }
      .selected{
        font-size: .18rem;
        color: #ff6880;
      }
    }
  }
`
const DiscoveryContent = Styled.section`
  width: 100%;
  overflow: hidden;
  flex: 1;
`
export {
  DiscoveryContainer,
  DiscoveryHead,
  DiscoveryContent
}