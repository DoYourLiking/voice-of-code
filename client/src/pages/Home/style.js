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
  width:860px;
  height: 100%;
  margin:0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding:0 15px;
  font-size: 17px;
  color: #333;
  &.right {
    float: right;
    color: #969696;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Git = styled.a`
  float:right;
  margin-top: 9px;
  margin-right: 30px;
  line-height: 38px;
`
// hero css
export const Section = styled.div`
  overflow:hidden;
  width: 100%;
  height: 100%;
  background: #E8FAD6;
`

export const Part = styled.div`
  &.first {
    width: 50%;
    float:left;
    height:850px;
  };
  &.second {
    margin-top: 66px;
    width: 50%;
    float:right;
    height: 100%;
  }
`
export const Content = styled.div`
  width:100%;
  margin:15% 25%;
`

export const ContentItem = styled.div`
  max-width: 475px;
  &.one {
    font-size: 42px;
    text-shadow: 5px 5px 5px black, 0px 0px 2px black;
    color: white;
    padding-top: 9px;
  };
  &.two {
    font-size: 25px;
    text-shadow: 5px 5px 5px #E8FAD6, 0px 0px 2px red, 2px 2px 3px white;
    padding-top: 30px;
    padding-left:15px;
    margin-bottom: 40px;
  }
  &.three {
    display: inline-block;
    border: none;
    font-size: 30px;
    font-weight: 500;
    min-width: 195px;
    padding: 23px 20px;
    border-radius: 50px;
    text-transform: uppercase;
    background: #B44957;
    color: #fff;
    line-height: normal;
    cursor: pointer;
    text-align: center;
  }
`
