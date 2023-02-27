import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
// import { FiArrowRight } from "react-icons/fi";
import Hero from "./Hero";
import HowItworks from "./HowItworks";
import Reviews from "./Reviews";
// import HotDeals from "./HotDeals";


export default class Home extends Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Hero />
        {/* <HotDeals /> */}
        <HowItworks/>
        <Reviews/>
        <Footer />
      </>
    );
  }
}
