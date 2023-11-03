import React, { Component } from 'react';
import styles from './styles.module.css'
import PhoneIcon from '../../assets/icons/phone.png'
import MailIcon from '../../assets/icons/mail.png'
import FacebookIcon from '../../assets/icons/facebook.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import {motion} from "framer-motion"
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}> 
        <div className={styles.container}>
          <motion.img src={PhoneIcon} className={styles.phoneIcon} alt="PhoneIcon.png" whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
          <motion.p className={styles.text}  whileHover={{color: 'blue'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} >(+89) 123456789</motion.p>
        </div>
        <div className={styles.container}>
          <motion.img src={MailIcon} className={styles.mailIcon} alt='MailIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
          <motion.p className= {styles.text}  whileHover={{color: 'blue'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>myadvanture@gmail.com</motion.p>
        </div>
        <motion.p className={styles.text} style={{marginLeft: "20vw"}}  whileHover={{color: 'blue'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>Get to know us</motion.p>
        <motion.img src={FacebookIcon} className={styles.facebookIcon} alt='FacebookIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
        <motion.img src={InstagramIcon} className={styles.instagramIcon} alt='InstagramIcon.png' whileHover={{scale: 1.5}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}/>
      </div>
    );
  }
}
