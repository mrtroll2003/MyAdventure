import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nkaxnoxocaglizzrfhjw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYXhub3hvY2FnbGl6enJmaGp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDEyMDI2NCwiZXhwIjoyMDE1Njk2MjY0fQ.6ZNDz2LY3uTglFR2sqJvyPirr00voeSv9BNBRDU_F08";
const supabase = createClient(supabaseUrl, supabaseKey);

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
    const [isShow, setIsShow] = useState(false)

    const [file, setFile] = useState(null)


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
      
      const setBg = (status) => {
        var backgroundColor = "#FFED8C";
        if (status === "Finish") {
          backgroundColor = "#22EAAA";
        } else if (status === "Waiting for handling") {
          backgroundColor = "#FFED8C";
        } else if (status === "Waiting for checking") {
          backgroundColor = "#F5AE45";
        } else if (status === "Confirmed") {
          backgroundColor = "#99FFCD";
        } else if (status === "Paid") {
          backgroundColor = "#2CF594";
        } else if (status === "Cancelled") {
          backgroundColor = "#FF4A4A";
        }
        return backgroundColor;
      };


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

      async function uploadImage(file) {
        console.log("file " + file);
        const key = `Payment/${uuidv4()}`;
        const { data, error } = await supabase.storage.from('myadventure').upload(key, file, {
          cacheControl: 'max-age=31536000',
          upsert: false,
          contentType: 'image/jpeg',
        });
        if (error) {
          console.error('Error uploading image:', error.message);
          return;
        }
        console.log('Image uploaded successfully:', key);
      
        const supabaseUrl = 'https://nkaxnoxocaglizzrfhjw.supabase.co/storage/v1/object/public';
        const imageUrl = `${supabaseUrl}/myadventure/${key}`;
        console.log('Image URL:', imageUrl);
        return imageUrl;
      }

      const updatePayment = (imageUrl) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "_id": bookingID,
          "payment": imageUrl,
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3001/booking/update-payment", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }


      const handleSubmitClick = async () => {
        if(file === null) {
          return;
        }
        const data = {
            bookingID: bookingID,
            status: "Waiting for checking"
        }
        UpdateStatus(data)
        const image = await uploadImage(file)
        console.log ("imageUrl   ", image)
        updatePayment(image)
        // const url = `/booking-status?bookingID=${encodeURIComponent(bookingID)}`;
        // navigate(url);
        window.location.href = `/booking-status?bookingID=${encodeURIComponent(bookingID)}`;
        window.location.reload();
      }
    
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
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