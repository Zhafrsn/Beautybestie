import React, { useState } from "react";
import "../../../../styles/Admin/ProductAdmin.css";

interface EditProduct {
  onClose: () => void;
}
const AddProduct: React.FC<EditProduct> = ({ onClose }) => {

  return (
    <div className="edit-product__container">
      <div className="title">Edit Product</div>
      <div className="input-container"></div>
      <div className="input-container-ic1">
        <label htmlFor="Id_product" className="placeholder">ID</label>
        <input id="id_product" className="input" type="text" placeholder=" " />
      </div>
      <div className="input-container-ic2">
        <label htmlFor="Product" className="placeholder">Product</label>
        <input id="Product" className="input" type="text" placeholder=" " />
      </div>
      <div className="input-container-ic3">
        <label htmlFor="Stock" className="placeholder">Stock</label>
        <input id="Stock" className="input" type="text" placeholder=" " />
      </div>
      <div className="input-container-ic4">
        <label htmlFor="Category" className="placeholder">Category</label>
        <input id="Category" className="input" type="text" placeholder=" " />
      </div>
      <div className="input-container-ic5">
        <label htmlFor="Desc" className="placeholder">Description</label>
        <input id="Desc" className="input" type="text" placeholder=" " />
      </div>
      <button className="add-button">
        Add
      </button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  )
}
export default AddProduct;