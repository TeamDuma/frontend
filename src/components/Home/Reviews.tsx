import React from "react";
import { Card, Col, Row } from "react-bootstrap";
// import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="secondry-heading">What They Are Saying</h1>
      </div>
      <Row style={{ justifyContent: "center",marginTop:'5%' }}>
        <Col style={{ marginLeft: "5%" }}>
          <Card
            className="bg-dark text-white"
            style={{ margin: "3%", color: "#808080" }}
          >
            <Card.Text style={{ margin: "3%", color: "orange" }}>
              *****
            </Card.Text>
            <Card.Text style={{ marginBottom: "2%", marginLeft: "3%" }}>
              comment
            </Card.Text>
            <Card.Text style={{ marginBottom: "5%", marginLeft: "3%" }}>
              Names
            </Card.Text>
          </Card>
        </Col>
        <Col style={{ marginLeft: "5%" }}>
          <Card
            className="bg-dark text-white"
            style={{ margin: "3%", color: "#808080" }}
          >
            <Card.Text style={{ margin: "3%", color: "orange" }}>
              *****
            </Card.Text>
            <Card.Text style={{ marginBottom: "2%", marginLeft: "3%" }}>
              comment
            </Card.Text>
            <Card.Text style={{ marginBottom: "5%", marginLeft: "3%" }}>
              Names
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ marginLeft: "5%" }}>
          <Card
            className="bg-dark text-white"
            style={{ margin: "3%", color: "#808080" }}
          >
            <Card.Text style={{ margin: "3%", color: "orange" }}>
              *****
            </Card.Text>
            <Card.Text style={{ marginBottom: "2%", marginLeft: "3%" }}>
              comment
            </Card.Text>
            <Card.Text style={{ marginBottom: "5%", marginLeft: "3%" }}>
              Names
            </Card.Text>
          </Card>
        </Col>

        <Col style={{ marginLeft: "5%" }}>
          <Card
            className="bg-dark text-white"
            style={{ margin: "3%", color: "#808080" }}
          >
            <Card.Text style={{ margin: "3%", color: "orange" }}>
              *****
            </Card.Text>
            <Card.Text style={{ marginBottom: "2%", marginLeft: "3%" }}>
              comment
            </Card.Text>
            <Card.Text style={{ marginBottom: "5%", marginLeft: "3%" }}>
              Names
            </Card.Text>
          </Card>
        </Col>
        <Col style={{ marginLeft: "5%" }}>
          <Card
            className="bg-dark text-white"
            style={{ margin: "3%", color: "#808080" }}
          >
            <Card.Text style={{ margin: "3%", color: "orange" }}>
              *****
            </Card.Text>
            <Card.Text style={{ marginBottom: "2%", marginLeft: "3%" }}>
              comment
            </Card.Text>
            <Card.Text style={{ marginBottom: "5%", marginLeft: "3%" }}>
              Names
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
