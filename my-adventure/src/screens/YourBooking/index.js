import React, { useEffect, useState } from "react";
import TourContainer from "../../component/YourBookingContainer";
import styles from  "./styles.module.css"
const YourBooking = () => {
  
  const email = localStorage.getItem("email");
  const [bookings, setBooking] = useState([]);
  const [adultList, setAdultList] = useState([]);
  const [childList, setChildList] = useState([]);
  
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/booking/email?email=${email}`, requestOptions)
      .then(response => response.json())
      .then(data => setBooking(data))
      .catch(error => console.log('error', error));
  }, [email])

  useEffect(() => {
    const fetchAdultLists = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const fetchedAdultLists = [];

        for (const booking of bookings) {
          const response = await fetch(`http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`, requestOptions);
          const result = await response.json();
          fetchedAdultLists.push(result);
        }

        setAdultList(fetchedAdultLists);
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

        const fetchedChildrenLists = [];

        for (const booking of bookings) {
          const response = await fetch(`http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`, requestOptions);
          const result = await response.json();
          fetchedChildrenLists.push(result);
        }

        setChildList(fetchedChildrenLists);
        console.log('Children Lists:', adultList);
      } catch (error) {
        console.log('Error:', error);
        setChildList([]);
      }
    };

    fetchAdultLists();
    fetchChildrenLists();
  }, [bookings]);

    return (
      <div className={styles.container}>
        <div className={styles.hi}>Hi, <span className={styles.mark}>Lê Thị Bích Hằng</span></div>
        <div className={styles.welcome}>We are happy that you have chosen our company for your upcoming trips. We thank you very much and wish you a rewarding experience at MyAdventure!</div>
        <div className={styles.welcome} style={{marginBottom: "5vh"}}>Here are all your booking and its status!</div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {bookings.map((booking, index) => (
        <React.Fragment key={booking._id}>
          <TourContainer
            departureDate={booking.departureDate}
            returnDate={booking.returnDate}
            departure={booking.departure}
            destination={booking.destination}
            numAdult={adultList[index]?.length || 0}
            nameA={adultList[index]}
            numChild={childList[index]?.length || 0}
            nameC={childList[index]}
            tourStatus={booking.status}
          />
        </React.Fragment>
      ))}
        </div>
    </div>
  );
};

export default YourBooking;
