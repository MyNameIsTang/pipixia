import Styled from 'styled-components'

const HomeContent = Styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  .bscroll-home{
    position: relative;
    flex: 1;
    overflow: hidden;
  }
`

export { 
  HomeContent
}