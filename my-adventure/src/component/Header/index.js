import React, { Component } from 'react';
import './styles.css'
import PhoneIcon from '../../assets/icons/phone.png'
import MailIcon from '../../assets/icons/mail.png'
import FacebookIcon from '../../assets/icons/facebook.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import {motion} from "framer-motion"
export default class Header extends Component {
  render() {
    return (
      <div className='header'> 
        <motion.img src={PhoneIcon} className='phoneIcon' alt="PhoneIcon.png" whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
        <motion.p className='headerText'  whileHover={{color: 'blue'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} >(+89) 123456789</motion.p>
        <motion.img src={MailIcon} className='mailIcon' alt='MailIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
        <motion.p className='headerText'  whileHover={{color: 'blue'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>myadvanture@gmail.com</motion.p>
        <motion.p style={{marginLeft: '25%',}} className='headerText'>Get to know us</motion.p>
        <motion.img src={FacebookIcon} className='facebookIcon' alt='FacebookIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
        <motion.img src={InstagramIcon} className='instagramIcon' alt='InstagramIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
      </div>
    );
  }
}
