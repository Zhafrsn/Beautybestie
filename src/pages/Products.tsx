import { MainLayout } from 'layout';
import '../styles/Products.css';
import { Productcard } from '../components/productcard';
import { Dropdown } from '../components/DropDown/DropDown';

export const Products: React.FC = () => {
  const cardData = [
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

  const Option1 = ['All', 'Face Wash', 'Toner', 'Serum', 'Mask', 'Moisturizer', 'Sunscreen', 'Lip Care'];
  const Option2 = ['All', 'Lowest Price', 'Highest Price'];
  return (
    <MainLayout>
      <div className='productsPage-container'>
        <div className="Products-Judul">
          <h1>Our Products</h1>
        </div>
        <div className='Products-Dropdown'>
          <div className='products-dd-category'>
            <p>Category :</p>
            <Dropdown options={Option1}/>
          </div>
          <div className='products-dd-sortby'>
            <p>Sort By :</p>
            <Dropdown options={Option2} />
          </div>
        </div>
        <div className="Products-Card-Container">
          {cardData.map((card, index) => (
            <Productcard key={index} {...card} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
