import React, {useState} from 'react'
import Header from '../../component/Header'
import Tabbar from '../../component/Tabbar/Tabbar'
import GlobeImg from '../../assets/images/globe.png'
import GoogleIcon from '../../assets/icons/google.png'
import styles from './styles.module.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
const SignIn = ({onLogin}) => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      email: email,
      password: password,
    };

    console.log("hello")
  
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message === 'Login successful')
        {          
          onLogin(true);
          navigate('/home')
        }
        else
          setShowMessage(true);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  };


  return ( 
    <>
    <img src={GlobeImg} alt='GlobeImg.png' className={styles.globe}/>
    <div className={styles.mainView}>
      <p className={styles.companyName}>MY ADVENTURE</p>
      <p className={styles.accountOption}>WELCOME BACK</p>
      <motion.button className={styles.googleOption} whileTap={{scale: 0.8}}>
          <img src={GoogleIcon} alt='GoogleIcon.png' className={styles.googleIcon}/>
          <p className={styles.googleOptionFont}>Sign in with Google</p>
      </motion.button>
      <p className={styles.alternateText}>OR SIGN IN WITH EMAIL</p>
      <div style={{width: "100%"}}>
        {showMessage && <p className={styles.errorText}>Invalid account</p>}
        <p className={styles.subTitle}>Email Address</p>
        <input type='text' placeholder='Email Address' value={email} onChange={handleEmailChange} className={styles.enterInput}></input>
        <p className={styles.subTitle}>Password</p>
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} className={styles.enterInput} style={{padding: "0 5%"}}></input>
      </div>
      <motion.button className={styles.forgotText} whileTap={{scale: 0.8}} onClick={() => navigate("/forgot-password")}>Forgot your password?</motion.button>
      <motion.button className={styles.signInButton} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={handleSubmit}>Sign in</motion.button>
      <p className={styles.smallText}>Don't have an account?<motion.button style={{color:'turquoise'}} whileTap={{opacity: 0.5, transition:{duration: 0.1}}} onClick={() => navigate('/sign-up')}> Sign up</motion.button></p>
    </div>
    </>
  )
}

export default SignIn