import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {

  constructor(){
    super();
    this.state = {
        products : []
    }
  }

  componentDidMount(){
    fetch("https://my-json-server.typicode.com/melanianf/product-API/products")
      .then(response => response.json())
      .then((data) => {
        this.setState({products : data})
      })
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
                {
                  this.state.products.map((data,key)=> 
                  <Product className= "column" judul={data.judul} harga={data.harga}/>)
                }
          </div>
        </div>
    );
  }
}

export default App;
