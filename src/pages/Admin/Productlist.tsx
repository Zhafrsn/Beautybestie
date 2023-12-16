import React from 'react';
import { Layout } from './layout';
import '../../styles/Admin/ProductAdmin.css';
import ProductAction from './Components/Productlist/Action';
import Table from './Components/Productlist/ProductTable';
import ActionTable from './Components/Productlist/ActionTable';


const Product: React.FC = () => {
  const tableHeaders = ['No', 'ID', 'Product', 'Stock', 'Category', 'Actions'];
  const tableData = [
    { No: 1, ID: 'MD002', Product: 'Emina Bright Stuff Toner', Stock: '1', Category: 'Toner', Actions: <ActionTable/> },
    { No: 2, ID: 'MD003', Product: 'Emina Bright Stuff SheetMask', Stock: '3', Category: 'Mask', Actions: <ActionTable/> },
    { No: 3, ID: 'MD004', Product: 'Wardah SPF 30 Sunscreen', Stock: '6', Category: 'Sunscreen', Actions: <ActionTable/> },
    { No: 4, ID: 'MD005', Product: 'Azarine SPF 50 Sunscreen', Stock: '4', Category: 'Sunscreen', Actions: <ActionTable/> },
    { No: 5, ID: 'MD006', Product: 'Somethic Serum', Stock: '3', Category: 'Serum', Actions: <ActionTable/> },
    { No: 6, ID: 'MD007', Product: 'Wardah Facewash', Stock: '1', Category: 'Facewash', Actions: <ActionTable/> },
  ];

    return (
        <div>
            <Layout>
                <div className='admin-user__container'>
                    <div className='admin-user__content'>Product List</div>
                    <div className='admin-user__container2'>
                        <ProductAction/>
                        <div className='admin-user__table'>
                            <Table headers={tableHeaders} data={tableData} />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Product;
