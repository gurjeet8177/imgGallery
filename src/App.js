import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      items:[],
      isloaded:false
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

  render() {
    var {isloaded, items}=this.state;

    if(!isloaded){
      return <div> is loading</div>
    }else{
    return (
      <div className="App">
        {items.map(item => (
          <img key={item.id} src={"https://picsum.photos/200/300?image="+ item.id} alt="" />

        
         ))};

      </div>
    );
  }//else
  }
}

export default App;
