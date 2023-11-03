import React from "react";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import CustomerBox from "../../components/CustomerBox/CustomerBox";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

class DetailBookingScreen extends React.Component {
  render() {
    let form = {
      transport: "",
      hotel: "",
      tour: "",
      address: "",
      departuretDate: "",
    };
    let user = {
      name: "Lê Thị Bích Hằng",
    };
    let tour = {
      id: "1234",
      departure: "Sài Gòn",
      destination: "Sapa",
      date: "05/10/2003",
      status_code: 1,
      status: [
        "Cancelled",
        "Waiting for handling",
        "Finished",
        "Currently Booking",
      ],
    };
    let statusBackgroundColor;
    if (tour.status_code == 0) {
      statusBackgroundColor = "#FF8139";
    } else if (tour.status_code == 1) {
      statusBackgroundColor = "#FFED8C";
    } else if (tour.status_code == 2) {
      statusBackgroundColor = "#66F235";
    } else if (tour.status_code == 3) {
      statusBackgroundColor = "#EBEBEB";
    }

    // method:
    const handleTransportChange = (event) => {};

    const handleHotelChange = (event) => {};

    const handleTourChange = (event) => {};

    const handleAddressChange = (event) => {};

    const setDeparturetDate = (event) => {};
    return (
      <div>
        {/* Header */}
        <Header />
        {/* Tabbar */}
        <MainTabbar option={"Your Booking"} />
        {/* Screen's Background */}
        <div className={styles.detailBookingBackground}>
          {/* Greetings */}
          <h2 className={styles.greetings}>
            Hi, <span style={{ color: "#5CD6C0" }}> {user.name}</span>
          </h2>
          <p className={styles.text}>
            We are happy that you have chosen our company for your upcoming
            trips. We thank you very much and wish you a rewarding experience at
            MyAdventure!
          </p>
          {/* Main Content */}
          <div className={styles.mainContentContainer}>
            {/* Title */}
            <h1 className={styles.title}>Your Booking #{tour.id}</h1>
            <h2
              className={styles.title}
              style={{ fontSize: "45px", margin: "0px" }}
            >
              {tour.departure} - {tour.destination}
            </h2>
            <h3
              className={styles.title}
              style={{
                margin: "0px",
                textTransform: "capitalize",
                fontSize: "25px",
              }}
            >
              Booking Date: {tour.date}
            </h3>
            <div
              className={styles.statusContainer}
              style={{ backgroundColor: statusBackgroundColor }}
            >
              {tour.status[tour.status_code]}
            </div>
            {/* Modify & Cancel Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: "5%",
              }}
            >
              <motion.button
                className={styles.optionBtn}
                style={{ backgroundColor: "#FF8139" }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9, rotate: "25deg" }}
              >
                Cancel
              </motion.button>
              <motion.button
                className={styles.optionBtn}
                style={{ backgroundColor: "#66F235" }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9, rotate: "-25deg" }}
              >
                Modify
              </motion.button>
            </div>
            {/* Account Box */}
            <p className={styles.text} style={{ marginTop: "5%" }}>
              We will contact or send notifications to you via this contact:
            </p>
            <motion.div
              className={styles.accountBox}
              whileTap={{ opacity: 0.75, rotate: "1deg" }}
            >
              <img
                src={require("../../assets/icons/account.png")}
                alt="account"
                style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
              />
              <div className={styles.signIn}>
                <div style={{ fontWeight: "600" }}>You signed in as</div>
                <div style={{ marginTop: "2vh" }}>21522041@gm.uit.edu.vn</div>
              </div>
            </motion.div>
            {/* Your Detail Booking */}
            <div
              style={{
                fontSize: "5.5vh",
                fontWeight: "600",
                marginTop: "6vh",
                marginLeft: "10%",
              }}
            >
              Your detail booking
            </div>
            <div className={styles.note}>
              <img
                src={require("../../assets/icons/note.png")}
                alt="note"
                style={{ width: "2.3vw", height: "2.3vw", marginLeft: "2vw" }}
              ></img>
              <div style={{ marginLeft: "2vw", fontSize: "2.5vh" }}>
                You must check carefully to avoid the information errors
              </div>
            </div>
            {/* Booking Form */}
            <div className={styles.bookingForm} style={{ alignSelf: "center" }}>
              {/* 1. Customer's Information */}
              <div className={styles.heading1}>1. Customer's Information</div>
              <div className={styles.heading2}>a. Adult</div>
              <div className={styles.infoTag}>
                <CustomerBox name="Adult 1" type="adult" />
                <CustomerBox name="Adult 2" type="adult" />
              </div>
              <div className={styles.heading2}>b. Children</div>
              <div className={styles.infoTag}>
                <CustomerBox name="Children 1" />
                <CustomerBox name="Children 2" />
              </div>
              {/* 2. Travel's Information */}
              <div className="heading1" style={{ marginTop: "6vh" }}>
                2. Travel's Information
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Departure-Destination:</div>
                <div style={{ fontSize: "3vh", marginLeft: "6vw" }}>
                  Sài Gòn - Sapa
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Kinds of transportation:</div>
                <div style={{ fontSize: "3vh", marginLeft: "5.6vw" }}>
                  Plane
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Range of hotel:</div>
                <div style={{ fontSize: "3vh", marginLeft: "11vw" }}>
                  3 stars
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Kinds of tour:</div>
                <div style={{ fontSize: "3vh", marginLeft: "12.1vw" }}>
                  Economy
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Pickup Address:</div>
                <div style={{ fontSize: "3vh", marginLeft: "10.5vw" }}>
                  123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <div className="heading2">Expected departure date:</div>
                <div style={{ fontSize: "3vh", marginLeft: "4.5vw" }}>
                  10/10/2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBookingScreen;
