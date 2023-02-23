import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const HowItworks = () => {
    const workInfoData = [
      {
        // image: PickMeals,
        title: "Discover The Products",
        text: "We select high quality products that risk being thrown away and make them available for purchase.",
      },
      {
        // image: ChooseMeals,
        title: "Do the shopping",
        text: "We select high quality products that risk being thrown away and make them available for purchase. ",
      },
      {
        // image: DeliveryMeals,
        title: "Pickup or deliver",
        text: "We select high quality products that risk being thrown away and make them available for purchase.",
      },
    ];
    return (
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <h1 className="primary-heading">How It Works</h1>
          </div>
          <div className="work-section-bottom">
            {workInfoData.map((data) => (
              <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  {/* <img src={data.image} alt="" /> */}
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default HowItworks ;