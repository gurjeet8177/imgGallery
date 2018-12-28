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
<div class="container">
  <ul class="pager">
       <li class="previous"><a  href="#" onClick={this.props.onPrev} >Previous</a></li>
          <li >  <a >{this.props.stateObject.currentPageNumber + " of " + this.props.stateObject.totalPages }</a></li>
       <li class="next"><a  href="#" onClick={this.props.onNext}>Next</a></li>
  </ ul>
  
</div>
    );

  }
}

export default PagginationBlock;
