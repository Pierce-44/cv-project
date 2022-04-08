import React, { Component } from 'react';
import mainLogo from '../images/GitHub-Mark.png';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div
        className="footer"
        onClick={() => window.open('https://github.com/Pierce-44', '_blank')}
        onKeyDown={this.openLink}
        role="button"
        tabIndex={0}
      >
        <p>Pierce-44</p>
        <img id="gitHubImg" src={mainLogo} alt="gitHub" />
      </div>
    );
  }
}

export default Footer;
