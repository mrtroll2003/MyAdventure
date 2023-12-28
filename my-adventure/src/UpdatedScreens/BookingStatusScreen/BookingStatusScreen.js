import React, { useDebugValue, useEffect, useState } from "react";
import styles from "./styles.module.css";
// import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import BirthCert from "../../assets/images/birthcert.png";

import CustomerTextBox from "../../components/CustomerTextBox";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";
import CancelPopUp from "../../component/CancelPopUp";
import StarRatings from 'react-star-ratings';

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
  const [adultList, setAdultList] = useState([])
  const [childList, setChildList] = useState([])
  const [showCancelBox, setShowCancelBox] = useState(false)
  const [bookings, setBookings] = useState([])
  const [tours, setTours] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)
  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    
    const fetchBookingList = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3001/booking`, requestOptions)
        const result = await response.json();
        setBookings(result);
      } catch (error) {
        console.log('Error:', error);
        setBookings([]);
      }
    };

    const fetchToursList = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3001/tour`, requestOptions)
        const result = await response.json();
        setTours(result);
      } catch (error) {
        console.log('Error:', error);
        setTours([]);
      }
    };

    console.log ("bbb", booking)

    

      fetchAdultLists();
      fetchChildrenLists();
      fetchTourList();
      fetchBookingList()
      fetchToursList()
      
  }, [booking]);

  useEffect(() => {
    const setRating1 = async () => {
      if (booking && booking.rating) {
        await setRating(booking.rating);
      }
    };
  
    setRating1();
  }, [booking]);




  const setBg =  (status) => {
    var backgroundColor = "#FFED8C"
    if (status === "Successful") {
      backgroundColor = "#30E742"
    } else if (status === "Waiting for handling") {
      backgroundColor = "#FFED8C"
    } else if (status === "Waiting for checking") {
      backgroundColor = "#F5AE45"
    } else if (status === "Confirmed") {
      backgroundColor = "#E4F61A"
    } else if (status === "Paid") {
      backgroundColor = "#2CF594"
    }else if (status === "Cancelled") {
      backgroundColor = "red"
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




  const UpdateRating = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/booking/update-rating", {
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
  }

  const UpdateRatingTotal = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/rating/update", {
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
  }



  const handleRatingSubmit = () => {
    const data = {
      bookingID: bookingID,
      rating: rating,
    }
    UpdateRating(data);

    let total = 0;
    let count = 0;

    console.log("bookings", bookings)
    bookings.forEach(aBooking => {
      tours.forEach(aTour => {
        if (aBooking.tourID === aTour._id && aTour.destination === tour.destination && aBooking._id !== bookingID && aBooking.rating !== 0) {

          total += aBooking.rating;
          console.log("total" + total)
          count ++;
        }
      })
    })
    const finalTotal = total + rating;
    console.log("finalTotal" + finalTotal)
    const averageRating = finalTotal / (count + 1)
    console.log("averageRating" + averageRating)

    const data1 = {
      name: tour.destination,
      rating: averageRating
    }

    UpdateRatingTotal(data1)
    setIsSubmit (true);

  }
 

  if(loading === true || loading1 === true) {
    return  <div>Loading...</div>
  }

  const handleCancelClick = () => {
    if(booking.status !== "Confirmed" && booking.status !== "Waiting for handling") {
      const url = `/cancel?id=${encodeURIComponent(bookingID)}`;
      navigate(url);
      return;
    }
    setShowCancelBox(!showCancelBox);
  }

  const handlePaymentClick = () => {
      const url = `/make-payment?id=${encodeURIComponent(bookingID)}`;
      navigate(url);
      return;
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
          (booking.status === "Waiting for checking" || booking.status === "Paid") ? (
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
            booking.status === "Waiting for checking" ? (
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
            {
              (isSubmit === false && booking.rating === 0) ? (
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  changeRating={(newRating) => setRating(newRating)}
                  numberOfStars={5}
                  starDimension="40px"
                  starSpacing="2px"
                  starHoverColor="gold"
                  isSelectable={true}
                />
              ) : (
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="40px"
                  starSpacing="2px"
                  starHoverColor="gold"
                  isSelectable={true}
                />
              )
            }


            {
              (booking.rating ===0 && isSubmit=== false) && (
                  <motion.button
                  className={styles.submitButton}
                  style={{ marginLeft: "10%" }}
                  whileTap={{ scale: 0.9 }}
                  onClick = {handleRatingSubmit}
                >
                  Submit
                </motion.button>
              )
            }
            </div>
            {/* We gratefully thanks for your evaluation! */}
            {
              (booking.rating !== 0 || isSubmit === true) && (
                <div className={styles.text} style={{ fontStyle: "italic" }}>
                  We gratefully thanks for your evaluation!
                </div>
              )
            }
            </>
          ) : null
        }
      </div>


      {
          (booking.status === "Waiting for checking" || booking.status === "Paid") && (
            <motion.button className={styles.cancelButton} whileHover={{scale: 0.9}} onClick={handleCancelClick}>
              Cancel this booking
            </motion.button>
          )
        }
        {
          booking.status === "Waiting for handling" && (
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
                  onClick={handleCancelClick}
                >
                  Cancel
                </motion.button>

              </div>
            </div>
          )
        }
        
        {
          booking.status === "Confirmed" && (
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
                  If you want to pay for this booking, <br />
                  please click on "Make payment" button!
                </div>
                <motion.button
                  className={styles.smallButton}
                  style={{ backgroundColor: "#32C841" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePaymentClick}
                >
                  Make Payment
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
                  onClick={handleCancelClick}
                >
                  Cancel
                </motion.button>

              </div>
            </div>
          )
        }


      
      {showCancelBox  && (
        <div className={styles.overlay}>
          <CancelPopUp className={styles.loader} onClick={handleCancelClick} bookingID = {bookingID}></CancelPopUp>
        </div>
        )}
    </div>
  );
};

export default BookingStatusScreen;
