import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import '/Users/a/Desktop/Capstone_two/setup/src/App.css'
export default class Hero extends Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="home-container">
          <div className="home-banner-container">
            <div className="home-bannerImage-container"></div>
            <div className="home-text-section">
              <h1 className="primary-heading">Get The Best Deals!</h1>

              <button className="secondary-button">
                Shop Now <FiArrowRight />{" "}
              </button>
            </div>
            <div className="home-image-section">
              <h1 className="primary-heading">Image</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
