import axios from "axios";
import React, { Component } from "react";
import { getAllAdvByCategory } from "../api";
import CartListItem from "./CartListItem";
// const getAllAdvByCategory = async category => {
//   try {
//     const response = await axios.get("https://project-8f663-default-rtdb.firebaseio.com/products.json");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

class CartList extends Component {
  state = {
    products: []
    // phones: []
  };

  async componentDidMount() {
    const response = await axios
      .get("http://localhost:3000/products")
      .then(response => this.setState({ products: response.data }));
    // this.getProducts();
    // const responsible = this.state.products;
    // this.getid();
    // console.log(
    //   Object.keys(responsible).map(key => ({
    //     id: key
    //   }))
    // );
  }
  // getid() {
  //   if (this.state.products) {
  //     const phones = Object.keys(this.state.products).map(key => ({
  //       ...this.state.products[key]
  //     }));
  //     console.log(phones);
  //   }
  // }
  // getProducts = async () => {
  //   const response = await getAllAdvByCategory("laptops");
  //   if (response) {
  //     const ideas = Object.keys(response).map(key => ({
  //       id: key
  //     }));
  //     const productValue = Object.keys(response).map(key => ({
  //       id: key,
  //       ...response[key]
  //     }));
  //     const phones = {
  //       id: ideas,
  //       products: productValue //.map(products => (products.id = 2))
  //     };
  //     this.setState({ phones });
  //   }
  // };
  removeContact = id => {
    const { products } = this.state;
    const updated = products.filter(product => product.id !== id);
    this.setState({
      products: [...updated]
    });
    axios.delete(`http://localhost:3000/products/${id}`);
  };
  // delateProduct(id) {
  //   axios.delete(`http://localhost:3000/products/${id}`);
  //   console.log("please");
  //   // this.removeContact(id);
  // }

  render() {
    return (
      <>
        <button type="button" onClick={this.getProducts}>
          delate
        </button>
        <CartListItem delateProduct={this.removeContact} products={this.state.products} />
      </>
    );
  }
}

export default CartList;
