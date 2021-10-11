import React from "react";
// class ContactList extends Component {
//   state = {
//     size: ""
//   };
//   productsList = () => {
//     const SIZE = 5;

//     const res = this.props.products.reduce(
//       (p, c) => {
//         if (p[p.length - 1].length == SIZE) {
//           p.push([]);
//         }

//         p[p.length - 1].push(c);
//         return p;
//       },
//       [[]]
//     );
//     // const response = [...res];
//     console.log("pryd", res);
//   };
//   pageClick = () => {
//     this.setState(prevState => ({
//       pages: prevState.pages + 1
//     }));
//   };
//   render() {
//     console.log();
//     return (
//       <>
//         {this.props.products.map(product => (
//           <div key={product.id}>
//             <h2 key={product.id}>{product.name}</h2>
//             <img src={product.image_link} alt="" />
//             <p>{product.description}</p>
//             <p>price: {product.price}$</p>
//             <p>rating: {product.rating || 0}</p>
//             <button type="button">add product</button>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default ContactList;
const ContactList = ({ products, quantityOfGoods, pages, addToCart }) => {
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
  // const addToCart = prouct => {
  //   console.log(prouct);
  // };
  // // const response = [...res];
  // console.log("pryd", pages);

  return (
    <>
      {/* Filtered : <input type="text" name="filter" onChange={this.handleChange} /> */}
      {res[pages].map(product => (
        <div key={product.id}>
          <h2 key={product.id}>{product.name}</h2>
          <img src={product.image_link} alt="" />
          <p>{product.description}</p>
          <p>price: {product.price}$</p>
          <p>rating: {product.rating || 0}</p>
          <button
            onClick={() => {
              addToCart(product);
            }}
            type="button"
          >
            add product
          </button>
        </div>
      ))}
    </>
  );
};

export default ContactList;
