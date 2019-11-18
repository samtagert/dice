import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    let face = `fas fa-dice-${this.props.face}`;
    let shaking = `${this.props.rolling && 'shaking'}`
    return <i className={`Die ${face} ${shaking}`}></i>
  }
}

export default Die;