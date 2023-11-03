import React from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from "../../component/Header";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import CustomerBox from "../../components/CustomerBox/CustomerBox";
import JourneyOptionBox from "../../component/JourneyOptionBox/JourneyOptionBox";

import styles from "./styles.module.css";

class ModifyBookingScreen extends React.Component {
  render() {
    let form = {
      transport: "",
      hotel: "",
      tour: "",
      address: "",
      departuretDate: "",
      journeyOptions: ["Sài Gòn - Sapa", "Option 1", "Option 2"],
    };
    let user = {
      name: "Lê Thị Bích Hằng",
      email: "21522041@gm.uit.edu.vn",
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
            {/* Account box */}
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
                <motion.div
                  className={styles.accountBoxContent}
                  style={{ fontWeight: 900 }}
                  whileTap={{ backgroundColor: "#87F4E0" }}
                >
                  {user.name}
                </motion.div>
                <motion.div
                  className={styles.accountBoxContent}
                  whileTap={{ backgroundColor: "#87F4E0" }}
                >
                  {user.email}
                </motion.div>
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
            {/* Booking form */}
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
                <div className="heading2" style={{ marginRight: "10%" }}>
                  Departure-Destination:
                </div>
                <JourneyOptionBox options={form.journeyOptions} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  //   border: "2px solid red",
                }}
              >
                <div className="heading2">Range of hotel:</div>
                <div
                  style={{
                    fontSize: "3vh",
                    marginTop: "2vh",
                    marginLeft: "10.5vw",
                  }}
                >
                  <input
                    type="radio"
                    name="option1"
                    value="3stars"
                    checked={form.hotel === "3stars"}
                    onChange={handleHotelChange}
                  />{" "}
                  3 stars
                  <input
                    type="radio"
                    name="option1"
                    value="4stars"
                    checked={form.hotel === "4stars"}
                    onChange={handleHotelChange}
                    style={{ marginLeft: "5vw" }}
                  />{" "}
                  4 stars
                  <input
                    type="radio"
                    name="option1"
                    value="5stars"
                    checked={form.hotel === "5stars"}
                    onChange={handleHotelChange}
                    style={{ marginLeft: "5vw" }}
                  />{" "}
                  5 stars
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="heading2">Kinds of transportation :</div>
                <div
                  style={{
                    fontSize: "3vh",
                    marginTop: "2vh",
                    marginLeft: "5vw",
                  }}
                >
                  <input
                    type="radio"
                    name="option"
                    value="Plane"
                    checked={form.transport === "Plane"}
                    onChange={handleTransportChange}
                  />{" "}
                  Plane
                  <input
                    type="radio"
                    name="option"
                    value="Coach"
                    checked={form.transport === "Coach"}
                    onChange={handleTransportChange}
                    style={{ marginLeft: "5vw" }}
                  />{" "}
                  Coach
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="heading2">
                  Kinds of Tour<span style={{ color: "red" }}>*</span>:
                </div>
                <div
                  style={{
                    fontSize: "3vh",
                    marginTop: "2vh",
                    marginLeft: "11.5vw",
                  }}
                >
                  <input
                    type="radio"
                    name="option2"
                    value="VIP"
                    checked={tour === "VIP"}
                    onChange={handleTourChange}
                  />{" "}
                  VIP
                  <input
                    type="radio"
                    name="option2"
                    value="Economy"
                    checked={tour === "Economy"}
                    onChange={handleTourChange}
                    style={{ marginLeft: "5vw" }}
                  />{" "}
                  Economy
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "5vh",
                }}
              >
                <div className="heading2" style={{ marginTop: "0" }}>
                  Pickup Address<span style={{ color: "red" }}>*</span>:
                </div>
                <input
                  value={form.address}
                  onChange={handleAddressChange}
                  type="text"
                  style={{
                    width: "40vw",
                    height: "6vh",
                    borderRadius: "10vh",
                    fontSize: "3vh",
                    paddingLeft: "2vw",
                    marginLeft: "10vw",
                    border: "0.2vh solid black",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "5vh",
                  paddingBottom: "3vh",
                }}
              >
                <div className="heading2" style={{ marginTop: "0" }}>
                  Expected Departure Date<span style={{ color: "red" }}>*</span>
                  :
                </div>
                <div style={{ marginLeft: "3.8vw" }}>
                  <DatePicker
                    popupStyle={{ zIndex: 9999, position: "fixed" }}
                    selected={form.departuretDate}
                    onChange={(date) => setDeparturetDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    className="datePicker"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModifyBookingScreen;
