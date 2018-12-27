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
      currentPageNumber:1
    }
  }
    componentDidMount(){
      fetch('https://picsum.photos/list')
      .then(response => response.json())
      .then(json => {
        var itemsFiltered=json.filter((item, index) => { return index >= 0 && index <= 8 });
        this.setState({
          isloaded:true,
          items:json,
          itemsFiltered
        })
      });
    }




    handleNext = () => {
      //this.filterItems("next");
      var CPN = this.state.currentPageNumber + 1;
      var rangeStartNum ;

      var rangeEndNum;


        rangeStartNum = (CPN - 1) * 9 ;

       rangeEndNum = ((CPN)* 9) -1  ;
    console.log("stN",rangeStartNum);
      console.log("EndN",rangeEndNum);
      var itemsFiltered=this.state.items.filter((item, index) => { return index >= rangeStartNum && index <= rangeEndNum });
        this.setState({currentPageNumber:CPN ,itemsFiltered });


      //console.log(this.state.itemsFiltered.map(item => " "+ item.id));

        }

    handlePrev = () => {
      //this.filterItems("prev");
      var CPN = this.state.currentPageNumber - 1;
      var rangeStartNum = (CPN - 1) * 9 ;

      var rangeEndNum = ((CPN)* 9) -1  ;
      console.log("stN",rangeStartNum);
      console.log("EndN",rangeEndNum);
      var itemsFiltered=this.state.items.filter((item, index) => { return index >= rangeStartNum && index <= rangeEndNum});
        this.setState({itemsFiltered, currentPageNumber:CPN});

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
         <PagginationBlock onNext={this.handleNext} onPrev = {this.handlePrev} stateObject={this.state}/>
      </div>
    );
  }//else
  }
}

export default imagesHolder;
