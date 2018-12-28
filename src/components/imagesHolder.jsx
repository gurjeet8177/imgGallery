import React, { Component } from 'react';
//import './App.css';
import PagginationBlock from './pagginationBlock';
import NavigationBlock from './navigationBlock';
class imagesHolder extends Component {
  constructor (props){
    super(props)
    this.state = {
      items:[],
      itemsFiltered:[],
      isloaded:false,
      currentPageNumber:1,
      totalPages:0,
      imgPerPage:9
    }
  }

    componentDidMount(){
      fetch('https://picsum.photos/list')
      .then(response => response.json())
      .then(json => {
        var totalPages = Math.ceil(json.length/this.state.imgPerPage);
        var itemsFiltered=json.filter((item, index) => { return index >= 0 && index <= (this.state.imgPerPage-1) });
        this.setState({
          isloaded:true,
          items:json,
          itemsFiltered,
          totalPages
        })
      });
    }
    handleChnage = (action) => {
      var rangeStartNum, rangeEndNum, CPN;
      if(action=="prev"){
      if(this.state.currentPageNumber==1){
        CPN = this.state.totalPages;
      }else{
        CPN = this.state.currentPageNumber - 1;
      }

  }else if(action=="next"){
    if(this.state.currentPageNumber==this.state.totalPages){
      CPN = 1;
    }else{
      CPN = this.state.currentPageNumber + 1;
    }

  }

      rangeStartNum = (CPN - 1) * this.state.imgPerPage ;
      rangeEndNum = ((CPN)* this.state.imgPerPage) -1  ;
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
      <div class="container">
      <NavigationBlock />
      <div class="row">
        {this.state.itemsFiltered.map((item, index) => (
                <div class="col-md-4">
                <div class="thumbnail">
                      <img key={index} src={"https://picsum.photos/300/200?image="+ item.id } alt="" />
                        <div class="caption">
                    <p> By: <a href={item.author_url} >{item.author}  </a></p>
                    </div>

                </div>
              </div>


        ))}
</div>
         <PagginationBlock onNext={() => {
             this.handleChnage("next");
           }} onPrev = {() => {
               this.handleChnage("prev");
             }} stateObject={this.state}
             />
         </div>

    )
  }
  }
  }


export default imagesHolder;
