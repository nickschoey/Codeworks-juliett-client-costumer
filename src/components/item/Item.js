import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item.css';
import { add2Cart } from '../../actions/add2Cart'
import { connect } from 'react-redux';

class Item extends Component {

  addToCart (key) {

    this.props.addToCart(this.props.items[key])
  }

  render () {
    const { name, img, priceCrypto, arrayKey, priceFiat } = this.props
    return (
      <div onClick={this.addToCart.bind(this, arrayKey)} className="item">
        <img src={img} />
        <p>{name}</p>
        <p>{priceCrypto} Ξ</p>
        <p>{priceFiat} €</p>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  priceFiat: PropTypes.number
};

const mapStateToProps = (state) => ({

  items: state.items.items
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(add2Cart(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
