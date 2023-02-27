import React from "react";
import "/Users/a/Desktop/Capstone_two/setup/src/components/shared/product-listing/productCardStyles.css";
import "../../../components/shared/product-listing/productCardStyles.css";

interface ProductCardProps {
  shopImageUrl: string;
  discountText: string;
  productImageUrl: string;
  productName: string;
  oldPrice: string;
  discountPrice: string;
  onButtonClick: () => void;
}

const ProductCard = ({
  shopImageUrl = "/assets/images/melcom.png",
  discountText = "50%",
  productImageUrl = "/assets/images/wheetabixx.png",
  productName = "Wheetabix",
  oldPrice = "¢34.45",
  discountPrice = "¢34.45",
  onButtonClick,
}: ProductCardProps) => {
  return (
    <div>
      <div className="card-content">
        <div className="top-item">
          <img className="shop-image" src={shopImageUrl} alt="Workflow" />
          <div className="discount-container">
            <h3>{discountText}</h3>
          </div>
        </div>

        <div className="product-image-container">
          <img className="product-image" src={productImageUrl} alt="Workflow" />
          <div className="card-overlay">
            <button onClick={onButtonClick} className="quick-add-button">
              Quick Add
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-text-container">
        <h3>{productName}</h3>
        <h3>
          <s> {oldPrice}</s>
          <span className="new-price-text"> {discountPrice}</span>
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
