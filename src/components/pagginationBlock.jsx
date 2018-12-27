import React, { Component } from 'react';
//import './App.css';

class PagginationBlock extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }


  render() {
    return(
        <div >
          <button key="1" value="Next" onClick={this.props.onNext}>Next</button>
            <p></p>
          <button key="2" value="Perv" onClick={this.props.onPrev}>Perv</button>
        </ div>
    );

  }
}

export default PagginationBlock;
