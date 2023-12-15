import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";

const MakePaymentScreen = () => {
    const navigate = useNavigate();
    const location  = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const bookingID = searchParams.get('id');
    console.log(bookingID);

    const [booking, setBooking] = useState()
    const [loading, setLoading] = useState(true)
    const [loading1, setLoading1] = useState(true)
    const [tour, setTour] = useState()

    const [file, setFile] = useState("")


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


      useEffect(() => {
    
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
          fetchTourList();
      }, [booking]);


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


      const handleSubmitClick = () => {
        const data = {
            bookingID: bookingID,
            status: "Waiting for checking"
        }
        UpdateStatus(data)
        const url = `/booking-status?bookingID=${encodeURIComponent(bookingID)}`;
        navigate(url);

      }
    
      // method:
    const handleFileChange = (event) => {
        setFile (event.target.value)
    };
    

    if(loading === true || loading1 === true) {
        return <div>...Loading</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.hi}>
                Hi, our beloved customers!
            </div>
            <div className={styles.welcome}>
                We are happy that you have chosen our company for your upcoming trips.
                We thank you very much and wish you a rewarding experience at
                MyAdventure!
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.title}>Your Booking</div>

                <div className={styles.title} style={{ fontSize: "4vh" }}>
                    {tour.departure} - {tour.destination}
                </div>

                <div
                    className={styles.title}
                    style={{
                    textTransform: "capitalize",
                    fontSize: "3vh",
                }}>
                    Booking Date: {formatDate(booking.date) }
                </div>

                <div
                    className={styles.statusContainer}
                    style={{ backgroundColor: setBg(booking.status) }}
                >
                    {booking.status}
                </div>

                <div className={styles.text}>
                    Please give us a evident image of your payment for this booking!
                </div>

                <input className={styles.file} type="file" onChange={handleFileChange}/>
            </div>
            {/* //re-navigation needed */}
            <motion.button className={styles.buttonContainer} whileTap={{scale: 0.8}} onClick={handleSubmitClick}>
                <div className={styles.button}>Submit</div>
            </motion.button>
        </div>
    );
};

export default MakePaymentScreen;