import React from "react";
import styled from "./Katalog.module.css";
const ContactList = ({ products, quantityOfGoods, pages, addToCart, newPage, pageClickMinus }) => {
  // const proto = products.length;
  // if (products.length > 10) {
  //   products.length = 10;
  // }
  const SIZE = quantityOfGoods;

  const res = products.reduce(
    (p, c) => {
      if (p[p.length - 1].length == SIZE) {
        p.push([]);
      }

      p[p.length - 1].push(c);
      return p;
    },
    [[]]
  );

  if (pages >= res.length) {
    pages = 0;
    alert("It was a last page ");
  }
  console.log("pryd", res.length);

  return (
    <>
      {" "}
      <div>
        {res[pages].map(product => (
          <div className={styled.content} key={product.id}>
            <h3 className={styled.listItemTitle} key={product.id}>
              {product.name}
            </h3>
            <div className={styled.imageWrapper}>
              {" "}
              <img className={styled.listItemImage} src={product.image_link} alt={product.name} />
            </div>

            <p className={styled.description}>{product.description}</p>
            <div className={styled.number}>
              <p>{product.price}$</p>
              <p>rating: {product.rating || 0}</p>
            </div>
            <button
              className={styled.katalog_button}
              onClick={() => {
                addToCart(product);
              }}
              type="button"
            >
              add product
            </button>
          </div>
        ))}
      </div>
      <div className={styled.clickPage}>
        {" "}
        <button className={styled.katalog_button} type="button" onClick={pageClickMinus}>
          Prev page
        </button>
        <button className={styled.katalog_button} type="button" onClick={newPage}>
          Next page
        </button>
      </div>
    </>
  );
};

export default ContactList;
