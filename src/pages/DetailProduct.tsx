import React from "react";
import { MainLayout } from "layout";
import { BestSeller } from "../components/Best Seller/BestSeller";
import { UserReview } from "../components/User Review/UserReview";
import "../styles/DetailProduct.css";
import { ProductComp } from "components/Product Det/ProductComp";
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DetailProduct: React.FC = () => {
  const UserReviewData = [
    {
      rating: "5.0",
      name: 'napesa',
      ukuran: '30 ml',
      review: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam harum corrupti dolorum nam saepe expedita fugit eius repellendus laudantium dicta reiciendis rerum fugiat nobis velit quidem veniam porro obcaecati, recusandae sapiente, illo ut iure modi nemo! Voluptates nam blanditiis quod asperiores culpa ipsum illo incidunt aliquam modi hic recusandae eligendi',
      Image: 'images/FaceWash1.png',
    },
    {
      rating: "5.0",
      name: 'lala',
      ukuran: '30 ml',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam harum corrupti dolorum nam saepe expedita fugit eius repellendus laudantium dicta reiciendis rerum fugiat nobis velit quidem veniam porro obcaecati, recusandae sapiente, illo ut iure modi nemo! Voluptates nam blanditiis quod asperiores culpa ipsum illo incidunt aliquam modi hic recusandae eligendi',
      Image: 'images/FaceWash2.png',
    },
    {
      rating: "5.0",
      name: 'nunu',
      ukuran: '30 ml',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam harum corrupti dolorum nam saepe expedita fugit eius repellendus laudantium dicta reiciendis rerum fugiat nobis velit quidem veniam porro obcaecati, recusandae sapiente, illo ut iure modi nemo! Voluptates nam blanditiis quod asperiores culpa ipsum illo incidunt aliquam modi hic recusandae eligendi',
      Image: 'images/FaceWash3.png',
    },
    {
      rating: "5.0",
      name: 'nana',
      ukuran: '30 ml',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam harum corrupti dolorum nam saepe expedita fugit eius repellendus laudantium dicta reiciendis rerum fugiat nobis velit quidem veniam porro obcaecati, recusandae sapiente, illo ut iure modi nemo! Voluptates nam blanditiis quod asperiores culpa ipsum illo incidunt aliquam modi hic recusandae eligendi',
      Image: 'images/FaceWash4.png',
    }
  ];
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
      <div className='desc_product'>
        <h2>Description:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam harum corrupti
          dolorum nam saepe expedita fugit eius repellendus laudantium dicta reiciendis rerum fugiat
          nobis velit quidem veniam porro obcaecati, recusandae sapiente, illo ut iure modi nemo! Voluptates
          nam blanditiis quod asperiores culpa ipsum illo incidunt aliquam modi hic recusandae eligendi</p>
        <div className='logo_desc'>
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#005eff", }} />
          <FontAwesomeIcon icon={faXTwitter} style={{color: "#000000",}} />
          <FontAwesomeIcon icon={faInstagram} style={{color: "#f52947",}} />
          <FontAwesomeIcon icon={faShare} style={{ color: "#1eff00", }} />
        </div>
      </div>
      <div className="Judul_UserReview">
        <h1>User Review</h1>
      </div>
      <div className="UserReview">
        <div className="UserReview_Card">
          {UserReviewData.map((card, index) => (
            <UserReview key={index} {...card} />
          ))}
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