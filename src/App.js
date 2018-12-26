import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesHolder from './components/imagesHolder'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
      <ImagesHolder  />

      </ div>
    );

  }
}

export default App;
