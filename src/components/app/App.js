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

  constructor(props) {
    super(props)
    this.state = {
      flag:false
    }
  }

  componentDidMount () {
    this.props.getItems();
    this.props.updateCrypto();
  }

  renderItems = () => {
    if (!this.props.categories) return null;
    let elements = [];
    for(let el in this.props.categories) {
      if (this.props.categories.hasOwnProperty(el)) {
          elements = [
            ...elements,
            <h1 className="categoriesTitle">{el}</h1>,
            <div className="categorieContainer">
              {this.props.categories[el].map((item, k) =>
                <Item
                  key={item._id}
                  arrayKey={item.arrayKey}
                  name={item.name}
                  img={item.imageURL}
                  priceCrypto={item.priceCrypto}
                  priceFiat={item.priceFiat}
                  description={item.description}
                />)}
              </div>
          ]
      }
    }
    console.log('ELEMENTS', elements);
    return elements;
  }

  showCart = () => this.props.cart.map((item, index) =>
  <CartItem
    key={index}
    arrayKey={index}
    name={item.name}
    priceFiat={item.priceFiat} />)

  renderModal() {
    if (!this.state.flag) return null;
    return (
      <div className="modalOverlay">
        <Modal onClick={this.props.toggleModal} status={this.props.modal} />
        <a className="closeButton" onClick={this.showwModal}>X</a>
      </div>
    )
  }

  showwModal = () => this.setState({flag:!this.state.flag})

  render () {
    console.log(this.props);
    return (
      <div className="mainWrapper">
        <div className="header">
          <div className="header_element">
            <img src={logo} />
          </div>
          <div className="header_element">
            <p className="ethPrice">1 Ξ = {this.props.quote} €</p>
          </div>
          <div className="header_element">
            <p className="totalPrice"><span>TOTAL:</span>{this.props.cartTotalCrypto} Ξ or {this.props.cartTotal.toFixed(2)} €</p>
          </div>
        </div>
        <div className="main">
          {this.renderItems()}
        </div>
        <div className="cart">
          <p>YOUR ORDER</p>
          <div className="cartItemContainer">
            {this.showCart()}
          </div>
          <a className="checkOutButton" onClick={this.showwModal}>Check Out </a>
        </div>
        {this.renderModal()}
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
  modal: state.modal,
  categories:state.items.categories
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  updateCrypto: () => dispatch(updateCrypto()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
