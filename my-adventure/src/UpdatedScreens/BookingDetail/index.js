import React, {useState, useEffect} from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";
import CancelBooking from "../../component/CacelBookingPopUp";
import CustomerTextBox from "../../components/CustomerTextBox";
import CancelPopUp from "../../component/CancelPopUp";

const BookingDetail = (props) => {
  const navigate = useNavigate()
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  
  const [booking, setBooking] = useState();
  const [tour, setTour] = useState()
  const [adult, setAdult] = useState([])
  const [children, setChildren] = useState([])
  const [bookings, setBookings] = useState([])

  const [isShowCancel, setIsShowCancel] = useState(false)
  const [showCancelBox, setShowCancelBox] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch(`http://localhost:3001/booking/id?id=${encodeURIComponent(id)}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setBooking(data);
      setLoading(false);
    })
    .catch(error => console.log('error', error));
  }, []);

  useEffect (() => {
    if(booking && booking.tourID) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(`http://localhost:3001/tour/id?id=${encodeURIComponent(booking.tourID)}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setTour(data);
        setLoading1(false)
      })
      .catch(error => console.log('error', error));
    }
  }, [booking])

  useEffect (() => {
    console.log("tour", tour)
    if (tour && tour._id) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      fetch(`http://localhost:3001/children/tour?tourID=${encodeURIComponent(tour._id)}`, requestOptions)
        .then(response => response.json())
        .then(result => setChildren(result))
        .catch(error => console.log('error', error));
  
      fetch(`http://localhost:3001/adult/tour?tourID=${encodeURIComponent(tour._id)}`, requestOptions)
        .then(response => response.json())
        .then(result => setAdult(result))
        .catch(error => console.log('error', error));
    }
  }, [tour])



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

  const handleChangeClick =() => {
    const url = `/company/booking-detail-modify?id=${encodeURIComponent(id)}`;
    navigate(url);
    return;
  }

  const handleCancelClick = () => {
    setShowCancelBox(!showCancelBox);
  }

  const UpdateStatus = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/booking/update-status", {
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

  const handleConfirmClick = async (e) => {
    e.preventDefault();

    const data = {
      bookingID: id,
      status: "Confirmed"
    }

    try {
      const response = await UpdateStatus(data)

      if (response === 200 ) {
        window.location.href = `/company/detail-booking?id=${encodeURIComponent(id)}`;
        window.location.reload();
        
      } else if (response === 401) {
        console.log("No found booking")
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleConfirmPaymentClick = async (e) => {
    e.preventDefault();

    const data = {
      bookingID: id,
      status: "Paid"
    }

    try {
      const response = await UpdateStatus(data)

      if (response === 200 ) {
        window.location.href = `/company/detail-booking?id=${encodeURIComponent(id)}`;
        window.location.reload();
        
      } else if (response === 401) {
        console.log("No found booking")
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading||loading1) {
    return <p>Loading...</p>;
  }

  return (
    <div         
    style={{
      marginLeft: "10vw",
      marginRight: "10vw",
      marginBottom: "5vw",
    }}>

<div
      style={{      
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",}}
      >
        <h1
          className={styles.titleText}
          style={{ fontSize: "2.5vw", fontWeight: "800", marginTop: "3%" }}
        >
          BOOKING DETAIL
        </h1>

        <div
          className={styles.statusContainer}
          style={{ backgroundColor: setBg(booking.status) }}
        >
          {booking.status}
        </div>

        <h3
          style={{ fontSize: "1.2vw", margin: "0px", fontWeight: "500", marginTop: "0.5vw" }}
        >
          Booking Date: {formatDate(booking.date)}
        </h3>
      </div>
      <div style={{marginLeft: "15vw",
      marginRight: "10vw",}}>

      
      {/* Travel information */}
        <div style={{marginTop: "4vw"}}>
          <div className={styles.horizontal}>
            <div className={styles.text1}>Departure - Destination: </div>
            <div className={styles.text2}>{tour.departure} - {tour.destination}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Time: </div>
            <div className={styles.text2}>{formatDate(tour.departureDate)} - {formatDate(tour.returnDate)}</div>
          </div>
        </div>

        <div className={styles.text1} style={{fontSize: "1.8vw", marginTop: "2vw", width: "auto"}}>
          Customer's Information
        </div>

        <div style={{marginTop: "1vw"}}>
          <div className={styles.horizontal}>
            <div className={styles.text1}>Full Name: </div>
            <div className={styles.text2}>{booking.name}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Phone Number: </div>
            <div className={styles.text2}>{booking.phone}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Nationality: </div>
            <div className={styles.text2}>{booking.nationality}</div>
          </div>

          <div className={styles.horizontal}>
            <div className={styles.text1}>Address: </div>
            <div className={styles.text2}>{booking.address}</div>
          </div>
        </div>

        <div className={styles.text1} style={{marginTop: "2.5vw", marginLeft: "3vw"}}>a. Adult</div>

        {
          adult.map((adult) => (
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

        <div className={styles.text1} style={{marginTop: "2.5vw", marginLeft: "3vw"}}>b. Children</div>

        {
          children.map((child) => (
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

        <div className={styles.horizontal} style={{marginTop: "3vw"}}>
            <div className={styles.text1}>Additional Note: </div>
            <div className={styles.text2}>{booking.note}</div>
          </div>


        
      </div>

        {
          booking.status === "Waiting for handling" && (
            <div className={styles.horizontal} style={{justifyContent: "space-between", marginTop: "5vw"}}>
              <motion.button className={styles.changeBtn} whileHover={{scale: 0.95}} onClick={handleChangeClick}>Change</motion.button>
              <motion.button className={styles.confirmBtn} whileHover={{scale: 0.95}} onClick={handleConfirmClick}>Confirmed</motion.button>
              <motion.button className={styles.cancelBtn} whileHover={{scale: 0.95}} onClick={handleCancelClick}>Cancel</motion.button>
            </div>
          )
        }


        {
          booking.status === "Waiting for checking" && (
            <div className={styles.horizontal} style={{justifyContent: "space-between", marginTop: "5vw"}}>
              <motion.button className={styles.changeBtn} whileHover={{scale: 0.95}} onClick={handleChangeClick}>Change</motion.button>
              <motion.button className={styles.confirmBtn} whileHover={{scale: 0.95}} onClick={handleConfirmPaymentClick}>Confirmed payment</motion.button>
              <motion.button className={styles.cancelBtn} whileHover={{scale: 0.95}}  onClick={handleCancelClick}>Cancel</motion.button>
            </div>
          )
        }


        {
          (booking.status === "Confirmed"  || booking.status ==="Paid")&& (
            <div className={styles.horizontal} style={{justifyContent: "space-between", marginTop: "5vw"}}>
              <motion.button className={styles.changeBtn} whileHover={{scale: 0.95}} style={{width: "35vw"}} onClick={handleChangeClick}>Change</motion.button>
              <motion.button className={styles.cancelBtn} whileHover={{scale: 0.95}} style={{width: "35vw"}} onClick={handleCancelClick}>Cancel</motion.button>
            </div>
          )
        }

        {showCancelBox  && (
        <div className={styles.overlay}>
          <CancelPopUp className={styles.loader} onClick={handleCancelClick} bookingID = {id} type="company"></CancelPopUp>
        </div>
        )}
    </div>
  );
};

export default BookingDetail;
