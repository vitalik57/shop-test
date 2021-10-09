import axios from "axios";
import React, { Component } from "react";
import ContactList from "./ContactList";
import Filter from "./Filter";

class Katalog extends Component {
  state = {
    products: [],
    filter: ""
  };

  componentDidMount() {
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl").then(response =>
      this.setState({
        products: response.data
      })
    );
  }

  sortCategory = () => {
    // sortByPrice = (a, b) => a.price - b.price;
    const { products } = this.state;
    const sortByPrice = products.sort((a, b) => a.price - b.price);
    console.log(sortByPrice);
    this.setState({
      products: sortByPrice
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  getVisibleContacts = () => {
    const { products, filter } = this.state;
    if (products.length) {
      return products.filter(products => products.name.toLowerCase().includes(filter.toLowerCase()));
    }
  };
  render() {
    const { products } = this.state;
    return (
      <>
        {products.length > 1 && <Filter onChange={this.handleChange} />}
        {products.length ? (
          <ContactList products={this.getVisibleContacts()} onRemove={this.removeContact} />
        ) : (
          <p>There are no contacts here</p>
        )}

        {/* Filtered : <input type="text" name="filter" onChange={this.handleChange} />
        {this.state.products.map(product => (
          <div key={product.id}>
            <h2 key={product.id}>{product.name}</h2>
            <img src={product.image_link} alt="" />
            <p>{product.description}</p>
            <p>price: {product.price}$</p>
            <p>rating: {product.rating || 0}</p>
            <button type="button" onClick={this.sortCategory}>
              add product
            </button>
          </div>
        ))} */}
      </>
    );
  }
}

export default Katalog;
