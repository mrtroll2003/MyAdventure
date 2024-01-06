import React from "react";
import { MyLogo } from "../../assets/logos";
import User from "./userIcon.png";
import Logout from "../../assets/icons/logout.png";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const SignedInTabbar = ({onLogin}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if(localStorage.getItem("token"))
    {
      Cookies.remove('signedIn'); 
      onLogin(false, false);
      navigate('/');
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("email");
    }
  }

  return (
    <div className={styles.contentView1}>
      <Link to='/home'><img src={MyLogo} alt="LOGO" className={styles.logo} /></Link>
      <motion.div className={styles.container}>
        <motion.div
          className={styles.contentText}
          whileHover={{ color: "#5CD6C0" }}
          style={{ marginLeft: "25em" }}
          >
          <Link to="/company/home">Home</Link>
        </motion.div>

        {/* <motion.div
          className={styles.contentText}
          whileHover={{ color: "#5CD6C0" }}
          >
          <Link to="/booking">Booking</Link>
        </motion.div> */}

        <motion.div className={styles.dropdown}>
          <motion.button className={styles.contentText}>Tours</motion.button>
          <motion.div className={styles.dropdownContent}>
            <Link to="/company/vietnam-tours">Vietnam Tours</Link>
            <Link to="/company/international-tours">International Tours</Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.contentText}
          whileHover={{ color: "#5CD6C0" }}
          >
          <Link to="/company/booking-management">Booking</Link>
        </motion.div>

        <motion.div
          className={styles.contentText}
          whileHover={{ color: "#5CD6C0" }}
          >
          <Link to="/company/report">Report</Link>
        </motion.div>

        <motion.div className={styles.dropdown}>
          <motion.img src={User} alt="icon" className={styles.icon} whileHover={{ scale: 0.8 }}/>
          <motion.div className={styles.dropdownContent}>
            <motion.button className={styles.horizon} onClick={handleLogout} onHover={{scale: 0.8}}>
              <motion.img src={Logout} alt="icon" className={styles.logoutIc}/>
              <motion.span className={styles.logout}>Log out</motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SignedInTabbar;
