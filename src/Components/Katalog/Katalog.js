import axios from "axios";
import React, { Component } from "react";
import ContactList from "./KatalogItem";
import Filter from "./Filter";
import styled from "./Katalog.module.css";
class Katalog extends Component {
  state = {
    products: [],
    filter: "",
    quantityOfGoods: 3,
    pages: 0
  };

  componentDidMount() {
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl").then(response =>
      this.setState({
        products: response.data
      })
    );
  }

  sortCheap = () => {
    const { products } = this.state;
    const sortByPrice = products.sort((a, b) => a.price - b.price);
    console.log(sortByPrice);
    this.setState({
      products: sortByPrice
    });
  };
  sortLow = () => {
    const { products } = this.state;
    const sortByPrice = products.sort((a, b) => a.rating - b.rating);
    console.log(sortByPrice);
    this.setState({
      products: sortByPrice
    });
  };
  sortHeight = () => {
    const { products } = this.state;
    const sortByPrice = products.sort((a, b) => b.rating - a.rating);
    console.log(sortByPrice);
    this.setState({
      products: sortByPrice
    });
  };
  sortExpensive = () => {
    const { products } = this.state;
    const sortByPrice = products.sort((a, b) => b.price - a.price);
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
  pageNext = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1
    }));
  };
  pageClickPlus = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1
    }));
  };
  pageClickMinus = () => {
    this.setState(prevState => ({
      pages: prevState.pages - 1
    }));
  };
  addToCart = product => {
    axios.post("http://localhost:3000/products", product);
  };
  newPage = numebr => {
    if (this.state.pages >= numebr) {
      this.setState({
        pages: 0
      });
    }
  };
  render() {
    const { products, quantityOfGoods, pages } = this.state;

    return (
      <>
        {/* {this.newPage()} */}
        <div className={styled.filtering_items}>
          <span className={styled.input_name}> Number of products per page</span>
          <input
            className={styled.katalog_input}
            placeholder="quantity of goods on page"
            type="number"
            value={quantityOfGoods}
            name="quantityOfGoods"
            onChange={this.handleChange}
          />
          <Filter onChange={this.handleChange} />
          <button className={styled.katalog_button} type="button" onClick={this.sortCheap}>
            cheap-expensive
          </button>
          <button className={styled.katalog_button} type="button" onClick={this.sortExpensive}>
            expensive-cheap
          </button>
          <button className={styled.katalog_button} type="button" onClick={this.sortLow}>
            low rating
          </button>
          <button className={styled.katalog_button} type="button" onClick={this.sortHeight}>
            height rating
          </button>
        </div>
        {/* {products.length > 1 && <Filter onChange={this.handleChange} />} */}
        {products.length ? (
          <ContactList
            newPage={this.pageClickPlus}
            products={this.getVisibleContacts()}
            pages={pages}
            addToCart={this.addToCart}
            quantityOfGoods={quantityOfGoods}
            pageClickMinus={this.pageClickMinus}
          />
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
