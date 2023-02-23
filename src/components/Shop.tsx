import React, { Component } from "react";
import Header from "./header"
import Footer from "./footer";

export default class Shop extends Component {
  render(): React.ReactNode {
    
    return (
      <>
      <Header />
      <h1 style={{ marginTop: '3%' }}>Shop</h1>
      <Footer />

      </> 
      
    )
  }
}
