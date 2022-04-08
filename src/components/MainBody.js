import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import '../styles/MainBody.css';

class MainBody extends Component {
  render() {
    return (
      <div className="mainBody">
        <PersonalInfo />
      </div>
    );
  }
}

export default MainBody;
