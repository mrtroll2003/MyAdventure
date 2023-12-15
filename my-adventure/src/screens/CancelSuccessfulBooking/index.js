import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";

const CancelSuccessfulBooking = () => {
    const navigate = useNavigate();
    const location  = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const bookingID = searchParams.get('id');
    console.log(bookingID);

    const [booking, setBooking] = useState()
    const [loading, setLoading] = useState(true)
    const [loading1, setLoading1] = useState(true)
    const [tour, setTour] = useState()

    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [bankHolder, setBankHolder] = useState("")

    const [showMessage, setShowMessage] = useState(false)

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

      const addBakingAccount = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          bankName: bankName,
          bankAccount: bankAccount,
          bankHolder: bankHolder,
          bookingID: bookingID,
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        console.log("raw" + raw)
    
        fetch("http://localhost:3001/banking-account/add", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
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


      const handleSubmitClick = () => {
         if(bankAccount === "" || bankHolder === "" || bankName === "")
          {
            setShowMessage(true)
            return;
          }


        addBakingAccount()
        
        const data = {
            bookingID: bookingID,
            status: "Cancelled"
        }
        UpdateStatus(data)
        const url = `/booking-status?bookingID=${encodeURIComponent(bookingID)}`;
        navigate(url);

      }
    
      // method:
    const handleBankName = (event) => {
        setBankName (event.target.value)
    };
    
    const handleBankAccount = (event) => {
        setBankAccount(event.target.value)
    };
    
    const handleBankHolder = (event) => {
        setBankHolder(event.target.value)
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
                <div className={styles.warnings}>
                    ARE YOU SURE TO CANCEL?
                </div>
                <div className={styles.caution}>
                If you cancel this booking, you will lose:<br></br>
                    <b>8% fee</b> charged <b>2 weeks to 1 month</b> before departure date<br></br>
                    <b>20% fee</b> charged <b>2 weeks</b> before departure date<br></br><br></br>


                    If you accept our company policy, please fill in below information to be received fee from this booking cancellation.

                </div>

                
            {
              showMessage && (<div className={styles.message}>Please fill all information!</div>)
            }
                <div className={styles.infoBox}>
                    Bank name:
                    <motion.select id="bankname" name="bankname" className={styles.box} required onChange={handleBankName}>
                        <motion.option value="" disabled selected>--Choose an option--</motion.option>
                        <motion.option value="BIDV">BIDV</motion.option>
                        <motion.option value="TPBank">TPBank</motion.option>
                    </motion.select>
                </div>
                <div className={styles.infoBox} onChange={handleBankAccount}>
                    Bank account number:
                    <motion.input type="text" id="banknum" name="banknum" className={styles.box} required/>
                </div>
                <div className={styles.infoBox} onChange={handleBankHolder}>
                    Account holder:
                    <motion.input type="text" id="accholder" name="accholder" className={styles.box} required/>
                </div>
            </div>
            <div className={styles.welcome}>
            When you click “Submit” button, it will takes about 1 week or 2 weeks to handle this refund. 
            </div>
            {/* //re-navigation needed */}
            <motion.button className={styles.buttonContainer} whileTap={{scale: 0.8}} onClick={handleSubmitClick}>
                <div className={styles.button}>Submit</div>
            </motion.button>
        </div>
    );
};

export default CancelSuccessfulBooking;