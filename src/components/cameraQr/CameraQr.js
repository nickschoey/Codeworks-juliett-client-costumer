import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cameraQr.css';
import QrReader from 'react-qr-reader'
import { qrData } from '../../actions/qrData'
class CameraQr extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    if(data){
      this.props.qrData(data);
    }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '25vw'}}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  qrData: (data) => dispatch(qrData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraQr);
