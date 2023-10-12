import React from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import './styles.css'
const SignUp = () => {
  return ( 
    <>
    <Header/>
    <Tabbar/>
    <img src={GlobeImg} alt='GlobeImg.png' className='globe'/>
    <p className='companyName'>MY ADVENTURE</p>
    <p className=''>CREATE ACCOUNT</p>
    </>
  )
}

export default SignUp