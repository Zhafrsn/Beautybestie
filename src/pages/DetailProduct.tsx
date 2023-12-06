import React from "react";
import { MainLayout } from "layout";
import { BestSeller } from "../components/Best Seller/BestSeller";
import userReview from "../components/User Review/userReview";
import "../styles/DetailProduct.css";
import { ProductComp } from "components/Product Det/ProductComp";

export const DetailProduct: React.FC = () => {
  const ProductRecData = [
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash1.png',
    },
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash2.png',
    },
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash3.png',
    },
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash4.png',
    },
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash5.png',
    },
    {
      title: 'Bright Stuff',
      category: 'Face Wash',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash6.png',
    },
  ];

  return (
    <MainLayout>
      <div className="Pro_Comp">
        <div className="card_left">
          <div className="big_card">
            <img src="images/FaceWash1.png" alt="image1" />
          </div>
          <div className="small_card">
            <img className="small_card1" src="images/FaceWash1.png" alt="image2" />
            <img className="small_card2" src="images/FaceWash1.png" alt="image3" />
            <img className= "small_card3" src="images/FaceWash1.png" alt="image4" />
          </div>
        </div>
        <div className="card_right">
          <ProductComp />
        </div>
      </div>
      <div className="Pro_Rec">
        <h1>Product Recommendation</h1>
        <div className="Pro_Rec_Card">
          {ProductRecData.map((card, index) => (
            <BestSeller key={index} {...card} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};