import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import './styles.css'
import {motion} from "framer-motion"
const ForgotPassword = () => {
  return ( 
    <>
    <Header/>
    <Tabbar/>
    <img src={GlobeImg} alt='GlobeImg.png' className='globe'/>
    <p className='companyName'>MY ADVENTURE</p>
    <p className='accountOption'>RESET PASSWORD</p>
    <p className='subTitle'>Email Address</p>
    <input type='text' placeholder='Email Address' className='enterInput'></input>
    <p className='subTitle'>Password</p>
    <input type='text' placeholder='Password' className='enterInput'></input>
    <p className='subTitle'>Confirmation Password</p>
    <input type='text' placeholder='Confirmation Password' className='enterInput'></input>
    <br/>
    <motion.button className='resetButton' whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>Reset</motion.button>
    <p className='smallText'>Already have an account?<motion.span style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}> Sign in</motion.span></p>
    </>
  )
}

export default ForgotPassword