import React, { useState } from "react";
import styles from "./styles.module.css";
import "tailwindcss/tailwind.css";
import "react-datepicker/dist/react-datepicker.css";
import CustomerTextBox from "../../components/CustomerTextBox";
import Footer from "../../component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BookingStepThree() {
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
          <div className={styles.nameofprogress}>Your selection</div>
          <img
            src={require("../../assets/icons/line.png")}
            alt="line"
            className={styles.marginleft}
          />
          <img
            src={require("../../assets/icons/tick.png")}
            alt="tick"
            className={styles.marginleft}
          />
          <div className={styles.nameofprogress}>Your information</div>
          <img
            src={require("../../assets/icons/line.png")}
            alt="line"
            className={styles.marginleft}
          />
          <img
            src={require("../../assets/icons/3inprogress.png")}
            alt="3nextstage"
            className={styles.marginleft}
          />
          <div className={`${styles.stage3color} ${styles.nameofprogress}`}>
            Review booking
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
            REVIEW YOUR BOOKING
          </div>
          <div className={styles.text}>
            This is the formation that you will receive all e - tickets/ mails/
            notifications from this booking. Please check carefully not to miss
            any notifications from my agency!{" "}
          </div>
          <div className={styles.accountBox}>
            <img
              src={require("../../assets/icons/account.png")}
              alt="account"
              style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
            ></img>
            <div className={styles.signIn}>
              <div style={{ fontWeight: "600" }}>You signed in as</div>
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
              Your Detail Booking
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
          </div>
          <div className={styles.bookingForm}>
            <div className={styles.heading1}>1. Customer's Information</div>
            <div className={styles.heading2} style={{ marginTop: "2vh" }}>
              a. Adult
            </div>
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
            <div className={styles.heading1} style={{ marginTop: "6vh" }}>
              2. Travel's Information
            </div>
            <div
              style={{
                height: "50%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "5vh",
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
                <div className={styles.heading2}>Departure-Destination:</div>
                <div style={{ fontSize: "3vh" }}>Sài Gòn - Sapa</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>Kinds of transportation:</div>
                <div style={{ fontSize: "3vh" }}>Plane</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>Range of hotel:</div>
                <div style={{ fontSize: "3vh" }}>3 stars</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>Kinds of tour:</div>
                <div style={{ fontSize: "3vh" }}>Economy</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>Pickup Address:</div>
                <div style={{ fontSize: "3vh" }}>
                  123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City
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
                <div className={styles.heading2}>Expected departure date:</div>
                <div style={{ fontSize: "3vh" }}>10/10/2023</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4vh",
                }}
              >
                <div className={styles.heading2}>Expected duration:</div>
                <div style={{ fontSize: "3vh" }}>5 days</div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "70vw", fontSize: "3vh", marginTop: "5vh" }}>
            When you press “
            <span style={{ color: "#5CD6C0", fontWeight: "bold" }}>Submit</span>
            " button, your <span style={{ fontWeight: "bold" }}>request</span>{" "}
            about your booking will be{" "}
            <span style={{ fontWeight: "bold" }}>sent to my agency</span>. Then,
            we will <span style={{ fontWeight: "bold" }}>arrange the trip</span>{" "}
            that meet your requirements as much as possible. After we handle
            this booking, we will{" "}
            <span style={{ fontWeight: "bold" }}>
              send confirmation email to your given account
            </span>
            . Please take note that!
          </div>
        </div>

        <div>
          <motion.button
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
            whileTap={{ scale: 0.8 }}
            onClick={() => navigate("/successful-booking")}
          >
            Submit
          </motion.button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
