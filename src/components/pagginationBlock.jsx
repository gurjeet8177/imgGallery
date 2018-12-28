import React, { Component } from 'react';
import '../App.css';

class PagginationBlock extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }


  render() {
      return(


     <nav class="pagginationBlock">

           <button class="button next-button"  href="#"  onClick={this.props.onPrev}>Prev< /button>
        Page {this.props.stateObject.currentPageNumber + " of " + this.props.stateObject.totalPages }
         <button class="button prev-button"  href="#"  onClick={this.props.onNext}>Next< /button>

     </nav>


    );

  }
}

export default PagginationBlock;
