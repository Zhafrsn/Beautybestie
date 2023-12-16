  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
  import '../../../../styles/Admin/ProductAdmin.css';
  import AddProduct from '../Productlist/AddProduct';

  const ProductAction: React.FC = () => {
    const [isAddProductOpen, setIsAddProductOpen] = useState(false);

    const toggleAddProduct = () => {
      setIsAddProductOpen(!isAddProductOpen);
    };
      return (
              <div>
                  <div className='admin-user__action'>
                      <div className="admin-user__search-container">
                          <FontAwesomeIcon icon={faSearch} className="admin-user__search-icon" />
                          <input type="text" className="admin-user__search-input" placeholder="Search here" />
                      </div>
                      <button className='admin-user__add' onClick={toggleAddProduct}>
                          <FontAwesomeIcon icon={faPlus} className='admin-user__plus-icon'/>
                          Add Product 
                      </button>
                  </div>
                  {isAddProductOpen && (
                    <div className="popup-container">
                      <AddProduct onClose={() => setIsAddProductOpen(false)} />
                      <div className='overlay'></div>
                    </div>
                  )}
              </div>
      )
  }

  export default ProductAction;
