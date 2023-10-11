import React, { Component } from 'react';
import './styles.css'
import PhoneIcon from '../../assets/icons/phone.png'
export default class Header extends Component {
  render() {
    return (
      <div className='header'> 
        <img src={PhoneIcon} className='phoneIcon' alt="PhoneIcon.png"/>
        <p className='text'>(+89) 123456789</p>

      </div>
    );
  }
}
