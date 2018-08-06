import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/deleteCart';
import './cartItem.css';

class CartItem extends Component {

  handleDeleteCartItem = key => this.props.deleteCart(key)

  render () {
    const { name, arrayKey, priceFiat } = this.props
    return (
      <div className="cartItem">
        <p>{name} - {priceFiat}€<span> - <a onClick={this.handleDeleteCartItem.bind(this, arrayKey)}>X</a></span></p>
      </div>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  cartPrice: state.cart.price
});

const mapDispatchToProps = (dispatch) => ({
  deleteCart: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
