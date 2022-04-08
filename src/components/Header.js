import React, { Component } from 'react';
import '../styles/Header.css';
import mainLogo from '../images/GitHub-Mark.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="upperHeader">
          <p className="logoName">CV Project</p>
          <div
            className="gitHubTag"
            onClick={() =>
              window.open('https://github.com/Pierce-44', '_blank')
            }
            onKeyDown={this.openLink}
            role="button"
            tabIndex={0}
          >
            <p>Pierce-44</p>
            <img id="gitHubImg" src={mainLogo} alt="gitHub" />
          </div>
        </div>
        <h1 className="lowerHeader">
          Create your professional CV online with CV Project
        </h1>
        <p className="lowerHeaderText">
          Create your very own professional CV and download it within 15
          minutes.
        </p>
        <p className="lowerHeaderText">
          Watch as your CV is created and updated live, allowing for quick and
          easy editing.
        </p>
      </div>
    );
  }
}

export default Header;
