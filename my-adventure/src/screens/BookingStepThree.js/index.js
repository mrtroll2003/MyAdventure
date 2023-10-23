import React, {useState} from 'react'
import './styles.css'
import 'tailwindcss/tailwind.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomerTextBox from '../../components/CustomerTextBox';
import Header from '../../component/Header';
import MainTabbar from '../../component/MainTabbar/MainTabbar';
import Footer from '../../component/Footer/Footer';

export default function BookingStepThree() {
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
      <Header></Header>
      <MainTabbar option = "Your Booking"/>
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
          <img src={require("../../assets/icons/tick.png")} alt='tick' className='marginleft'/>
          <div className='nameofprogress'>Your information</div>
          <img src={require("../../assets/icons/line.png")} alt='line' className='marginleft'/>
          <img src={require("../../assets/icons/3inprogress.png")} alt='3nextstage' className='marginleft'/>
          <div className='stage3color nameofprogress'>Review booking</div>
        </div>
        {/* <div className="yourSelectionContainer">
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
        </div> */}
        <div className="form">
          <div style={{fontSize: "6vh", fontWeight: 'bold', marginTop: '5vh', color: '#5CD6C0'}}>REVIEW YOUR BOOKING</div>
          <div className = "text">This is the formation that you will receive all e - tickets/ mails/ notifications from this booking. Please check carefully not to miss any notifications from my agency! </div>
          <div className='accountBox'>
            <img src={require("../../assets/icons/account.png")} alt="account" style={{width: '2.5vw', height: '2.5vw', marginLeft: '2vw'}} ></img>
            <div className="signIn">
              <div style={{fontWeight: '600'}}>You signed in as</div>
              <div style={{marginTop: '2vh'}}>21522041@gm.uit.edu.vn</div>
            </div>
          </div>
          <div className="text1" >
            <div style={{color: "#7C8DB0", fontSize: "3vh", marginTop: "2vh",}}>You will be received all e-confirmation mail/ tickets/ vouchers from this booking to contact</div>
            <div style={{fontSize: "5.5vh", fontWeight: "600", marginTop: "6vh"}}>Your Detail Booking</div>
            <div className="note">
              <img src={require("../../assets/icons/note.png")} alt="note" style={{width: "2.3vw", height: "2.3vw", marginLeft: "2vw"}}></img>
              <div style={{marginLeft: "2vw", fontSize: "2.5vh"}}>You must check carefully to avoid the information errors</div>
            </div>
          </div>
          <div className="bookingForm">
            <div className="heading1">1. Customer's Information</div>
            <div className="heading2">a. Adult</div>
            <div className="infoTag">
              <CustomerTextBox name="Adult 1" type="adult" />
              <CustomerTextBox name="Adult 2" type="adult"/>
            </div>
            <div className="heading2">b. Children</div>
            <div className="infoTag">
              <CustomerTextBox name="Children 1"/>
              <CustomerTextBox name="Children 2"/>
            </div>
            <div className="heading1" style={{marginTop: "6vh"}}>2. Travel's Information</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Departure-Destination:</div>
              <div style={{fontSize: "3vh", marginLeft: "6vw"}}>
                Sài Gòn - Sapa
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Kinds of transportation:</div>
              <div style={{fontSize: "3vh", marginLeft: "5.6vw"}}>
                Plane
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Range of hotel:</div>
              <div style={{fontSize: "3vh", marginLeft: "11vw"}}>
                3 stars
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Kinds of tour:</div>
              <div style={{fontSize: "3vh", marginLeft: "12.1vw"}}>
                Economy
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Pickup Address:</div>
              <div style={{fontSize: "3vh", marginLeft: "10.5vw"}}>
                123 Dinh Bo Linh, ward 6, Binh Thanh Dis, HCM City
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "baseline",}}>
              <div className="heading2">Expected departure date:</div>
              <div style={{fontSize: "3vh", marginLeft: "4.5vw"}}>
                10/10/2023
              </div>
            </div> 
          </div>
        </div>

        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: "70vw", fontSize: "3vh", marginTop: "5vh"}}>
          When you press “<span style={{color: "#5CD6C0" , fontWeight: "bold"}}>Submit</span>" button, your <span style={{fontWeight: 'bold'}}>request</span> about your booking will be <span style={{fontWeight: 'bold'}}>sent to my agency</span>. Then, we will <span style={{fontWeight: 'bold'}}>arrange the trip</span> that meet your requirements as much as possible. After we handle this booking, we will <span style={{fontWeight: "bold"}}>send confirmation email to your given account</span>. Please take note that! 
          </div> 
        </div>

        <div>
          <button style={{width: "8vw", height: "8vh", backgroundColor: "#5CD6C0", borderRadius: "5vh", color: "white", fontWeight: "600", marginTop: "5vh", position: "relative", left: "85vw", fontSize: "3vh"}}>Submit</button>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

