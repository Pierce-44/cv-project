import './styles/App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;
