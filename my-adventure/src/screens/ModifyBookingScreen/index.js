import React, {useState} from "react";
import styles from  "./styles.module.css"
import {motion} from "framer-motion"
import CustomerBox from "../../components/CustomerBox";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";


const ModifyBookingScreen = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] =useState("Lê Thị Bích Hằng");
  const [email, setEmail] =useState("21522041@gm.uit.edu.vn");
  const [destination, setDestination] =useState("Sài Gòn - Sapa");
  const [transportation, setTransportation] =useState("Plane");
  const [hotel, setHotel] =useState("3stars");
  const [tourType, setTourType] =useState("Economy");
  const [address, setAddress] =useState("123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City");
  const [date, setDate] = useState(new Date("10/10/2023"))
  const [duration, setDuration] = useState("5 days")


  let data = {
    sex: "Female",
    fullName: "Lê Thị Bích Hằng",
    startDate: "01/01/2003",
    citizenID: "123456789",
    phone: "0123456789",
    email: "21522041@gm.uit.edu.vn",
  }

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
  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };


  const handleHotelChange = (event) => {
    setHotel(event.target.value);
  };

  const handleTourTypeChange = (event) => {
    setTourType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }; 

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  }; 
    return (
      <div className={styles.container}>
        <div className={styles.hi}>Hi, <span className={styles.mark}>Lê Thị Bích Hằng</span></div>
        <div className={styles.welcome}>We are happy that you have chosen our company for your upcoming trips. We thank you very much and wish you a rewarding experience at MyAdventure!</div>
        <div className={styles.welcome} style={{marginBottom: "5vh"}}>Here are all your booking and its status!</div>

        <div className={styles.mainContentContainer}>
          <div className={styles.title}>Your Booking #{tour.id}</div>

          <div
            className={styles.title}
            style={{ fontSize: "4vh"}}
          >
            {tour.departure} - {tour.destination}
          </div>

          <div
              className={styles.title}
              style={{
                textTransform: "capitalize",
                fontSize: "3vh",
              }}
            >
              Booking Date: {tour.date}
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
                <input
                  value ={fullName}
                  onChange={handleNameChange}
                  type='text'
                  className={styles.inputBox}
                  style={{fontWeight: "500", fontSize: "2.5vh"}}
                />
                <input
                  value ={email}
                  onChange={handleEmailChange}
                  type='text'
                  className={styles.inputBox}
                  style={{marginTop: "2vh", fontSize: "2.5vh"}}
                />
                
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
            <div style={{ marginLeft: "2vw", fontSize: "2.5vh", }}>
              You must check carefully to avoid the information errors
            </div>
          </div>

          {/* Booking Form */}
          <div className={styles.bookingForm} style={{ alignSelf: "center" }}>
            {/* 1. Customer's Information */}
            <div className={styles.heading1}>1. Customer's Information</div>
            <div className={styles.heading2}>a. Adult</div>
            <div className={styles.infoTag}>
              <CustomerBox name="Adult 1" type="adult" data={data} />
              <CustomerBox name="Adult 2" type="adult" data={data} />
            </div>
            <div className={styles.heading2} style={{marginTop: "2vh"}}>b. Children</div>
            <div className={styles.infoTag}>
              <CustomerBox name="Children 1" data={data}/>
              <CustomerBox name="Children 2" data={data}/>
            </div>
          </div>
          
          <div className={styles.heading1} style={{marginTop: "6vh"}}>2. Travel's Information</div>
          <div style={{height: "50%", display: 'flex', flexDirection: 'column', paddingBottom: "5vh"}}>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "4vh"}}>
            <div className={styles.heading2}>Departure-Destination:</div>
            <motion.select id="depart" name="depart" className={styles.inputBox} value={destination}>
              <motion.option value="" disabled selected>Choose your tour</motion.option>
              <motion.option value="Sài Gòn - Sapa">Sài Gòn - Sapa</motion.option>
            </motion.select>
          </div>

          <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
            <div className={styles.heading2}>Kinds of transportation:</div>
            <div style={{fontSize: "3vh"}}>
                <input type="radio" name="option1" value="Plane" checked={transportation === "Plane"} onChange={handleTransportationChange} /> Plane
                <input type="radio" name="option1" value="Coach" checked={transportation === "Coach"} onChange={handleTransportationChange} style={{marginLeft: "5vw"}}/> Coach
              </div>
          </div>

      <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
        <div className={styles.heading2}>Range of hotel:</div>
        <div style={{fontSize: "3vh"}}>
                <input type="radio" name="option2" value="3stars" checked={hotel === "3stars"} onChange={handleHotelChange} /> 3 stars
                <input type="radio" name="option2" value="4stars" checked={hotel === "4stars"} onChange={handleHotelChange} style={{marginLeft: "5vw"}}/> 4 stars
                <input type="radio" name="option2" value="5stars" checked={hotel === "5stars"} onChange={handleHotelChange} style={{marginLeft: "5vw"}}/> 5 stars
              </div>
      </div>

      <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
        <div className={styles.heading2}>Kinds of tour:</div>
        <div style={{fontSize: "3vh",}}>
                <input type="radio" name="option3" value="VIP" checked={tourType === "VIP"} onChange={handleTourTypeChange} /> VIP
                <input type="radio" name="option3" value="Economy" checked={tourType === "Economy"} onChange={handleTourTypeChange} style={{marginLeft: "5vw"}}/> Economy
              </div>
      </div>

      <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
        <div className={styles.heading2}>Pickup Address:</div>
        <textarea
                value={address}
                onChange={handleAddressChange}
                type='text'
                className={styles.inputBox}
                style={{width: "40vw", borderRadius: "1vw"}}
                rows={4}
              />
      </div>

      <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
        <div className={styles.heading2}>Expected departure date:</div>
        <DatePicker popupStyle={{ zIndex: 9999, position: 'fixed' }}  selected={date} onChange={(date) => setDate(date)} dateFormat={"dd/MM/yyyy"}  className={styles.inputBox} />
      </div> 

      <div style={{display: "flex", flexDirection: "row",  alignItems: "center", marginTop: "4vh"}}>
        <div className={styles.heading2}>Expected duration:</div>
        <input
                value={duration}
                onChange={handleDurationChange}
                type='text'
                className={styles.inputBox}
              />
      </div>
      </div>
        </div>

        <motion.button className={styles.buttonContainer} whileTap={{scale: 0.8}} onClick={() => navigate ('/detail-booking')}>
          <div className={styles.button}>Save</div>
        </motion.button>

    </div>
  );
};

export default ModifyBookingScreen;
