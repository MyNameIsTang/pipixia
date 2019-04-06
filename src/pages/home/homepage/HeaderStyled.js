import Styled from 'styled-components'

const Header = Styled.header`
  width: 100%;
  height: .49rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  background:#fff;
  
  >div:nth-of-type(1){
    position:relative;
    flex:328;
    font-size: .14rem;
    color: #999999;
    /* box-shadow:15px 0 15px -15px #faf9f9 inset,-15px 0 15px -15px #faf9f9 inset; */
    overflow:auto;
    ul{
      width:3.94rem;
      li{
        float:left;
        letter-spacing: .02rem;
        padding:0 .11rem;
      }
    } 
  }
  >div:nth-of-type(2){
    flex:32;
    img{
      width:.18rem;
      font-size:0;
      border:0;
      display:block;
    }
  }
`

export {
  Header
}