import React, { Component } from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      number: 0
    };
    // this.IncrementNumber = this.IncrementItem.bind(this);
    // this.DecreaseNumber = this.DecreaseItem.bind(this);
  }

  IncrementNumber() {
    const number = this.state.number + 1;
    this.setState({ number: number });
  }
  DecreaseNumber() {
    // console.log('jarek', this.state.number);
    const number = this.state.number - 1
    this.setState({ number: number });
  }

  render() {

    return (
      <div>
        <div className="jumbotron">
          <h1>Here is my First Bookstore</h1>
          <p>Here is a few information about a new react and redux bookstore</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
        <div className="flexcontainer">
          <i className="btn btn-primary" onClick={this.DecreaseNumber.bind(this)}>-</i>
          <h3>{this.state.number}</h3>
          <i className="btn btn-primary" onClick={this.IncrementNumber.bind(this)}>+</i>
        </div>
      </div>
    );
  }
}


export default HomePage;
