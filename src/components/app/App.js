import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../actions/getItems'

import './App.css';
import logo from '../../assets/Juliett.png';
import Item from '../item/Item';


class App extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  getItems = () => this.props.items.map(item => <Item key={item._id} name={item.name} img={item.imageURL}/>)

  render() {
    console.log(this.props);
    return (
      <div className="mainWrapper">
        <div className="header">
          <img src={logo}/>
        </div>
        <div className="main">
          {this.getItems()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
