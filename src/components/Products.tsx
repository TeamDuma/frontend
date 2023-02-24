import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import ProductCard from "./shared/ProductCard";

export default class Products extends Component {
  data = [
    {
      product_id: 1,
      shop_image: "/assets/images/melcom.png",
      discount_rate: "50%",
      product_image: "/assets/images/wheetabixx.png",
      product_name: "Wheetabix",
      old_price: "¢34.45",
      discount_price: "¢34.45",
    },
    {
      product_id: 2,
      shop_image: "/assets/images/melcom.png",
      discount_rate: "50%",
      product_image: "/assets/images/wheetabixx.png",
      product_name: "Wheetabix",
      old_price: "¢34.45",
      discount_price: "¢34.45",
    },
    {
      product_id: 3,
      shop_image: "/assets/images/melcom.png",
      discount_rate: "50%",
      product_image: "/assets/images/wheetabixx.png",
      product_name: "Wheetabix",
      old_price: "¢34.45",
      discount_price: "¢34.45",
    },
  ];
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <h1 style={{ marginTop: "3%" }}>Products</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {this.data.map((item, id) => {
            return (
              <ProductCard
                key={item.product_id}
                shopImageUrl={item.shop_image}
                discountText={item.discount_rate}
                productImageUrl={item.product_image}
                productName={item.product_name}
                oldPrice={item.old_price}
                discountPrice={item.discount_price}
                onButtonClick={() => {}}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}
