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
    /* box-shadow:15px 0 15px -15px #faf9f9 inset,-15px 0 15px -15px #faf9f9 inset; */
    overflow:auto;
    ul{
      width: 4.1rem;
      li{
        float:left;
        letter-spacing: .02rem;
        padding:0 .11rem;
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