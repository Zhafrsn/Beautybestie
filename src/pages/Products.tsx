import { MainLayout } from 'layout';
import '../styles/Products.css';
import { Productcard } from '../components/productcard';

export const Products: React.FC = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://example.com/card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://example.com/card2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'https://example.com/card3.jpg',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 4',
      imageUrl: 'https://example.com/card4.jpg',
    },
    {
      title: 'Card 5',
      description: 'Description for Card 5',
      imageUrl: 'https://example.com/card5.jpg',
    },
    {
      title: 'Face Wash 6',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash6.png',
    },
  ];
  return (
    <MainLayout>
      <div className="Products-Judul">
      <h1>Our Products</h1>
      </div>
      <div className="Products-Card-Container">
        {cardData.map((card, index) => (
          <Productcard key={index} {...card} />
        ))}
      </div>
    </MainLayout>
  );
};
