import React, { Component } from 'react';
import { toggleModal } from '../../actions/toggleModal'
import { connect } from 'react-redux';
import { getItems } from '../../actions/getItems'
import './App.css';
import logo from '../../assets/Juliett.png';
import Item from '../item/Item';
import CartItem from '../cartItem/cartItem';
import { updateCrypto } from '../../actions/updateCrypto';
import Modal from '../modal/modal'


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      flag: true
    }
  }

  componentDidMount () {
    this.props.getItems();
    this.props.updateCrypto();
    // setInterval(() => this.props.updateCrypto(), 600000);
  }

  getItems = () => this.props.items.map((item, k) =>
    <Item
      key={item._id}
      arrayKey={k}
      name={item.name}
      img={item.imageURL}
      priceCrypto={item.priceCrypto}
      priceFiat={item.priceFiat}
      description={item.description}
    />)

  showCart = () => this.props.cart.map((item, index) =>
    <CartItem
      key={index}
      arrayKey={index}
      name={item.name}
      priceFiat={item.priceFiat} />)

  render () {

    return (
      <div className="mainWrapper">
        <div className="header">
          <img src={logo} />
          <div className="quote">
            <p>1 ETH (Ξ) : {this.props.quote} €</p>
          </div>
          <div>
            <p>TOTAL:{this.props.cartTotalCrypto} Ξ or {this.props.cartTotal} €</p>
          </div>
        </div>
        <div className="main">
          {this.getItems()}
        </div>
        <div className="cart">
          <p>YOUR ORDER</p>
          <div className="cartItemContainer">
            {this.showCart()}
          </div>
          <a className="checkOutButton" onClick={this.props.toggleModal}>Check Out </a>
        </div>
        {this.state.flag ? <div className="modalOverlay">
          <Modal onClick={this.props.toggleModal} status={this.props.modal} />
          <button onClick={() => { this.setState({ flag: !this.state.flag }) }}>remove</button>
        </div> : null}
        <button onClick={() => { this.setState({ flag: !this.state.flag }) }}>remove</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.items.items,
  quote: state.items.quote,
  cart: state.cart.cartItems,
  cartTotal: state.cart.price,
  cartTotalCrypto: state.cart.cryptoPrice,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  updateCrypto: () => dispatch(updateCrypto()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
