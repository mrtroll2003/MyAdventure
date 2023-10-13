import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import './styles.css'
import {motion} from "framer-motion"
const SignIn = () => {
  return ( 
    <>
    <Header/>
    <Tabbar/>
    <img src={GlobeImg} alt='GlobeImg.png' className='globe'/>
    <p className='companyName'>MY ADVENTURE</p>
    <p className='accountOption'>WELCOME BACK</p>
    <motion.div className='googleOption' whileTap={{scale: 0.8}}>
        <img src={GoogleIcon} alt='GoogleIcon.png' className='googleIcon'/>
        <p className='googleOptionFont'>Sign in with Google</p>
    </motion.div>
    <p className='alternateText'>OR SIGN IN WITH EMAIL</p>
    <p className='subTitle'>Email Address</p>
    <input type='text' placeholder='Email Address' className='enterInput'></input>
    <p className='subTitle'>Password</p>
    <input type='text' placeholder='Password' className='enterInput'></input>
    <br/>
    <motion.button className='signInButton' whileTap={{opacity: 0.5, transition:{duration: 0.1}}}>Sign in</motion.button>
    <p className='smallText'>Already have an account?<motion.span style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}}> Sign in</motion.span></p>
    </>
  )
}

export default SignIn