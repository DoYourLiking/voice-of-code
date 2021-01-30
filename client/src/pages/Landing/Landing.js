import React , { Fragment } from 'react'
import Hello from '../../components/Hello/Hello'
import { HeaderWrapper, Logo, Nav, NavItem, Content, ContentItem } from './style';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
    <HeaderWrapper>
      <Link to="../">
        <Logo>
          <h1
            style={{
              display: 'inline',
              color: '#EA7030',
              fontWeight: 360,
            }}
          >
            码 乐
            </h1>
        </Logo>
      </Link>
    <Nav>
      <NavItem>听一听, 让世界知道你写了什么~</NavItem>
    </Nav>
    </HeaderWrapper>
    <div style={{textAlign:"center"}}>
      <NavItem className="one">This is input_area~</NavItem>
      <Hello/>
    </div>
    {/* copyright */}
    <Content className="first">
      <ContentItem className="two">这个jira提给后端</ContentItem>
      <ContentItem className="two">
        Copyright &copy; 2021
      </ContentItem>
    </Content>
    </Fragment>
  )
}

export default Landing