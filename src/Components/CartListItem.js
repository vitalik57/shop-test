import axios from "axios";
import React from "react";
const CartListItem = ({ products, delateProduct }) => {
  // const autProduct = id => {
  //   axios.delete(`http://localhost:3000/products/${id}`);

  //   const updated = products.filter(product => product.id !== id);
  // };
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
          <button type="button" onClick={() => delateProduct(product.id)}>
            deleta product
          </button>
        </div>
      ))}
    </>
  );
};

export default CartListItem;
// import React, { Component } from "react";
// class CartListItem extends Component {
//   state = {
//     products: this.props.products
//   };
//   render() {
//     console.log(this.props.products);
//     return (
//       <>
//         {" "}
//         Купити подукт
//         {this.state.products.map(product => (
//           <div key={product.id}>
//             <h2 key={product.id}>{product.name}</h2>
//             <img src={product.image_link} alt="" />
//             <p>{product.description}</p>
//             <p>price: {product.price}$</p>
//             <p>rating: {product.rating || 0}</p>
//             <button type="button" onClick={() => this.props.delateProduct(product.id)}>
//               deleta product
//             </button>
//             <button type="button">delete firebase</button>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default CartListItem;
