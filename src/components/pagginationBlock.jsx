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
<div>
<nav aria-label="Page navigation example">
       <ul class="pagination">
       <li class="page-item"><a class="page-link" href="#" onClick={this.props.onNext}>Next</a></li>
            <p>{this.props.stateObject.currentPageNumber + " of " + this.props.stateObject.totalPages }</p>
            <li class="page-item"><a class="page-link" href="#" onClick={this.props.onPrev}>Previous</a></li>
          </ ul>
</ nav>
        </ div>
    );

  }
}

export default PagginationBlock;
