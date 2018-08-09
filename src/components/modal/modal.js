import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postOrder } from '../../actions/postOrder'
import { verifyOrder } from '../../actions/verifyOrder'
import CameraQr from '../cameraQr/CameraQr'
import './modal.css';
import camera from '../../assets/Camera.svg';
import qrCode from '../../assets/myqr.png';

class Modal extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      wallet: '',
      cameraFlag: false
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.qrData !== prevProps.qrData && this.state.wallet !== this.props.qrData) {
      this.setState({
        wallet: this.props.qrData
      })
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleCamera = () => this.setState({ cameraFlag: !this.state.cameraFlag })

  handleVerify = (flag) => {
    let myInterval
    if (!flag) {
      myInterval = setInterval(() => this.props.verifyOrder(this.props.order.id), 5000)

    } else {
      clearInterval(myInterval)
    }
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postOrder({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      wallet: this.state.wallet,
      items: this.props.items,
      cryptoPrice: this.props.cryptoPrice,
      price: this.props.price
    })
    this.setState({
      name: '',
      address: '',
      phone: '',
      email: '',
      wallet: '',
      cameraFlag: false
    })
  }

  render () {
    const isWaiting = this.props.order.waiting;
    const paid = this.props.order.paid;
    const cryptoPrice = this.props.cryptoPrice;
    let modalContent;
    if (!isWaiting && !paid) {
      modalContent =
        <div className="modal" data-status={this.props.status}>
          <div className="modal-left">
            <form onSubmit={this.handleSubmit}>
              <h3>Delivery details </h3>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              <label>Address:</label>
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
              <label>Phone:</label>
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
              <label>Email:</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              <h3>Payment Details</h3>
              <label>Your public ETH Wallet: <a onClick={this.handleCamera}><img className="cameraImg" src={camera} /></a></label>
              <input type="text" name="wallet" value={this.state.wallet} onChange={this.handleChange} />
            <input type="submit" onClick={this.handleVerify.bind(this, false)} value="Submit" />
            </form>
          </div>
          <div className="modal-right">
            {this.state.cameraFlag ? <CameraQr /> : <img src={qrCode} />}
          </div>
        </div>
    }

    if (isWaiting && !paid) {
      
      modalContent =
        <div className="modal" data-status={this.props.status}>
          <div className="modal-left check">
            <h1>Your order is being processed. You can transfer {cryptoPrice} Ξ to the wallet represented by the qr on the right.</h1>
          {/* <button className="button__check" onClick={this.handleVerify}>Check my transfer</button> */}
          </div>
          <div className="modal-right">
          <img src={qrCode}/>
          </div>
        </div>
    }
    if (!isWaiting && paid) {

      {this.handleVerify.bind(this, true)}
      modalContent =
        <div className="modal" data-status={this.props.status}>
          <h2 className="pulse">your payment has been verified and your order will be ready shortly</h2>
        </div>
    }

    return (
      <div>
        {modalContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
  cryptoPrice: state.cart.cryptoPrice,
  price: state.cart.price,
  qrData: state.qr,
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  postOrder: (data) => dispatch(postOrder(data)),
  verifyOrder: (id) => dispatch(verifyOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
