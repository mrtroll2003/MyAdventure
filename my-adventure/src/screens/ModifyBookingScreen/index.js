import React, { useDebugValue, useEffect, useState } from "react";
import styles from "./styles.module.css";
// import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import BirthCert from "../../assets/images/birthcert.png";

import CustomerTextBox from "../../components/CustomerTextBox";
import { useLocation, useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { formatDate } from "../../constant/formatDate";
import CustomerBoxModify from "../../components/CustomerBoxModify";

const ModifyBookingScreen = (props) => {
  const navigate = useNavigate();
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const bookingID = searchParams.get('id');
  console.log(bookingID);

  const [booking, setBooking] = useState()
  const [tour, setTour] = useState()
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState(true)
  const [adultList, setAdultList] = useState([])
  const [childList, setChildList] = useState([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [nationality, setNationality] = useState("")
  const [note, setNote] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };



  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/booking/id?id=${bookingID}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setBooking(result)
        setLoading(false)
        if (result && result.email) {
          setEmail(result.email);
          setName(result.name)
          setPhone(result.phone)
          setAddress(result.address)
          setNationality(result.nationality)
          setNote(result.note)
        }
      })
        
      .catch(error => console.log('error', error));
  }, [bookingID])


  useEffect(() => {
    const fetchAdultLists = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

          const response = await fetch(`http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`, requestOptions);
          const result = await response.json();

        setAdultList(result);
        console.log('Adult Lists:', adultList);
      } catch (error) {
        console.log('Error:', error);
        setAdultList([]);
      }
    };

    const fetchChildrenLists = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };


          const response = await fetch(`http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`, requestOptions);
          const result = await response.json();

        setChildList(result);
        console.log('Children Lists:', adultList);
      } catch (error) {
        console.log('Error:', error);
        setChildList([]);
      }
    };


    const fetchTourList = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3001/tour/place?id=${booking.tourID}`, requestOptions)
        const result = await response.json();
        setTour(result);
        setLoading1(false)
        console.log('Tour:', tour);
      } catch (error) {
        console.log('Error:', error);
        setTour();
      }
    };
      fetchAdultLists();
      fetchChildrenLists();
      fetchTourList();
  }, [booking]);

  const SaveBooking = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/booking/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

        const status = await response.status;
        return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const SaveAdult = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/adult/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

        const status = await response.status;
        return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const SaveChildren = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/children/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

        const status = await response.status;
        return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  

  const handleSaveClick = async (e) => {
    e.preventDefault();

    if(name === "" || phone === "" || address === ""|| nationality === "" )
    {
      setMessage("Please fill in all information")
      setShowMessage(true);
      return;
    }

    
    
    const data = {
      bookingID: booking._id,
      email: email,
      name: name,
      phone: phone,
      nationality: nationality,
      address: address,
      note: note,
    };
  
    setIsLoading(true);
  
    try {
      const response = await SaveBooking(data);
      for(var adultIndex in adultList) {
        var adult = adultList[adultIndex]; 
        console.log("adultList", adultList);
        console.log("adultTest", adult);
        const response1 = await SaveAdult(adult)
        console.log(response1)
        if (response1 === 200) {
          console.log("Add Successfully" + adult)
        } else if (response === 401) {
          setMessage("Not found booking information")
          setShowMessage(true);
        }
      }

        for(var childIndex in childList) {
          var child = childList[childIndex]; 
          console.log("childList", childList);
          console.log("childTest", child);
          const response2 = await SaveChildren(child)
          console.log(response2)
          if (response2 === 200) {
            console.log("Add Successfully" + child)
          } else if (response === 401) {
            setMessage("Not found booking information")
            setShowMessage(true);
          }
        }

      console.log(response)
      setIsLoading(false);
  
      if (response === 200 ) {
        const url = `/booking-status?bookingID=${encodeURIComponent(booking._id)}`;
        navigate(url);
      } else if (response === 401) {
        setMessage("Not found booking information")
        setShowMessage(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }


  const setBg =  (status) => {
    var backgroundColor = "#FFED8C"
    if (status === "Successful") {
      backgroundColor = "#30E742"
    } else if (status === "Waiting For Handling") {
      backgroundColor = "#FFED8C"
    } else if (status === "Confirmed") {
      backgroundColor = "#F5AE45"
    } else if (status === "Paid") {
      backgroundColor = "#2CF594"
    }
    return backgroundColor;
  }

  const handleAdultDataChange = (index, data) => {
    const updatedAdultList = [...adultList];
    updatedAdultList[index] = { ...updatedAdultList[index], ...data };
    setAdultList(updatedAdultList);
    console.log("UpdatedAdultList", adultList);
  };


  const handleChildrenDataChange = (index, data) => {
    const updatedChildList = [...childList];
    updatedChildList[index] = { ...updatedChildList[index], ...data };
    setChildList(updatedChildList);
  };
 

  if(loading === true || loading1 === true) {
    return  <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.hi}>
        Hi our beloved customers, <span className={styles.mark}></span>
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
        <div className={styles.title}>Your Booking Details</div>

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
          {formatDate(tour.departureDate)} - {formatDate(tour.returnDate)}
        </div>

        <div
          className={styles.title}
          style={{
            textTransform: "capitalize",
            fontSize: "3vh",
          }}
        >
          Booking Date: {formatDate(booking.date)}
        </div>

        <div
          className={styles.statusContainer}
          style={{ backgroundColor: setBg(booking.status) }}
        >
          {booking.status}
        </div>


        <p className={styles.text}>
          We will contact or send notifications to you via this contact:
        </p>
        <motion.div
          className={styles.accountBox}
        >
          <img
            src={require("../../assets/icons/account.png")}
            alt="account"
            style={{ width: "2.5vw", height: "2.5vw", marginLeft: "2vw" }}
          />
          <div className={styles.signIn}>
            <div style={{ fontWeight: "600" }}>Lê Thị Bích Hằng</div>
            <input
                  type='text'
                  value={email}
                  onChange={handleEmailChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
          </div>
        </motion.div>


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


        <div className={styles.bookingForm} style={{ alignSelf: "center" }}>

          <div className={styles.heading1}>1. Contact Information</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "4vh",
              fontSize: "3vh",
            }}
          >
            <div className={styles.heading2}>Your good name: </div>
            <input
                  type='text'
                  value={name}
                  onChange={handleNameChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"3vh", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
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
            <input
                  type='text'
                  value={phone}
                  onChange={handlePhoneChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"3vh", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
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
            <input
                  type='text'
                  value={nationality}
                  onChange={handleNationalityChange}
                  style={{width: "30vw", height: "6vh", borderRadius: "0.5vw", fontSize:"3vh", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
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
            <textarea
                  type='text'
                  value={address}
                  onChange={handleAddressChange}
                  style={{width: "30vw", height: "20vh", borderRadius: "0.5vw", fontSize:"3vh", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
          </div>

          <div className={styles.heading1}>2. Customer's Information</div>
          <div className={styles.heading2}>a. Adult</div>
          <div className={styles.infoTag}>
            {
              adultList.map((adult, index) => (
                <>
                  <CustomerBoxModify
                    index={index}
                    id = {adult._id}
                    name={adult.name}
                    type="adult"
                    sex ={adult.sex}
                    dob = {formatDate(adult.dob)}
                    ID = {adult.ID}
                    phone = {adult.phone}
                    email = {adult.email}
                    onSave = {(data) => handleAdultDataChange(index, data)}
                  />
                </>
              ))
            }
          </div>
          <div className={styles.heading2} style={{ marginTop: "2vh" }}>
            b. Children
          </div>
          <div className={styles.infoTag}>
          {
            childList.map((child, index) => (
                <>
                <CustomerBoxModify
                    id = {child._id}
                    index={index}
                    name={child.name}
                    type="children"
                    sex ={child.sex}
                    dob = {formatDate(child.dob)}
                    onSave = {(data) => handleChildrenDataChange(index, data)}
                  />
                </>
              ))
          }
          </div>
        </div>

        <div className={styles.text} style={{ fontWeight: "600" }}>
          Your additional notion:
        </div>
        <textarea 
                  type='text'
                  value={note}
                  onChange={handleNoteChange}
                  style={{width: "56vw", height: "20vh", borderRadius: "0.5vw", fontSize:"1.2vw", paddingLeft: "2vw", border: "0.2vh solid black", marginTop: "2vh"}}
                />
      </div>

      {
        showMessage ? (
          <div className={styles.errorText}>{message}</div>
        ) : null
      }


          <motion.button className={styles.saveBtn} whileHover={{scale: 0.95}} onClick={handleSaveClick}>
            Save 
          </motion.button>

          {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
        )}

    </div>
  );
};

export default ModifyBookingScreen;
