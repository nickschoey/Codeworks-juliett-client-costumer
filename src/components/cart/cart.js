import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './cart.css';

class Cart extends Component {

  render () {
    const { name, img, priceFiat } = this.props
    return (
      <div className="cart">
        <p>{name} - {priceFiat}€</p>
      </div>
    );
  }
}

Cart.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  cartPrice: state.cart.price
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  getQuote: () => dispatch(getQuote()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);