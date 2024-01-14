import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import styles from './styles.module.css'
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"
const SuccessfulBooking = () => {
  const navigate = useNavigate();
  return ( 
    <>
    <img src={GlobeImg} alt='GlobeImg.png' className={styles.globe}/>
    <div className={styles.mainView}>
      <div className={styles.text}>You’ve already booked successfully!</div>
      <div className={styles.subText}>Check your booking status here! </div>
      <motion.button className={styles.buttonContainer} whileTap={{scale: 0.8}} onClick={() => navigate('/yourbooking')}>
        <div className={styles.button}>Your booking</div>
      </motion.button>
    </div>
    </>
  )
}

export default SuccessfulBooking