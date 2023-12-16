import { MainLayout } from "layout";
import '../styles/Home.css';
import Brand from '../components/Brand/Brand';
import { BestSeller } from '../components/Best Seller/BestSeller';
import { Navigate, useNavigate } from 'react-router-dom';
import Category from '../components/Category/Category';
import AboutUsComp from "components/AboutUs/AboutUsComp";
import ImageSlider from "components/Ads/Ads";

export const Home: React.FC = () => {
  const adImages = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.png'
  ];
  const brandImage = [
    { logo: 'images/logoSomethic.png' },
    { logo: 'images/logoWardah.png' },
    { logo: 'images/logoEmina.png' },
    { logo: 'images/logoAzarine.png' },
  ];

  const categoryImage = [
    { image: 'images/facewash.jpg', title: 'Face Wash' },
    { image: 'images/toner.jpg', title: 'Toner' },
    { image: 'images/serum.png', title: 'Serum' },
    { image: 'images/moist.jpg', title: 'Moisturizer' },
    { image: 'images/sunscreen.jpg', title: 'Sunscreen' },
    { image: 'images/masker.png', title: 'Mask' },
    { image: 'images/lipmask.jpg', title: 'Lip Mask' },

  ];

  const BestSellerData = [
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
  
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/Products'); // Alamat URL dari halaman produk
  };

  return (
      <MainLayout>
        <div className="Ads">
        <ImageSlider images={adImages} />
        </div>
        <div className="BestSeller">
          <h1>BEST SELLER</h1>
          <button onClick={navigateToProducts}>See All Product</button>
        </div>
        <div className="BestSellerCard">
        {BestSellerData.map((card, index) => (
          <BestSeller key={index} {...card} />
        ))}
        </div>
        <div className="ProductBrand">
          <h1>PRODUCT BRANDS</h1>
          <div className="Brand">
            {brandImage.map((card, index) => (  
            <Brand key={index} logo={card.logo} /> 
            ))}
          </div>
        </div>
        <div className="Category">
          <h1>CATEGORY</h1>
          <div className="CategoryImage">
            {categoryImage.map((card, index) => (  
            <Category key={index} image={card.image} title={card.title} /> 
            ))}
          </div>
        </div>
        <div className="AboutUs">
          <AboutUsComp  />  
        </div>    
      </MainLayout>
  );
};
