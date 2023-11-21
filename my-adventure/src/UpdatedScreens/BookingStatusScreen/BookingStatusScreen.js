import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import CustomerTextBox from "../../components/CustomerTextBox";
import { useNavigate } from "react-router-dom";

const BookingStatusScreen = (props) => {
  const navigate = useNavigate();
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
    departure_date: "15/11/2023",
    return_date: "20/11/2023",
    booking_date: "05/10/2003",
    status_code: 0,
    status: ["Successful", "Waiting for handling", "Confirmed", "Paid"],
  };
  let statusBackgroundColor;
  if (tour.status_code == 0) {
    statusBackgroundColor = "#30E742";
  } else if (tour.status_code == 1) {
    statusBackgroundColor = "#FFED8C";
  } else if (tour.status_code == 2) {
    statusBackgroundColor = "#F5AE45";
  } else if (tour.status_code == 3) {
    statusBackgroundColor = "#F5AE45";
  }

  // method:
  const handleTransportChange = (event) => {};

  const handleHotelChange = (event) => {};

  const handleTourChange = (event) => {};

  const handleAddressChange = (event) => {};

  const setDeparturetDate = (event) => {};
  return (
    <div className={styles.container}>
      <div className={styles.hi}>
        Hi, <span className={styles.mark}>Lê Thị Bích Hằng</span>
      </div>
      <div className={styles.welcome}>
        We are happy that you have chosen our company for your upcoming trips.
        We thank you very much and wish you a rewarding experience at
        MyAdventure!
      </div>
      <div className={styles.welcome} style={{ marginBottom: "5vh" }}>
        Here are all your booking and its status!
      </div>

      <div className={styles.mainContentContainer}>
        <div className={styles.title}>Your Booking #{tour.id}</div>

        <div className={styles.title} style={{ fontSize: "4vh" }}>
          {tour.departure} - {tour.destination}
        </div>

        <div
          className={styles.title}
          style={{
            textTransform: "capitalize",
            fontSize: "3vh",
          }}
        >
          {tour.departure_date} - {tour.return_date}
        </div>

        <div
          className={styles.title}
          style={{
            textTransform: "capitalize",
            fontSize: "3vh",
          }}
        >
          Booking Date: {tour.booking_date}
        </div>

        <div
          className={styles.statusContainer}
          style={{ backgroundColor: statusBackgroundColor }}
        >
          {tour.status[tour.status_code]}
        </div>

        {/* Account Box */}
        <p className={styles.text}>
          We will contact or send notifications to you via this contact:
        </p>
        <motion.div
          className={styles.accountBox}
          // whileTap={{ opacity: 0.75, rotate: "1deg" }}
        >
          <img
            src={require("../../assets/icons/account.png")}
            alt="account"
            style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
          />
          <div className={styles.signIn}>
            <div style={{ fontWeight: "600" }}>Lê Thị Bích Hằng</div>
            <div style={{ marginTop: "2vh" }}>21522041@gm.uit.edu.vn</div>
          </div>
        </motion.div>

        {/* Your Detail Booking */}
        <div
          style={{
            fontSize: "4vh",
            fontWeight: "bold",
            marginTop: "5vh",
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
          {/* 1. Contact information */}
          <div className={styles.heading1}>1. Contact Information</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4vh",
            }}
          >
            <div className={styles.heading2}>Your good name: </div>
            <div style={{ fontSize: "3vh" }}>Lê Thị Bích Hằng</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4vh",
            }}
          >
            <div className={styles.heading2}>Phone Number: </div>
            <div style={{ fontSize: "3vh" }}>0123456789</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4vh",
            }}
          >
            <div className={styles.heading2}>Your Nationality: </div>
            <div style={{ fontSize: "3vh" }}>Việt Nam</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4vh",
            }}
          >
            <div className={styles.heading2}>Your Address: </div>
            <div style={{ fontSize: "3vh" }}>
              123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City
            </div>
          </div>
          {/* 2. Customer's Information */}
          <div className={styles.heading1}>2. Customer's Information</div>
          <div className={styles.heading2}>a. Adult</div>
          <div className={styles.infoTag}>
            <CustomerTextBox name="Adult 1" type="adult" />
            <CustomerTextBox name="Adult 2" type="adult" />
          </div>
          <div className={styles.heading2} style={{ marginTop: "2vh" }}>
            b. Children
          </div>
          <div className={styles.infoTag}>
            <CustomerTextBox name="Children 1" />
            <CustomerTextBox name="Children 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStatusScreen;
