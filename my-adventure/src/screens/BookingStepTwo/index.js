import React, { useState } from "react";
import styles from "./styles.module.css";
import "tailwindcss/tailwind.css";
import CustomerBox from "../../components/CustomerBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../component/Header";
import Tabbar from "../../component/Tabbar/Tabbar";
import Footer from "../../component/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function BookingStepTwo() {
  const navigate = useNavigate();
  const [transport, setTranspott] = useState("");
  const [hotel, setHotel] = useState("");
  const [tour, setTour] = useState("");
  const [address, setAddress] = useState("");
  const [departuretDate, setDeparturetDate] = useState("");

  const handleTransportChange = (event) => {
    setTranspott(event.target.value);
  };

  const handleHotelChange = (event) => {
    setHotel(event.target.value);
  };

  const handleTourChange = (event) => {
    setTour(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}>
            <mark className={styles.highlight}>Welcome To Our</mark>
          </h2>
          <h2 className={styles.myadventure}>
            <mark className={styles.highlight}>My Adventure</mark>
          </h2>
          <h2 className={styles.booking}>
            <mark className={styles.highlight}>
              Booking your favorite tour to discover amazing places!
            </mark>
          </h2>
        </div>
        <div className={styles.bookingprogress}>
          <img src={require("../../assets/icons/tick.png")} alt="tick" />
          <div className="nameofprogress">Your selection</div>
          <img
            src={require("../../assets/icons/line.png")}
            alt="line"
            className={styles.marginleft}
          />
          <img
            src={require("../../assets/icons/2inprogress.png")}
            alt="2inprogress"
            className={styles.marginleft}
          />
          <div className={styles.nameofprogress}>Your information</div>
          <img
            src={require("../../assets/icons/line.png")}
            alt="line"
            className={styles.marginleft}
          />
          <img
            src={require("../../assets/icons/3nextstage.png")}
            alt="3nextstage"
            className={styles.marginleft}
          />
          <div className={`${styles.stage3color} ${styles.nameofprogress}`}>
            Review booking
          </div>
        </div>
        <div className={styles.yourSelectionContainer}>
          <div className={styles.yourSelection}>
            <div>
              <div className={styles.yourSelectionText}>YOUR SELECTION</div>
              <div className={styles.yourSelectionTable}>
                <div className={styles.columnDirection}>
                  <div className={styles.infoContainer}>
                    <img
                      src={require("../../assets/icons/fly.png")}
                      alt="tick"
                    />
                    <div className={styles.infoText}>Time can start:</div>
                  </div>
                  <div className={styles.infoContainer}>
                    <img
                      src={require("../../assets/icons/address.png")}
                      alt="address"
                    />
                    <div className={styles.infoText}>
                      Departure and Destination:
                    </div>
                  </div>
                  <div className={styles.infoContainer}>
                    <img
                      src={require("../../assets/icons/adult.png")}
                      alt="adult"
                    />
                    <div className={styles.infoText}>Number of adults:</div>
                  </div>
                  <div className={styles.infoContainer}>
                    <img
                      src={require("../../assets/icons/child.png")}
                      alt="child"
                    />
                    <div className={styles.infoText}>Number of children:</div>
                  </div>
                </div>
                <div className={styles.columnDirection}>
                  <div
                    className={`${styles.infoContainer} ${styles.infoText1}`}
                  >
                    30/09/2023 - 15/10/2023
                  </div>
                  <div
                    className={`${styles.infoContainer} ${styles.infoText1}`}
                  >
                    Sài Gòn - Sapa
                  </div>
                  <div
                    className={`${styles.infoContainer} ${styles.infoText1}`}
                  >
                    2 persons
                  </div>
                  <div
                    className={`${styles.infoContainer} ${styles.infoText1}`}
                  >
                    2 persons
                  </div>
                </div>
              </div>
            </div>
            <img
              style={{ marginLeft: "10vw" }}
              src={require("../../assets/images/world.png")}
              alt="world"
            />
          </div>
        </div>
        <div className={styles.form}>
          <div
            style={{
              fontSize: "6vh",
              fontWeight: "bold",
              marginTop: "5vh",
              color: "#5CD6C0",
            }}
          >
            FILL IN INFORMATION
          </div>
          <div className={styles.accountBox}>
            <img
              src={require("../../assets/icons/account.png")}
              alt="account"
              style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
            ></img>
            <div className={styles.signIn}>
              <div className={styles.text1}>You signed in as</div>
              <div style={{ marginTop: "2vh" }}>21522041@gm.uit.edu.vn</div>
            </div>
          </div>
          <div className={styles.text1}>
            <div
              style={{ color: "#7C8DB0", fontSize: "3vh", marginTop: "2vh" }}
            >
              You will be received all e-confirmation mail/ tickets/ vouchers
              from this booking to contact
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
                Almost done! Just fill in the * required info
              </div>
            </div>
          </div>
          <div className={styles.bookingForm}>
            <div className={styles.heading1}>1. Customer's Information</div>
            <div className={styles.heading2} style={{ marginTop: "2vh" }}>
              a. Adult
            </div>
            <div className={styles.infoTag}>
              <CustomerBox name="Adult 1" type="adult" />
              <CustomerBox name="Adult 2" type="adult" />
            </div>
            <div className={styles.heading2} style={{ marginTop: "2vh" }}>
              b. Children
            </div>
            <div className={styles.infoTag}>
              <CustomerBox name="Children 1" />
              <CustomerBox name="Children 2" />
            </div>
            <div className={styles.heading1} style={{ marginTop: "6vh" }}>
              2. Travel's Information
            </div>
            <div
              style={{
                height: "50%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>
                  Kinds of transportation<span style={{ color: "red" }}>*</span>
                  :
                </div>
                <div style={{ fontSize: "3vh" }}>
                  <input
                    type="radio"
                    name="option"
                    value="Plane"
                    checked={transport === "Plane"}
                    onChange={handleTransportChange}
                  />{" "}
                  Plane
                  <input
                    type="radio"
                    name="option"
                    value="Coach"
                    checked={transport === "Coach"}
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
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>
                  Range of hotel<span style={{ color: "red" }}>*</span>:
                </div>
                <div style={{ fontSize: "3vh" }}>
                  <input
                    type="radio"
                    name="option1"
                    value="3stars"
                    checked={hotel === "3stars"}
                    onChange={handleHotelChange}
                  />{" "}
                  3 stars
                  <input
                    type="radio"
                    name="option1"
                    value="4stars"
                    checked={hotel === "4stars"}
                    onChange={handleHotelChange}
                    style={{ marginLeft: "5vw" }}
                  />{" "}
                  4 stars
                  <input
                    type="radio"
                    name="option1"
                    value="5stars"
                    checked={hotel === "5stars"}
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
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>
                  Kinds of Tour<span style={{ color: "red" }}>*</span>:
                </div>
                <div style={{ fontSize: "3vh" }}>
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
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2} style={{ marginTop: "0" }}>
                  Pickup Address<span style={{ color: "red" }}>*</span>:
                </div>
                <input
                  value={address}
                  onChange={handleAddressChange}
                  type="text"
                  style={{
                    width: "40vw",
                    height: "6vh",
                    borderRadius: "10vh",
                    fontSize: "3vh",
                    paddingLeft: "2vw",
                    border: "0.2vh solid black",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                  paddingBottom: "3vh",
                }}
              >
                <div className={styles.heading2} style={{ marginTop: "0" }}>
                  Expected Departure Date<span style={{ color: "red" }}>*</span>
                  :
                </div>
                <div>
                  <DatePicker
                    popupStyle={{ zIndex: 9999, position: "fixed" }}
                    selected={departuretDate}
                    onChange={(date) => setDeparturetDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                    className={styles.datePicker}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            style={{
              width: "8vw",
              height: "8vh",
              backgroundColor: "#5CD6C0",
              borderRadius: "5vh",
              color: "white",
              fontWeight: "600",
              marginTop: "5vh",
              position: "relative",
              left: "85vw",
              fontSize: "3vh",
            }}
            onClick={() => navigate("/booking-step-three")}
          >
            Next Step
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
