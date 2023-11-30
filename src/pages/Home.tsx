import Ads from "components/Ads/Ads";
import { MainLayout } from "layout";
import '../styles/Home.css';
import Brand from '../components/Brand/Brand';

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

  return (
      <MainLayout>
        <div className="Ads">
          <Ads images={adImages} />
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
