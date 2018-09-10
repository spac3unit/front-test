import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './App.css';
import appleIcon from './apple-icon.svg';
import googleIcon from './google-icon.svg';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="App">
        <Header i18n={i18n} />
        <Footer t={t} />
      </div>
    );
  }
}

export default translate('translations')(App);

const Header = ({ i18n }) => (
  <header>
    <div className="logo">
      <span>Parla</span>
      <span style={{ color: '#6CADD3' }}>X</span>
    </div>
    <div className="lang-controls">
      <button type="button" onClick={() => i18n.changeLanguage('ru')}>
        ru
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        en
      </button>
    </div>

  </header>
);

const CallToAction = () => (
  <div className="cta">
    <div className="buttons-group">
      <IconButton img={appleIcon} bg="#424F61" text="App Store" />
      <IconButton img={googleIcon} bg="#424F61" text="Google Play" />
    </div>
  </div>
);

const Footer = ({ t }) => (
  <footer>
    <div className="slogan">
      <span>{t('slogan.text1')}</span>
      {' '}
      <span>{t('slogan.text2')}</span>
      {' '}
      <span>{t('slogan.text3')}</span>
    </div>
    <div className="partners">
      <ul>
        <li>
          <span>Yahoo</span>
        </li>
        <li>
          <span>TC</span>
        </li>
      </ul>
    </div>
    <ul className="socials">
      <li>
        mail
      </li>
      <li>
        facebook
      </li>
      <li>
        instagram
      </li>
    </ul>
  </footer>
);

const IconButton = ({ img, bg, text }) => (
  <a href="#href" className="icon-button" style={{ backgroundColor: `${bg}` }}>
    <i style={{ backgroundImage: `url(${img})` }} />
    <div className="icon-text">
      <span>Download free</span>
      <span>{text}</span>
    </div>
  </a>
);
