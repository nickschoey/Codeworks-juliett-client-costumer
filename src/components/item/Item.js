import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item.css';

class Item extends Component {

  render() {
    const {name, img} = this.props
    return (
      <div className="item">
        <img src={img}/>
        <p>{name}</p>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
};

export default Item;
