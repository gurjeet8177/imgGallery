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


     <nav aria-label="Page navigation example">
       <ul class="pagination justify-content-center">

           <a class="page-link" href="#" tabindex="1" onClick={this.props.onPrev} >Previous</a>
         <li class="page-item"><a class="page-link" href="#">{this.props.stateObject.currentPageNumber + " of " + this.props.stateObject.totalPages }</a></li>
         <li class="page-item" >
           <a class="page-link" href="#"  onClick={this.props.onNext}>Next</a>
         </li>
       </ul>
     </nav>


    );

  }
}

export default PagginationBlock;
