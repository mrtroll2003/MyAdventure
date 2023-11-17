import React, { useState } from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import styles from './styles.module.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [showMessage, setShowMessage] = useState(false); 
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signupUser = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/auth/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

        const status = await response.status;
        return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === "" || password === "" || confirmPassword === "" )
    {
      setMessage("Please fill in all information to Sign up")
      setShowMessage(true);
      return;
    }

    if(confirmPassword !== password)
    {
      setMessage("Password and Confirm Password does not match")
      setShowMessage(true);
      return;
    }
    

  
    const data = {
      email: email,
      password: password,
    };
  
    setIsLoading(true);
  
    try {
      const response = await signupUser(data);
      console.log(response)
      setIsLoading(false);
  
      if (response === 202) {
        navigate('/sign-in');
      } else if (response === 409) {
        setMessage("Email is already in use")
        setShowMessage(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return ( 

    <>
    <img src={GlobeImg} alt='GlobeImg.png' className={styles.globe}/>
    <div className={styles.mainView}>
      <p className={styles.companyName}>MY ADVENTURE</p>
      <p className={styles.accountOption}>CREATE ACCOUNT</p>
      <div style={{width: "100%"}}>
        {showMessage && <p className={styles.errorText}>{message}</p>}
        <p className={styles.subTitle}>Email Address</p>
        <input type='text' placeholder='Email Address' className={styles.enterInput} value={email} onChange={handleEmailChange}></input>
        <p className={styles.subTitle}>Password</p>
        <input type='password' placeholder='Password' className={styles.enterInput} style={{padding: "0 5%"}}  value={password} onChange={handlePasswordChange}></input>
        <p className={styles.subTitle}>Confirm Password</p>
        <input type='password' placeholder='Confirm Password' className={styles.enterInput} style={{padding: "0 5%"}} value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
      </div>
      <motion.button className={styles.signInButton} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={handleSubmit}>Sign up</motion.button>
      <p className={styles.smallText}>Already have an account? <motion.button style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={() => navigate('/sign-in')}> Sign in</motion.button></p>
      {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
        )}
    </div>
    </>
  )
}

export default SignUp