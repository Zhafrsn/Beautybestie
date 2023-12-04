import { MainLayout } from 'layout';
import '../styles/Products.css';
import { Productcard } from '../components/productcard';
import { Dropdown } from '../components/DropDown/DropDown';
// import { dataProductLocal } from 'firebase/dataProductLocal';

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

  interface Option {
    label: string;
    value: string;
  }

  const Option1: Option[] = [
    { label: 'All', value: 'all' },
    { label: 'Face Wash', value: 'face-wash' },
    { label: 'Toner', value: 'toner' },
    { label: 'Serum', value: 'serum' },
    { label: 'Mask', value: 'mask' },
    { label: 'Moisturizer', value: 'moisturizer' },
    { label: 'Sunscreen', value: 'sunscreen' },
    { label: 'Lip Care', value: 'lip-care' }
  ];
  const Option2: Option[] = [
    {label: 'All', value: 'all'},
    {label: 'Lowest Price', value: 'lowest-price'},
    {label: 'Highest Price', value: 'highest-price'}
  ];

  return (
    <MainLayout>
      <div className='productsPage-container'>
        <div className="Products-Judul">
          <h1>Our Products</h1>
        </div>
        <div className='Products-Dropdown'>
          <div className='products-dd-category'>
            <p className='products-option-title'>Category :</p>
            <Dropdown options={Option1} />
          </div>
          <div className='products-dd-sortby'>
            <p className='products-option-title'>Sort By :</p>
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
