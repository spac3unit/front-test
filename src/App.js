import React, { Component } from 'react';
import { translate } from 'react-i18next';

import styled from 'styled-components';
import { Box, Text, Flex, Link } from 'rebass';
import { device } from './components/devices';
import { ActionButton } from './components/Button';
import './App.css';

import sombreroBg from './sombrero-bg.svg';
import appleIcon from './apple-icon.svg';
import googleIcon from './google-icon.svg';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <Page>
        <Header>
          <Logo>
            <span>Parla&nbsp;</span>
            <span style={{ color: '#6CADD3' }}>X</span>
          </Logo>
          <LanguageActions i18n={i18n} />
        </Header>
        <Flex flexDirection="column" justifyContent="flex-end" style={{ height: '100%' }} px="20px">
          <CallToAction>
            <ActionButton img={appleIcon} text="App Store" />
            <ActionButton img={googleIcon} text="Google Play" />
          </CallToAction>
          <Footer t={t}>
            <Slogan t={t} />
            <Partners />
            <Socials />
          </Footer>
        </Flex>
      </Page>
    );
  }
}

export default translate('translations')(App);

const Page = styled.div`
  height: calc(100vh - 60px);
  background: url(${sombreroBg}) no-repeat right;
  background-size: contain;
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
  }
`;

const Header = styled(Flex)`
  align-content: center;
  align-items: center;
  height: 60px;
  padding:0 10px;
`;

const Footer = styled(Flex)`
  padding: 22px;
  flexDirection:row;
  justify-content: space-between;
  align-items:flex-end;
`;

const Logo = styled(Box)`
  display: flex;
  font-weight: bold;
  font-size: 40px;
  & > span {
    color: #424F61;
    font-family: Rubik;
  }
`;

const LanguageLink = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
`;

const CallToAction = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const LanguageActions = ({ i18n }) => (
  <Box mx="120px">
    <LanguageLink
      href="/ru"
      onClick={(e) => {
        e.preventDefault();
        i18n.changeLanguage('ru');
      }}
    >
      ru
    </LanguageLink>
    <LanguageLink
      href="/en"
      onClick={(e) => {
        e.preventDefault();
        i18n.changeLanguage('en');
      }}
    >
      en
    </LanguageLink>
  </Box>
);

const Slogan = ({ t }) => (
  <Box>
    <Text fontSize="48px" fontWeight={300} color="#424F61">
      {t('slogan.text1')}
    </Text>
    <Text fontSize="48px" fontWeight={300} color="#424F61">
      {t('slogan.text2')}
    </Text>
    <Text fontSize="60px" fontWeight="bold" css={{ fontStyle: 'italic', color: '#424F61' }}>
      {t('slogan.text3')}
    </Text>
  </Box>
);

const Partners = () => (
  <Box>
    <Text css={{ margin: '0 10px', display: 'inline-block' }}>Yahoo</Text>
    <Text css={{ margin: '0 10px', display: 'inline-block' }}>TC</Text>
  </Box>
);

const Socials = () => (
  <Box>
    <SocialLink>mail</SocialLink>
    <SocialLink>facebook</SocialLink>
    <SocialLink>instagram</SocialLink>
  </Box>
);

const SocialLink = styled.a`
  display: block;
  color: #a0a8b4;
  text-decoration: none;
  text-align: right;
  display: block;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    color: #424f61;
  }
`;
