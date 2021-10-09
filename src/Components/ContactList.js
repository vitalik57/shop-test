import React from "react";
const ContactList = ({ products }) => {
  // const proto = products.length;
  // if (products.length > 10) {
  //   products.length = 10;
  // }
  // const SIZE = 10;

  // const res = products.reduce(
  //   (p, c) => {
  //     if (p[p.length - 1].length == SIZE) {
  //       p.push([]);
  //     }

  //     p[p.length - 1].push(c);
  //     return p;
  //   },
  //   [[]]
  // );

  // console.log(res);

  return (
    <>
      {/* Filtered : <input type="text" name="filter" onChange={this.handleChange} /> */}
      {products.map(product => (
        <div key={product.id}>
          <h2 key={product.id}>{product.name}</h2>
          <img src={product.image_link} alt="" />
          <p>{product.description}</p>
          <p>price: {product.price}$</p>
          <p>rating: {product.rating || 0}</p>
          <button type="button">add product</button>
        </div>
      ))}
    </>
  );
};

export default ContactList;
