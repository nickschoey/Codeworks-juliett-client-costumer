import React, { Component } from 'react';
import { connect } from 'react-redux';
import './modal.css';
class Modal extends Component {

  render () {
    return (
      <div className="modal" data-status={this.props.status}>
        <div className="modal-left">
          {/* <span className="price-tag">12gfdgfd</span> */}
          <div>
            <form>
              <h3>Delivery details</h3>
              <label>
                Name:
              </label>
                <input type="text" name="name" />
              <label>
                Address:
                <input type="text" name="address" />
              </label>
              <label>
                Phone:
                <input type="text" name="phone" />
              </label>
              <label>
                Email:
                <input type="text" name="email" />
              </label>
              <h3>Payment Details</h3>
              <label>
                Your public ETH Wallet:
                <input type="text" name="wallet" />
              </label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="modal-right">
          <h2>aaa</h2>
          <p>aaa</p>
          <button onClick={this.props.onClick} className="close">
            <span className="fa fa-close">Close</span>
          </button>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
