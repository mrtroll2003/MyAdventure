import React, { useEffect, useState } from "react";
import TourContainer from "../../component/YourBookingContainer";
import styles from  "./styles.module.css"
const YourBooking = () => {
  const email = localStorage.getItem("email");
  const [bookings, setBooking] = useState([]);
  const [tours, setTours] = useState([]);
  const [adultList, setAdultList] = useState([]);
  const [childList, setChildList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/booking/email?email=${email}`, requestOptions)
      .then(response => response.json())
      .then(data => {setBooking(data)
      setLoading(false)})
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

    const fetchTourList = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const fetchedTourLists = [];

        for (const booking of bookings) {
          const response = await fetch(`http://localhost:3001/tour/place?id=${booking.tourID}`, requestOptions)
          const result = await response.json();
          fetchedTourLists.push(result);
        }

        setTours(fetchedTourLists);
        console.log('Tours Lists:', tours);
      } catch (error) {
        console.log('Error:', error);
        setTours([]);
      }
    };
    fetchAdultLists();
    fetchChildrenLists();
    fetchTourList();
  }, [bookings]);


  if(loading)
  return <div>Loading...</div>
    return (
      <div className={styles.container}>
        <div className={styles.hi}>Hi our beloved customer, <span className={styles.mark}></span></div>
        <div className={styles.welcome}>We are happy that you have chosen our company for your upcoming trips. We thank you very much and wish you a rewarding experience at MyAdventure!</div>
        <div className={styles.welcome} style={{marginBottom: "5vh"}}>Here are all your booking and its status!</div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <>

        <input
          type="text"
          placeholder="Search for destination..."
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchBox}
        />
        {bookings
        .map((booking, index) => ({ booking, tourIndex: index }))
        .filter(({ booking, tourIndex }) => {
          if (searchText === '') {
            return true;
          } else {
            const tour = tours[tourIndex];
            return tour && tour.destination.toLowerCase().includes(searchText.toLowerCase());
          }
        })
        .map(({ booking, tourIndex }) => {
          return (
            <div key={booking._id}>
              <TourContainer
                departureDate={tours[tourIndex]?.departureDate}
                returnDate={tours[tourIndex]?.returnDate}
                departure={tours[tourIndex]?.departure}
                destination={tours[tourIndex]?.destination}
                numAdult={adultList[tourIndex]?.length || 0}
                nameA={adultList[tourIndex]}
                numChild={childList[tourIndex]?.length || 0}
                nameC={childList[tourIndex]}
                tourStatus={booking.status}
                bookingID={booking._id}
              />
            </div>
          );
        })}
        </>

        </div>
    </div>
  );
};

export default YourBooking;
