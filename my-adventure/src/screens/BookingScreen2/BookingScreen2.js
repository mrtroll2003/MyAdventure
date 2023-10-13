import React, {useState} from 'react'
import './BookingScreen2.css'
import 'tailwindcss/tailwind.css';
import CustomerBox from '../../components/CustomerBox/CustomerBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingScreen2() {
  const [transport, setTranspott] = useState("");
  const [hotel, setHotel] = useState("");
  const [tour, setTour] = useState("");
  const [address, setAddress] = useState("");
  const [departuretDate, setDeparturetDate] = useState("");

  const handleTransportChange  = (event) => {
    setTranspott(event.target.value)
  }

  const handleHotelChange  = (event) => {
    setHotel(event.target.value)
  }

  const handleTourChange  = (event) => {
    setTour(event.target.value)
  }

  const handleAddressChange  = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div>
      <div>Tab Bar</div>
      <div className='content'>
        <div className='title'>
          <h2 className='welcome'><mark className='highlight'>Welcome To Our</mark></h2>
          <h2 className='myadventure'><mark className='highlight'>My Adventure</mark></h2>
          <h2 className='booking'><mark className='highlight'>Booking your favorite tour to discover amazing places!</mark></h2>
        </div>
        <div className='bookingprogress'>
          <img src={require("../../assets/icons/tick.png")} alt='tick'/>
          <div className='nameofprogress'>Your selection</div>
          <img src={require("../../assets/icons/line.png")} alt='line' className='marginleft' />
          <img src={require("../../assets/icons/2inprogress.png")} alt='2inprogress' className='marginleft'/>
          <div className='nameofprogress'>Your information</div>
          <img src={require("../../assets/icons/line.png")} alt='line' className='marginleft'/>
          <img src={require("../../assets/icons/3nextstage.png")} alt='3nextstage' className='marginleft'/>
          <div className='stage3color nameofprogress'>Review booking</div>
        </div>
        <div className="yourSelectionContainer">
          <div className="yourSelection">
            <div>
              <div className="yourSelectionText">YOUR SELECTION</div>
              <div className="yourSelectionTable">
                <div className="columnDirection">
                  <div className='infoContainer'>
                    <img src={require("../../assets/icons/fly.png")} alt='tick'/>
                    <div className="infoText">Time can start:</div>
                  </div>
                  <div className='infoContainer'>
                    <img src={require("../../assets/icons/address.png")} alt='address'/>
                    <div className="infoText">Departure and Destination:</div>
                  </div>
                  <div className='infoContainer'>
                    <img src={require("../../assets/icons/adult.png")} alt='adult'/>
                    <div className="infoText">Number of adults:</div>
                  </div>
                  <div className='infoContainer'>
                    <img src={require("../../assets/icons/child.png")} alt='child'/>
                    <div className="infoText">Number of children:</div>
                  </div>
                </div>
                <div className='columnDirection'>
                  <div className='infoContainer infoText1'>30/09/2023 - 15/10/2023</div>
                  <div className='infoContainer infoText1'>Sài Gòn - Sapa</div>
                  <div className='infoContainer infoText1'>2 persons</div>
                  <div className='infoContainer infoText1'>2 persons</div>
                </div>
              </div>
            </div>
            <img style={{marginLeft: "10vw"}} src={require("../../assets/images/world.png")} alt='world'/>
          </div>
        </div>
        <div className="form">
          <div style={{fontSize: "6vh", fontWeight: 'bold', marginTop: '5vh', color: '#5CD6C0'}}>FILL IN INFORMATION</div>
          <div className='accountBox'>
            <img src={require("../../assets/icons/account.png")} alt="account" style={{width: '2.5vw', height: '2.5vw', marginLeft: '2vw'}} ></img>
            <div className="signIn">
              <div style={{fontWeight: '600'}}>You signed in as</div>
              <div style={{marginTop: '2vh'}}>21522041@gm.uit.edu.vn</div>
            </div>
          </div>
          <div className="text1" >
            <div style={{color: "#7C8DB0", fontSize: "3vh", marginTop: "2vh",}}>You will be received all e-confirmation mail/ tickets/ vouchers from this booking to contact</div>
            <div style={{fontSize: "5.5vh", fontWeight: "600", marginTop: "6vh"}}>Enter Your Details</div>
            <div className="note">
              <img src={require("../../assets/icons/note.png")} alt="note" style={{width: "2.3vw", height: "2.3vw", marginLeft: "2vw"}}></img>
              <div style={{marginLeft: "2vw", fontSize: "2.5vh"}}>Almost done! Just fill in the * required info</div>
            </div>
          </div>
          <div className="bookingForm">
            <div className="heading1">1. Customer's Information</div>
            <div className="heading2">a. Adult</div>
            <div className="infoTag">
              <CustomerBox name="Adult 1" type="adult" />
              <CustomerBox name="Adult 2" type="adult"/>
            </div>
            <div className="heading2">b. Children</div>
            <div className="infoTag">
              <CustomerBox name="Children 1"/>
              <CustomerBox name="Children 2"/>
            </div>
            <div className="heading1" style={{marginTop: "6vh"}}>2. Travel's Information</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center",}}>
              <div className="heading2">Kinds of transportation<span style={{color: "red"}}>*</span>:</div>
              <div style={{fontSize: "3vh", marginTop: "2vh", marginLeft: "5vw"}}>
                <input type="radio" name="option" value="Plane" checked={transport === "Plane"} onChange={handleTransportChange} /> Plane
                <input type="radio" name="option" value="Coach" checked={transport === "Coach"} onChange={handleTransportChange} style={{marginLeft: "5vw"}}/> Coach
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center",}}>
              <div className="heading2">Range of hotel<span style={{color: "red"}}>*</span>:</div>
              <div style={{fontSize: "3vh", marginTop: "2vh", marginLeft: "10.5vw"}}>
                <input type="radio" name="option1" value="3stars" checked={hotel === "3stars"} onChange={handleHotelChange} /> 3 stars
                <input type="radio" name="option1" value="4stars" checked={hotel === "4stars"} onChange={handleHotelChange} style={{marginLeft: "5vw"}}/> 4 stars
                <input type="radio" name="option1" value="5stars" checked={hotel === "5stars"} onChange={handleHotelChange} style={{marginLeft: "5vw"}}/> 5 stars
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center",}}>
              <div className="heading2">Kinds of Tour<span style={{color: "red"}}>*</span>:</div>
              <div style={{fontSize: "3vh", marginTop: "2vh", marginLeft: "11.5vw"}}>
                <input type="radio" name="option2" value="VIP" checked={tour === "VIP"} onChange={handleTourChange} /> VIP
                <input type="radio" name="option2" value="Economy" checked={tour === "Economy"} onChange={handleTourChange} style={{marginLeft: "5vw"}}/> Economy
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "5vh"}}>
              <div className="heading2" style={{marginTop: "0"}}>Pickup Address<span style={{color: "red"}}>*</span>:</div>
              <input
                value ={address}
                onChange={handleAddressChange}
                type='text'
                style={{width: "40vw", height: "6vh", borderRadius: "10vh", fontSize:"3vh", paddingLeft: "2vw", marginLeft: "10vw", border: "0.2vh solid black"}}
              />
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "5vh", paddingBottom: "3vh"}}>
              <div className="heading2" style={{marginTop: "0"}}>Expected Departure Date<span style={{color: "red"}}>*</span>:</div>
              <div style={{marginLeft: "3.8vw" }}>
                <DatePicker popupStyle={{ zIndex: 9999, position: 'fixed' }}  selected={departuretDate} onChange={(date) => setDeparturetDate(date)} dateFormat={"dd/MM/yyyy"}  className="datePicker" />
              </div>
            </div>  
          </div>
        </div>

        <div>
          <button style={{width: "8vw", height: "8vh", backgroundColor: "#5CD6C0", borderRadius: "5vh", color: "white", fontWeight: "600", marginTop: "5vh", position: "relative", left: "85vw", fontSize: "3vh"}}>Next Step</button>
        </div>
      </div>
    </div>
  )
}

