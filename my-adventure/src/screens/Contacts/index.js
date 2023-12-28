import React, { useEffect } from "react";
import styles from "./styles.module.css";
import LocationIC from "../../assets/icons/locationBlue.png";
import HeadphoneIC from "../../assets/icons/headphoneBlue.png";
import PhoneIC from "../../assets/icons/phoneBlue.png";
import EmailIC from "../../assets/icons/emailBlue.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
    <div className={styles.content}>
      {/* Intro Background */}
        <div className={styles.title}>
          <h2 className={styles.welcome}><mark className={styles.highlight}>Welcome To Our</mark></h2>
          <h2 className={styles.myadventure}><mark className={styles.highlight}>My Adventure</mark></h2>
          <h2 className={styles.booking}><mark className={styles.highlight}>Enjoy your dream vacation, discover amazing places at exclusive details</mark></h2>
        </div>
        <div
        style={{
          display: "inline-block",
        }}
      >
        <h1 className={styles.aboutUsGreenText} style={{ marginTop: "10%" }}>
          Contact Information
        </h1>
        <img src={LocationIC} className={styles.icon}></img>
        <p className={styles.normalText}>123 Nguyễn Thị Minh Khai, phường Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh</p><br></br>
        <img src={HeadphoneIC} className={styles.icon}></img>
        <p className={styles.normalText}>Hotline: (+89) 123456789</p><br></br>
        <img src={PhoneIC} className={styles.icon}></img>
        <p className={styles.normalText}>WhatsApp: (+89) 123456789</p><br></br>
        <img src={EmailIC} className={styles.icon}></img>
        <p className={styles.normalText}>myadvanture@gmail.com</p><br></br>
      </div>
      <Footer/>
    </div>
    );
  };
  
  export default Contacts;
  