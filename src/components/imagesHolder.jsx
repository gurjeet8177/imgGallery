import React, { Component } from 'react';
//import './App.css';
import PagginationBlock from './pagginationBlock';
class imagesHolder extends Component {
  constructor (props){
    super(props)
    this.state = {
      items:[],
      itemsFiltered:[],
      isloaded:false,
      currentPageNumber:1,
      rangeStartNum:0,
      rangeEndNum:9,
      numOfImgPerPage:9

    }
  }
    componentDidMount(){
      fetch('https://picsum.photos/list')
      .then(response => response.json())
      .then(json => {
        this.setState({
          isloaded:true,
          items:json
        })
      });
    }



    handleNext = () => {
      var CPN = this.state.currentPageNumber + 1;
      var rangeStartNum = (this.state.currentPageNumber - 1) * 9 ;

      var rangeEndNum = ((this.state.currentPageNumber)* 9) -1  ;
      var itemsFiltered=this.state.items.filter((item, index) => { return index >= rangeStartNum && index <= rangeEndNum});
        this.setState({itemsFiltered, currentPageNumber:CPN, rangeStartNum, rangeEndNum});


      console.log(this.state.itemsFiltered.map(item => " "+ item.id));


    }

    handlePrev = () => {
            const numOfImgPerPage = 9;
            if(this.state.currentPageNumber > 2 || this.state.currentPageNumber === 2){
            var CPN = this.state.currentPageNumber - 1;
            this.setState({currentPageNumber:CPN});
            console.log(this.state.currentPageNumber);
          }else{
            console.log("minus now");
          }
      }


  render() {
    var isloaded= this.state.isloaded;
    if(!isloaded){
      return <div> is loading</div>
      
    }else{
    return (
      <div >
        {this.state.itemsFiltered.map((item, index) => (

          <img key={index} src={"https://picsum.photos/200/300?image="+ item.id} alt="" />
          //console.log(index);
         ))}
         <PagginationBlock onNext={this.handleNext} onPrev = {this.handlePrev}/>
      </div>
    );
  }//else
  }
}

export default imagesHolder;
