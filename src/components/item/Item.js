import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item.css';
import { add2Cart } from '../../actions/add2Cart'
import { connect } from 'react-redux';

class Item extends Component {

  addToCart = key => this.props.addToCart(this.props.items[key]);

  render () {
    const
    { name,
      img,
      priceCrypto,
      arrayKey,
      priceFiat,
      description } = this.props

    return (
      <div className="item">
        <div className="card">
          <div className="thumb">
             <img src={img}/>
          </div>
          <div className="infos">
            <h2 className="title">{name}</h2>
            <h3 className="date">{priceCrypto}  Ξ</h3>
            <h3 className="seats">{priceFiat} €</h3>
            <p className="txt">{description}</p>
            <h3 onClick={this.addToCart.bind(this, arrayKey)} className="details">ADD</h3>
          </div>
        </div>
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
