import { MainLayout } from 'layout';
import '../styles/Products.css';
import { Productcard } from '../components/productcard';

export const Products: React.FC = () => {
  const cardData = [
    {
      title: 'Face Wash 1',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash1.png',
    },
    {
      title: 'Face Wash 2',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash2.png',
    },
    {
      title: 'Face Wash 3',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash3.png',
    },
    {
      title: 'Face Wash 4',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash4.png',
    },
    {
      title: 'Face Wash 5',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash5.png',
    },
    {
<<<<<<< HEAD
      title: 'Card 6',
      description: 'Description for Card 6',
      imageUrl: 'https://example.com/card6.jpg',
=======
      title: 'Face Wash 6',
      Price: 'IDR 19.000',
      imageUrl: 'images/FaceWash6.png',
>>>>>>> 4a0409d43ca4e322cd624c3ee7c5857e2dce112c
    },
  ];
  return (
    <MainLayout>
<<<<<<< HEAD
      <h1 className="Products-Judul">Our Products</h1>
=======
      <div className="Products-Judul">
      <h1>Our Products</h1>
      </div>
>>>>>>> 4a0409d43ca4e322cd624c3ee7c5857e2dce112c
      <div className="Products-Card-Container">
        {cardData.map((card, index) => (
          <Productcard key={index} {...card} />
        ))}
      </div>
    </MainLayout>
  );
};
