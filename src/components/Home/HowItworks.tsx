import React from "react";
import { Row } from "react-bootstrap";
import img1 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step1.png";
import img2 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step2.png";
import img3 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step3.png";

const HowItworks = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div style={{ display: "block", width: "95%",}}>
        <h5 style={{ marginLeft: 30, color: "#808080" }}>STEP1 </h5>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          <h1 style={{ color: "#F58929", marginLeft: 30, fontSize: 30}}>
            Browser through our <br></br>amazing listings
          </h1>

          <img src={img1} style={{ marginLeft: '30%',width: '20%',height: '20%' }}>
          </img>
        </Row>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          

          <img src={img2} style={{ marginLeft: '20%',width: '20%',height: '20%' }}>
          </img>
          <h1 style={{ color: "#F58929", marginLeft: '30%', fontSize: 30}}>
          Verify your investment qualifications
          </h1>
        </Row>
        <Row
          style={{
            marginTop: 30,
          }}
        >
          <h1 style={{ color: "#F58929", marginLeft: 50, fontSize: 30,marginTop:20}}>
          Start exploring vetted campaigns
          </h1>

          <img src={img3} style={{ marginLeft: '30%',width: '20%',height: '20%' }}>
          </img>
        </Row>

        {/* <h5 style={{ color: "#404040", marginLeft: 30, fontWeight: "10",fontSize:'10' }}>
          Getting started is as easy as entering your name and <br />
          email address, then verifying your identity on the platform.
          <br />
          As a registered investor, you can scan through all the campaigns on{" "}
          <br />
          our system and invest in any of your choice.
          <br /> Learn more about verifying your identity and how we secure
          sensitive information.
        </h5> */}
      </div>
    </div>
  );
};

export default HowItworks;
