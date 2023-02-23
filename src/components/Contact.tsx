import React, { Component } from "react";
import Header from "./header"
import Footer from "./footer";

export default class Contact extends Component {
  render(): React.ReactNode {
    
    return (
      <>
      <Header />
      <h1 style={{ marginTop: '3%' }}>Contact</h1>
      <Footer />

      </> 
      
    )
  }
}
