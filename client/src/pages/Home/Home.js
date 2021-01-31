import React, { Component, Fragment } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import {
  HeaderWrapper, Logo, Nav, NavItem, Git, Addition,
  Section, Part, Content, ContentItem
} from './style'
import Background from '../img/hero-bg.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // Header section
    <Fragment>
      <HeaderWrapper>
        <Logo>
          <h1
            style={{
              display: 'inline',
              color: '#EA7030',
              fontWeight: 360
            }}
          >
            码 乐
          </h1>
        </Logo>
        <Nav>
          <NavItem className='right'>帮助</NavItem>
          <NavItem className='right'>登录</NavItem>
        </Nav>
        <Addition>
          <Git href='https://github.com/TheSerendipity/voice-of-the-code'
               target='blank'>
            <GithubOutlined style={{ fontSize: 'large' }} />
          </Git>
        </Addition>
      </HeaderWrapper>
      {/* Header section end */}

      {/* Hero section */}
      <Section>
        <Part className='first'>
          <Content>
            <ContentItem className='one'>假如代码会唱歌~</ContentItem>
            <ContentItem className='one'>你想听听代码的声音吗？</ContentItem>
            <ContentItem className='two'>码乐，程序员专属的代码音乐平台</ContentItem>
            <Link to='../Landing'>
              <ContentItem className='three'>开始起舞</ContentItem>
            </Link>

          </Content>
        </Part>

        {/* Background-image */}
        <Part className='second'>
          <img src={Background} alt='' />
        </Part>
      </Section>
      {/* Hero section end */}
    </Fragment>
  )
}

export default Home