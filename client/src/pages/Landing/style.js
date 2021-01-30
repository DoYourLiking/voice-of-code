import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position:relative;
  height: 56px;
  border-bottom: 1px solid #EADBF0;
  background: #FAFAF5;
`
export const Logo = styled.a`
  position:absolute;
  top:0;
  left；0;
  display:block
  height: 58px;
  margin-left:15px;
  margin-top:5px;
`
export const Nav = styled.div`
  width:100%;
  height: 100%;
  margin-left: 10px;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding:0 10rem;
  font-size: 17px;
  text-shadow: 5px 5px 20px #E5D3ED, 0px 0px 2px #EA7030;
  &.one {
    margin: 20px 0 50px 0;
    font-size: 25px;
    text-shadow: 0px 0px 2px red, 2px 2px 3px white;
    color: #EA7030;
  }
`
export const Content = styled.div`
  margin-left: 8rem;
  margin-top: 3rem;
`
export const ContentItem = styled.div`
  font-size: 12px;
  text-shadow: 5px 5px 20px #E5D3ED, 0px 0px 2px #EA7030;
`

