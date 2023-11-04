import React from "react";
import Header from "../../component/Header";
import { HLBg } from "../../assets/images";
import HL1 from "../../assets/images/HaLong1.png";
import HL2 from "../../assets/images/HaLong2.png";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import Footer from "../../component/Footer/Footer";
import styles from "./styles.module.css";

const TourDetail = () => {
    return (
      <div className={styles.detailContainer}>
        <div className={styles.vnTourIntroBackground}>
            <div className={styles.vnTourIntroLayer}>
                <h1 className={styles.vnTourIntroText}>HA LONG BAY</h1>
            </div>
        </div>
        <table style={{width:"100%", marginTop: "5vh"}}>
            <tbody>
            <tr>
                <td><img src={HL1} className={styles.tourImage}></img></td>
                <td><img src={HL2} className={styles.tourImage}></img></td>
            </tr>
            <tr>
                <td><img src={HL1} className={styles.tourImage}></img></td>
                <td><img src={HL2} className={styles.tourImage}></img></td>
            </tr>
            </tbody>
        </table>
        <h1 style={{fontFamily:"PlayfairDisplay", fontWeight:"bolder", fontSize:"5vh", margin: "5vh 33vw", marginBottom: "2vh"}}>SCHEDULE OF HA LONG BAY TOUR</h1>
        <h5>FROM ONLY <span style={{color:"red"}}>$110</span> PER PERSON</h5>
        <pre style={{fontFamily:"NunitoSans",fontSize:"3vh",marginTop:"20px"}}>1, 2 and 3 Day Itineraries<br></br>
            Halong, Bai Tu Long & Lan Ha Bay<br></br>
            3*, 4* and 5* Cruises<br></br>
            All Meals Included<br></br>
            Luxury Transfers from Hanoi Old Quarter to Halong Pier<br></br>
            Kayaking, Cave Tours, Squid Fishing, Trekking, Hidden Beaches and more…
        </pre>
        <Footer/>
      </div>
    );
  };
  
  export default TourDetail;
  