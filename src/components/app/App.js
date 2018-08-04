import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../../actions/getItems'
import { getQuote } from '../../actions/getQuotes'
import './App.css';
import logo from '../../assets/Juliett.png';
import Item from '../item/Item';


class App extends Component {
  
  componentDidMount() {
    this.props.getItems()
    setInterval(() => this.props.getQuote(), 3000)
  }

  getItems = () => this.props.items.map(item => <Item key={item._id} name={item.name} img={item.imageURL}/>)

  render() {
    return (
      <div className="mainWrapper">
        <div className="header">
          <img src={logo}/>
        </div>
        <div className="main">
          {this.getItems()}
        </div>
        <div className="quote">
          {this.quote}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  items: state.items,
  quote: state.quote
});

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItems()),
  getQuote: () => dispatch(getQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
