import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../actions/getItems'
import { getQuote } from '../../actions/getQuotes'
import './App.css';
import logo from '../../assets/Juliett.png';
import Item from '../item/Item';
import Cart from '../cart/cart';

class App extends Component {

  componentDidMount () {
    this.props.getItems();
    this.props.getQuote();
    setInterval(() => this.props.getQuote(), 300000);

  }
  
  getItems = () => this.props.items.map((item, k) => <Item key={item._id} arrayKey = {k} name={item.name} img={item.imageURL} priceFiat={item.priceFiat}/>)

  showCart = () => this.props.cart.map((item, key) => <Cart key={item.key} name={item.name} priceFiat={item.priceFiat}/>)

  render () {

    return (
      <div className="mainWrapper">
        <div className="header">
          <img src={logo} />
        </div>
        <div className="main">
          {this.getItems()}
        </div>
        <div className="quote">
          <p>ETH: {this.props.quote}€</p>
        </div>
        <div className="cart">
          <p>YOUR ORDER</p>
          {this.showCart()}
          <p>YOUR TOTAL: {this.props.cartTotal} €</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.items,
  quote: state.quote,
  cart: state.cart.cartItems,
  cartTotal: state.cart.price
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  getQuote: () => dispatch(getQuote()),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
