import React, { Component } from 'react';
//import './App.css';
import PagginationBlock from './pagginationBlock';
class imagesHolder extends Component {
  constructor (props){
    super(props)
    this.state = {
      items:[],
      isloaded:false,
      currentPageNumber:1,


    }
  }
    componentDidMount(){
      fetch('https://picsum.photos/list')
      .then(response => response.json())
      .then(json => {
        this.setState({
          isloaded:true,
          items:json,

        })
      });
    }
    handleNext = () => {
      var CPN = this.state.currentPageNumber + 1;
      this.setState({currentPageNumber:CPN});
      console.log(this.state.currentPageNumber);

    }
    handlePrev = () => {
      if(this.state.currentPageNumber > 2 || this.state.currentPageNumber == 2){
      var CPN = this.state.currentPageNumber - 1;
      this.setState({currentPageNumber:CPN});
      console.log(this.state.currentPageNumber);
    }else{
      console.log("minus now");
    }
    }
  render() {
    var isloaded= this.state.isloaded;
    const numOfImgPerPage = 9;
    var rangeStartNum = (this.state.currentPageNumber-1) * numOfImgPerPage ;

    var rangeEndNum = ((this.state.currentPageNumber)* 9) -1  ;

     var items=this.state.items.filter((item) => {return item.id > rangeStartNum && item.id < rangeEndNum});

    if(!isloaded){
      return <div> is loading</div>
    }else{
    return (
      <div >
        {items.map(item => (

          <img key={item.id} src={"https://picsum.photos/200/300?image="+ item.id} alt="" />
         ))}
         <PagginationBlock onNext={this.handleNext} onPrev = {this.handlePrev}/>
      </div>
    );
  }//else
  }
}

export default imagesHolder;
