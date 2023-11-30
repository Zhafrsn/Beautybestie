import Ads from "components/Ads/Ads";
import { MainLayout } from "layout";
import '../styles/Home.css';
import Brand from '../components/Brand/Brand';
import { BestSeller } from '../components/Best Seller/BestSeller';

export const Home: React.FC = () => {
  const adImages = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
  ];
  const brandImage = [
    { logo: 'images/logoSomethic.png' },
    { logo: 'images/logoWardah.png' },
    { logo: 'images/logoEmina.png' },
    { logo: 'images/logoAzarine.png' },
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

  return (
      <MainLayout>
        <div className="Ads">
          <Ads images={adImages} />
        </div>
        <div className="BestSeller">
          <h1>BEST SELLER</h1>
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
      </MainLayout>
  );
};
