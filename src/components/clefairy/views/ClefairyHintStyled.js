import Styled from 'styled-components'

import border from 'components/styled/border'

const Hint = Styled.section`
  width: 100%;
  height: 100%;
  padding: 0 .13rem
  position: absolute;
  background-color: #64646495;
  display: ${props => props.hidden ? 'block' : 'none'} !important;
`
const HintContainer = Styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  ${props => props.hintTop}
  padding: 0 .15rem;
  margin: .13rem;
  background-color: #fff;
  border-radius: .12rem;
  animation: changebox .3s ease-in;
  animation-fill-mode: forwards;
  transform-origin: right center;
  @keyframes changebox{
    0%{ opacity:0;transform:scale(0.3)}
    100%{ opacity:1;transform:scale(1)}
  }
`
const HintItem =  Styled.li`
  width: 100%;
  height: .49rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span{
    width: .24rem;
    height: 100%;
    background-size: .2rem;
    background-position: center center;
    background-repeat: no-repeat;
  }
  p{
    flex: 1;
    font-size: .12rem;
    color: #1c1c1c;
    font-weight: bold;
    padding-left: .09rem;
  } 
`
const BorderedHintItem = border({
  component: HintItem,
  color: '#eee',
  width: '0 0 2px 0'
})


export {
  Hint,
  HintContainer,
  HintItem,
  BorderedHintItem
}