import React, { Component } from 'react';
import styled from 'styled-components';
import { Wobble, FadeIn, FadeOut } from 'animate-css-styled-components';
import {
 Button, Box, Image, Text, Flex 
} from 'rebass';
import { translate } from 'react-i18next';
import { device } from './components/devices';
import { ActionButton } from './components/Button';
import './App.css';
import sombreroBg from './sombrero-bg.svg';
import appleIcon from './apple-icon.svg';
import googleIcon from './google-icon.svg';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    visible: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 1000);
  };

  render() {
    const { t, i18n } = this.props;

    return (
      <Page>
        <Header i18n={i18n}>
          <Logo />
          <Button onClick={() => i18n.changeLanguage('ru')}>ru</Button>
          <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
        </Header>
        <Flex flexDirection="column" justifyContent="flex-end" style={{ height: '100%' }} px="20px">
          <CallToAction>
            <ActionButton img={appleIcon} text="App Store" px="22px" />
            <ActionButton img={googleIcon} text="Google Play" px="22px" />
          </CallToAction>
          <Footer t={t}>
            <Flex flexDirection="row" justifyContent="space-between">
              <Slogan t={t} />
              <Partners />
              <Socials />
            </Flex>
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

const Header = ({ i18n, children }) => <header>{children}</header>;
const Footer = ({ children }) => <footer>{children}</footer>;

const LogoText = styled(Text)`
  display: inline-block;
  font-family: 'Rubik';
  font-weight: bold;
`;
const Logo = () => (
  <Box>
    <LogoText>Parla</LogoText> 
{' '}
<LogoText color="#6CADD3">X</LogoText>
  </Box>
);

const CallToAction = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const Slogan = ({ t }) => (
  <Box fontFamily="Rubik">
    <Text fontSize="48px" color="#424F61">
      {t('slogan.text1')}
    </Text>
    <Text fontSize="48px" color="#424F61">
      {t('slogan.text2')}
    </Text>
    <Text fontSize="60px" fontWeight="bold" css={{ fontStyle: 'italic', color: '#424F61' }}>
      {t('slogan.text3')}
    </Text>
  </Box>
);

const Partners = () => (
  <Box>
    <ul>
      <li>
        <span>Yahoo</span>
      </li>
      <li>
        <span>TC</span>
      </li>
    </ul>
  </Box>
);

const Socials = () => (
  <Box>
    <ul className="socials">
      <li>mail</li>
      <li>facebook</li>
      <li>instagram</li>
    </ul>
  </Box>
);
