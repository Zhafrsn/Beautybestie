import { MainLayout } from "layout"
import { dataProductLocal } from "../firebase/dataProductLocal"
import { Dropdown } from "components/DropDown/DropDown";
import '../styles/Products.css';

interface Option {
    label: string;
    value: string;
}

export const ProductCategory: React.FC = () => {
    const product = dataProductLocal();
    const productCategory = product[0].category;
    
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
            <div className="productPage-container">
                <div className="Products-Judul">
                    <h1>{productCategory}</h1>
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
            </div>
        </MainLayout>
    )
}