import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import styles from './styles.module.css'
import {motion} from "framer-motion"
const SignIn = () => {
  return ( 
    <>
    <Header/>
    <Tabbar/>
    <img src={GlobeImg} alt='GlobeImg.png' className={styles.globe}/>
    <div className={styles.mainView}>
      <p className={styles.companyName}>MY ADVENTURE</p>
      <p className={styles.accountOption}>WELCOME BACK</p>
      <motion.div className={styles.googleOption} whileTap={{scale: 0.8}}>
          <img src={GoogleIcon} alt='GoogleIcon.png' className={styles.googleIcon}/>
          <p className={styles.googleOptionFont}>Sign in with Google</p>
      </motion.div>
      <p className={styles.alternateText}>OR SIGN IN WITH EMAIL</p>
      <div style={{width: "100%"}}>
        <p className={styles.subTitle}>Email Address</p>
        <input type='text' placeholder='Email Address' className={styles.enterInput}></input>
        <p className={styles.subTitle}>Password</p>
        <input type='password' placeholder='Password' className={styles.enterInput} style={{padding: "0 5%"}}></input>
      </div>
      <motion.button className={styles.forgotText} whileTap={{scale: 0.8}}>Forgot your password?</motion.button>
      <motion.button className={styles.signInButton} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>Sign in</motion.button>
      <p className={styles.smallText}>Don't have an account?<motion.span style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}> Sign up</motion.span></p>
    </div>
    </>
  )
}

export default SignIn