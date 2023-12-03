import React, { useState, useEffect } from 'react';
import GlobeImg from '../../assets/images/globe.png';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignIn = ({ onLogin}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const loginUser = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/auth/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const { token, isAdmin } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("isAdmin", isAdmin);
        Cookies.set('signedIn', true, { expires: 365 });  
        return {token, isAdmin};
      } else if(response.status === 401) {
        setMessage ("Invalid account");
        setShowMessage(true);
      } 
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === "" && password === "")
    {
      setMessage("Please fill in Email and Password to Sign in")
      setShowMessage(true);
      return;
    }
    else if (email === "") {
      setMessage("Please fill in Email to Sign in")
      setShowMessage(true);
      return;
    }
    else if (password === "") {
      setMessage("Please fill in Password to Sign in")
      setShowMessage(true);
      return;
    }

  
    const data = {
      email: email,
      password: password,
    };
  
    setIsLoading(true);
  
    try {
      const {token, isAdmin} = await loginUser(data);
  
      setIsLoading(false);
      console.log ("token: " + token);
  
      if (token) {
        onLogin(true, isAdmin);
        if(isAdmin) 
          navigate('/company/home');
        else 
          navigate('/home');
      } else {
        setMessage ("Invalid account");
        setShowMessage(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <img src={GlobeImg} alt="GlobeImg.png" className={styles.globe} />
      <div className={styles.mainView}>
        <p className={styles.companyName}>MY ADVENTURE</p>
        <p className={styles.accountOption}>WELCOME BACK</p>
        {/* <motion.button className={styles.googleOption} whileTap={{ scale: 0.8 }}>
          <img src={GoogleIcon} alt="GoogleIcon.png" className={styles.googleIcon} />
          <p className={styles.googleOptionFont}>Sign in with Google</p>
        </motion.button>
        <p className={styles.alternateText}>OR SIGN IN WITH EMAIL</p> */}
        <div style={{ width: '100%' }}>
          {showMessage && <p className={styles.errorText}>{message}</p>}
          <p className={styles.subTitle}>Email Address</p>
          <input type="text" placeholder="Email Address" value={email} onChange={handleEmailChange} className={styles.enterInput}></input>
          <p className={styles.subTitle}>Password</p>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className={styles.enterInput} style={{ padding: '0 5%' }}></input>
        </div>
        <motion.button className={styles.forgotText} whileTap={{ scale: 0.8 }} onClick={() => navigate("/forgot-password")}>Forgot your password?</motion.button>
        <motion.button className={styles.signInButton} whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }} onClick={handleSubmit}>
          Sign in
        </motion.button>
        <p className={styles.smallText}>Don't have an account? <motion.button style={{ color: 'turquoise' }} whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }} onClick={() => navigate('/sign-up')}>Sign up</motion.button></p>

        {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
        )}
      </div>
    </>
  );
};

export default SignIn;