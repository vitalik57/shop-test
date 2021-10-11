import React from "react";
const CartListItem = ({ products, delateProduct }) => {
  return (
    <>
      Купити подукт
      {products.map(product => (
        <div key={product.id}>
          <h2 key={product.id}>{product.name}</h2>
          <img src={product.image_link} alt="" />
          <p>{product.description}</p>
          <p>price: {product.price}$</p>
          <p>rating: {product.rating || 0}</p>
          <button type="button" onClick={delateProduct}>
            deleta product
          </button>
        </div>
      ))}
    </>
  );
};

export default CartListItem;
