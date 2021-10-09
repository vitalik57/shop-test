import axios from "axios";
import React, { Component } from "react";
import ContactList from "./ContactList";
import Filter from "./Filter";
// const products.length
class Katalog extends Component {
  state = {
    products: [],
    filter: "",
    quantityOfGoods: 10,
    pages: 0
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
  pageClick = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1
    }));
  };
  render() {
    const { products, quantityOfGoods, pages } = this.state;
    console.log(products);
    return (
      <>
        <input
          placeholder="quantity of goods on page"
          type="number"
          value={quantityOfGoods}
          name="quantityOfGoods"
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.pageClick}>
          new page
        </button>

        {products.length > 1 && <Filter onChange={this.handleChange} />}
        {products.length ? (
          <ContactList products={this.getVisibleContacts()} pages={pages} quantityOfGoods={quantityOfGoods} />
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
