import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import styles from './styles.module.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
  const navigate = useNavigate();
  return ( 
    <>
    <img src={GlobeImg} alt='GlobeImg.png' className={styles.globe}/>
    <div className={styles.mainView}>
      <p className={styles.companyName}>MY ADVENTURE</p>
      <p className={styles.accountOption}>RESET PASSWORD</p>
      <div style={{width: "100%"}}>
        <p className={styles.subTitle}>Email Address</p>
        <input type='text' placeholder='Email Address' className={styles.enterInput}></input>
        <p className={styles.subTitle}>Password</p>
        <input type='password' placeholder='Password' className={styles.enterInput} style={{padding: "0 5%"}}></input>
        <p className={styles.subTitle}>Confirm Password</p>
        <input type='password' placeholder='Confirm Password' className={styles.enterInput} style={{padding: "0 5%"}}></input>
      </div>
      <motion.button className={styles.signInButton} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={() => navigate('/sign-in')}>Reset</motion.button>
      <p className={styles.smallText}>Already have an account?<motion.button style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={() => navigate('/sign-in')}> Sign in</motion.button></p>
    </div>
    </>
  )
}

export default ForgotPassword