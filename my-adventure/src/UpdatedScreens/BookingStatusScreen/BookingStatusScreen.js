import React, { useDebugValue, useEffect, useState } from "react";
import styles from "./styles.module.css";
// import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import BirthCert from "../../assets/images/birthcert.png";

import CustomerTextBox from "../../components/CustomerTextBox";
import { useLocation, useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { formatDate } from "../../constant/formatDate";

const BookingStatusScreen = (props) => {
  const navigate = useNavigate();
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const bookingID = searchParams.get('bookingID');
  console.log(bookingID);

  const [booking, setBooking] = useState()
  const [tour, setTour] = useState()
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState(true)
  // const [statusBackgroundColor, setstatusBackgroundColor] = useState("#FFED8C")
  const [adultList, setAdultList] = useState([])
  const [childList, setChildList] = useState([])


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/booking/id?id=${bookingID}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setBooking(result)
        setLoading(false)})
      .catch(error => console.log('error', error));
  }, [bookingID])

  // useEffect (() => {
  //   // console.log("bookingID",bookingID)
  //   console.log("booking",booking)
  // }, [booking])

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

  const handleDetailClick = (id) => {
    console.log('Clicked:', id);
    const url = `/tour-detail?id=${encodeURIComponent(id)}`;
    navigate(url);
  };

  const handleModifyClick = (bookingID) => {
    console.log('Clicked:', bookingID);
    const url = `/detail-booking-modify?id=${encodeURIComponent(bookingID)}`;
    navigate(url);
  };

  const calPrice = (list1, list2, price) => {
    const num = list1.length + list2.length;
    return price * num;
  }

  const [rating, setRating] = useState(null);
  const [starHover, setStarHover] = useState(null);
 

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
            <div style={{ marginTop: "2vh" }}>{booking.email}</div>
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
            }}
          >
            <div className={styles.heading2}>Your good name: </div>
            <div style={{ fontSize: "3vh" }}>{booking.name}</div>
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
            <div style={{ fontSize: "3vh" }}>{booking.phone}</div>
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
            <div style={{ fontSize: "3vh" }}>{booking.nationality}</div>
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
              {booking.address}
            </div>
          </div>

          <div className={styles.heading1}>2. Customer's Information</div>
          <div className={styles.heading2}>a. Adult</div>
          <div className={styles.infoTag}>
            {
              adultList.map((adult) => (
                <>
                  <CustomerTextBox
                    name={adult.name}
                    type="adult"
                    sex ={adult.sex}
                    dob = {formatDate(adult.dob)}
                    ID = {adult.ID}
                    phone = {adult.phone}
                    email = {adult.email}
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
            childList.map((child) => (
                <>
                  <CustomerTextBox
                    name={child.name}
                    type="children"
                    sex ={child.sex}
                    dob = {formatDate(child.dob)}
                  />
                </>
              ))
          }
          </div>
        </div>

        <div className={styles.text} style={{ fontWeight: "600" }}>
          Your additional notion: {booking.note}
        </div>


        <div
          className={styles.text}
          style={{ fontSize: "4vh", fontStyle: "italic" }}
        >
          Details for this trip:{" "}
          <motion.button className={styles.title} style={{ fontWeight: "bold", fontStyle: "normal", textDecoration: "underline", marginLeft: "2vw", fontSize: "2vw"}} whileHover={{scale: 0.9}} onClick={()=>handleDetailClick(tour._id)}>
            DETAILS
          </motion.button>
        </div>

        <div
          className={styles.price}
          style={{ marginTop: "2.5%", marginBottom: "5%" }}
        >
          Total price: ${calPrice(adultList, childList, tour.price)}
        </div>


        {
          (booking.status === "Confirmed" || booking.status === "Paid") ? (
            <>
          <div className={styles.text} style={{ fontWeight: "600" }}>
            Evidence of your payment for this tour:
          </div>
          <div
          className={styles.horizon}
          style={{
            width: "50%",
            justifyContent: "space-between",
            marginTop: "2.5%",
          }}
        >
          <img src={BirthCert} alt="evidence" />
          <div>payment.jpg</div>
          {
            booking.status === "Confirmed" ? (
              <motion.button
                className={styles.changeButton}
                whileTap={{ scale: 0.9 }}
              >
                Change
              </motion.button>
            ) : null
          }
        </div>
            </>
          ): null
        }

        {
          booking.status === "Successful" ? (
            <>
            <div className={styles.text} style={{ fontStyle: "italic" }}>
              Let’s evaluate for this booking!
            </div>
            {/* Star rating section */}
            <div className={styles.horizon} style={{ marginTop: "2.5%" }}>
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                  </label>
                );
              })}
              <motion.button
                className={styles.submitButton}
                style={{ marginLeft: "10%" }}
                whileTap={{ scale: 0.9 }}
              >
                submit
              </motion.button>
            </div>
            {/* We gratefully thanks for your evaluation! */}
            <div className={styles.text} style={{ fontStyle: "italic" }}>
              We gratefully thanks for your evaluation!
            </div>
            </>
          ) : null
        }


      </div>

      <div
        className={styles.horizon}
        style={{
          justifyContent: "space-between",
          marginTop: "2.5%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        {/* Modify button side */}
        <div className={styles.halfSide}>
          <div className={styles.text} style={{ fontSize: "1.5vw" }}>
            If you want to change above information, <br />
            please click on “Modify” button!
          </div>
          <motion.button
            className={styles.smallButton}
            style={{ backgroundColor: "#66F235" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleModifyClick(booking._id)}
          >
            Modify
          </motion.button>
        </div>
        {/* Cancel button side */}
        <div className={styles.halfSide}>
          <div className={styles.text} style={{ fontSize: "1.5vw" }}>
            If you want to cancel this trip, please click on “Cancel” button!
          </div>
          <motion.button
            className={styles.smallButton}
            style={{ backgroundColor: "#FF8139" }}
            whileTap={{ scale: 0.9 }}
          >
            Cancel
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default BookingStatusScreen;
