import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PaymentsForm.css';

class PaymentsForm extends Component {


  render () {
    return (
      <div className="paymentsForm">

      </div>
    );
  }
}

PaymentsForm.propTypes = {

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsForm);
