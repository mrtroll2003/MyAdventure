import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import CustomerBox from "../../components/CustomerBox";

import GlobeIMG from "../../assets/images/globe.png";

const MakeBookingScreen = () => {
  let timeStart = "30/09/2023 - 15/10/2023";
  let destination = "Sài Gòn";
  let departure = "Sapa";

  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };
  return (
    <div>
      <div className={styles.title}>BOOKING TOUR</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          height: "40vh",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className={styles.timeAndPlaceContainer}>
          <div className={styles.timeContainer}>
            Time Start:
            <span
              style={{
                fontWeight: "normal",
                fontSize: "20px",
                paddingLeft: "25%",
              }}
            >
              {timeStart}
            </span>
          </div>

          <div className={styles.spaceContainer}>
            Departure and Destination:
            <span
              style={{
                fontWeight: "normal",
                fontSize: "20px",
                paddingLeft: "3%",
              }}
            >
              {destination + " - " + departure}
            </span>
          </div>
        </div>
        <img src={GlobeIMG} alt="globe.png" className={styles.globe}></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.accountBox}>
          <img
            src={require("../../assets/icons/account.png")}
            alt="account"
            style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
          />
          <div className={styles.signIn}>
            <div className={styles.text1} style={{ fontWeight: "bold" }}>
              You're signed in as
            </div>
            <div style={{ marginTop: "2vh" }}>21522041@gm.uit.edu.vn</div>
          </div>
        </div>
        <div className={styles.text1}>
          <div style={{ color: "#7C8DB0", fontSize: "3vh", marginTop: "2vh" }}>
            You will be received all e-confirmation mail/ tickets/ vouchers from
            this booking to contact
          </div>
          <div
            style={{ fontSize: "5.5vh", fontWeight: "600", marginTop: "6vh" }}
          >
            Enter Your Details
          </div>
          <div className={styles.note}>
            <img
              src={require("../../assets/icons/note.png")}
              alt="note"
              style={{ width: "2.3vw", height: "2.3vw", marginLeft: "2vw" }}
            ></img>
            <div style={{ marginLeft: "2vw", fontSize: "2.5vh" }}>
              Almost done! Just fill in the
              <span className={styles.redStar}> * </span>
              required info
            </div>
          </div>
        </div>
        <div className={styles.bookingForm}>
          <div className={styles.heading1}>1. Contact Information</div>
          <div className={styles.horizontalInfo}>
            <div className={styles.verticalInfoTitle}>
              <p className={styles.verticalInfoStyling}>Your good name: </p>
              <p className={styles.verticalInfoStyling}>Phone Number: </p>
              <p className={styles.verticalInfoStyling}>Your Nationality: </p>
              <p className={styles.verticalInfoStyling}>Your Address: </p>
            </div>
            <div className={styles.verticalInfoInput}>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                style={{
                  width: "40vw",
                  height: "6vh",
                  borderRadius: "5px",
                  fontSize: "3vh",
                  paddingLeft: "2vw",
                  border: "0.2vh solid black",
                  marginTop: "1vh",
                }}
              />
              <input
                value={address}
                onChange={handlePhoneNumberChange}
                type="text"
                style={{
                  width: "40vw",
                  height: "6vh",
                  borderRadius: "5px",
                  fontSize: "3vh",
                  paddingLeft: "2vw",
                  border: "0.2vh solid black",
                  marginTop: "1vh",
                }}
              />
              <input
                value={nationality}
                onChange={handleNationalityChange}
                type="text"
                style={{
                  width: "40vw",
                  height: "6vh",
                  borderRadius: "5px",
                  fontSize: "3vh",
                  paddingLeft: "2vw",
                  border: "0.2vh solid black",
                  marginTop: "1vh",
                }}
              />
              <input
                value={address}
                onChange={handleAddressChange}
                type="text"
                style={{
                  width: "40vw",
                  height: "6vh",
                  borderRadius: "5px",
                  fontSize: "3vh",
                  paddingLeft: "2vw",
                  border: "0.2vh solid black",
                  marginTop: "1vh",
                }}
              />
            </div>
          </div>
          <div className={styles.heading1} style={{ marginTop: "6vh" }}>
            2. Customer Information
          </div>
          <CustomerBox type={"adult"}></CustomerBox>
        </div>
      </div>
    </div>
  );
};

export default MakeBookingScreen;
