import axios from "axios";
import React, { Component } from "react";
import CartListItem from "./CartListItem";
// const getAllAdvByCategory = async category => {
//   try {
//     const response = await axios.get("https://project-8f663-default-rtdb.firebaseio.com/products.json");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
class CartList extends Component {
  state = {
    products: [],
    phones: []
  };

  async componentDidMount() {
    const response = await axios
      .get("https://project-8f663-default-rtdb.firebaseio.com/products.json")
      .then(response => this.setState({ products: response.data }));
    this.getProducts();
    const responsible = this.state.products;
    console.log(
      Object.keys(responsible).map(key => ({
        id: key,
        ...responsible[key]
      }))
    );
  }

  getProducts = async () => {
    if (this.state.products) {
      const phones = Object.keys(this.state.products).map(key => ({
        id: key,
        ...this.state.products[key]
      }));
      this.setState({ phones });
    }
  };
  delateProduct() {
    axios.delete("https://project-8f663-default-rtdb.firebaseio.com/products/-MljZx5LVSL2C6JstaP-.json");
  }
  removeContact = id => {
    const { phones } = this.state;
    const updated = phones.filter(phones => phones.id !== id);
    this.setState({
      phones: [...updated]
    });
  };

  render() {
    console.log(this.state.phones);
    return (
      <>
        Rjhpbyf
        <button type="button" onClick={this.getProducts}>
          delate
        </button>
        <CartListItem delateProduct={this.removeContact} products={this.state.phones} />
      </>
    );
  }
}

export default CartList;
