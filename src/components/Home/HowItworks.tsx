import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import img1 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step1.png";
import img2 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step2.png";
import img3 from "/Users/a/Desktop/Capstone_two/setup/src/Assets/step3.png";

const HowItworks = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="secondry-heading">How It Works</h1>
      </div>
      <Row>
        <Col>

        <Card className="bg-dark text-white" style={{margin:'3%',color:'#808080'}}>
        <Card.Text style={{margin:'3%',color:'#808080'}}>
          step1
        </Card.Text>
        <Card.Title style={{marginBottom:'1%',fontSize:'50px',color: '#F58929',marginLeft:'3%'}}>Browse through our <br/>hot deals</Card.Title>
        <Card.Text style={{margin:'3%',color:'#404040'}}>
        We have partnered with trusted retailers to get the best deals in town on our platform.<br/>
Browse through their offers shop by shop and find deals near you.
Each product contains details on nutritional value, sell-by date and number of <br/>products remaining at that offer. Hurry while stocks last!
        </Card.Text>
          </Card>     
             </Col>
        <Col>
        <Card className="bg-dark text-white">
        <Card.Img src={img1} alt="Card image" style={{height:'100%',width:'50%',marginLeft:'20%',marginTop:'5%'}} />
          </Card>   
        </Col>
      </Row>
      <Row>
      <Col>
        <Card className="bg-dark text-white">
        <Card.Img src={img2} alt="Card image" style={{height:'100%',width:'50%',marginLeft:'30%'}} />
          </Card>   
        </Col>
        <Col>

<Card className="bg-dark text-white" style={{margin:'3%',color:'#808080'}}>
<Card.Text style={{margin:'3%',color:'#808080'}}>
  step2
</Card.Text>
<Card.Title style={{marginBottom:'1%',fontSize:'50px',color: '#F58929',marginLeft:'3%'}}>Verify your purchase and pay</Card.Title>
<Card.Text style={{margin:'3%',color:'#404040'}}>
After you have finished selecting your products, check your cart to make sure you have collected all you need. You will then be prompted to pay using your preferred payment method.</Card.Text>
  </Card>     
     </Col>
      
      </Row>
      <Row>
        <Col>

        <Card className="bg-dark text-white" style={{margin:'3%',color:'#808080'}}>
        <Card.Text style={{margin:'3%',color:'#808080'}}>
          step3
        </Card.Text>
        <Card.Title style={{marginBottom:'1%',fontSize:'50px',color: '#F58929',marginLeft:'3%'}}>Choose your delivery option</Card.Title>
        <Card.Text style={{margin:'3%',color:'#404040'}}>
        We aim to connect you to shops nearest to you, so you have the option of using <br/> our courier partner, or passing by the shop and collecting your shopping within the same day you purchase.
        </Card.Text>
          </Card>     
             </Col>
        <Col>
        <Card className="bg-dark text-white">
        <Card.Img src={img3} alt="Card image" style={{height:'100%',width:'50%',marginLeft:'20%',marginTop:'5%'}} />
          </Card>   
        </Col>
      </Row>
      {/* <Card className="bg-dark text-white">
      <Card.Title>Card title</Card.Title>
      <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      <Card.Img src={img1} alt="Card image" style={{height:'10%',width:'10%'}} />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> */}
    </div>
  );
};

export default HowItworks;
