import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../actions/getItems'
import './App.css';
import logo from '../../assets/Juliett.png';
import Item from '../item/Item';
import Cart from '../cart/cart';
import { updateCrypto } from '../../actions/updateCrypto';

class App extends Component {

  componentDidMount () {
    this.props.getItems();
    this.props.updateCrypto();
    setInterval(() => this.props.updateCrypto(), 600000);

  }
  
  getItems = () => this.props.items.map((item, k) => <Item key={item._id} arrayKey = {k} name={item.name} img={item.imageURL} priceCrypto={item.priceCrypto} priceFiat={item.priceFiat}/>)

  showCart = () => this.props.cart.map((item, index) => <Cart key={index} arrayKey={index} name={item.name} priceFiat={item.priceFiat}/>)

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
          <p>1 ETH (Ξ): {this.props.quote} €</p>
        </div>
        <div className="cart">
          <p>YOUR ORDER</p>
          {this.showCart()}
          <p>YOUR TOTAL IN FIAT: {this.props.cartTotal} €</p>
          <p>YOUR TOTAL IN ETH: {this.props.cartTotalCrypto} Ξ</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.items.items,
  quote: state.items.quote,
  cart: state.cart.cartItems,
  cartTotal: state.cart.price,
  cartTotalCrypto: state.cart.cryptoPrice
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  updateCrypto: () =>dispatch(updateCrypto())

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
