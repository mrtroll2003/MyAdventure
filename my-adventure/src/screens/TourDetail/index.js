import React from "react";
import Header from "../../component/Header";
import HLHeader from "../../assets/images/HaLong_Header.png";
import HL1 from "../../assets/images/HaLong1.png";
import HL2 from "../../assets/images/HaLong2.png";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import Footer from "../../component/Footer/Footer";
import "./styles.css";

const TourDetail = () => {
    return (
      <div className="detailContainer">
        <Header></Header>
        <MainTabbar option={"Your Booking"}></MainTabbar>   
        <div className="headContainer">
            <img src={HLHeader} style={{width:"100%",height:"40%",}}></img>
            <h2 style={{position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>HA LONG BAY</h2>
        </div>
        <table style={{width:"100%",}}>
            <tbody>
            <tr>
                <td><img src={HL1} className="tourImage"></img></td>
                <td><img src={HL2} className="tourImage"></img></td>
            </tr>
            <tr>
                <td><img src={HL1} className="tourImage"></img></td>
                <td><img src={HL2} className="tourImage"></img></td>
            </tr>
            </tbody>
        </table>
        <h1 style={{fontFamily:"PlayfairDisplay", fontWeight:"bolder", fontSize:"70px",}}>SCHEDULE OF HA LONG<br></br>BAY TOUR</h1>
        <h5>FROM ONLY <span style={{color:"red"}}>$110</span> PER PERSON</h5>
        <pre style={{fontFamily:"NunitoSans",fontSize:"25px",marginTop:"20px"}}>1, 2 and 3 Day Itineraries<br></br>
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
  