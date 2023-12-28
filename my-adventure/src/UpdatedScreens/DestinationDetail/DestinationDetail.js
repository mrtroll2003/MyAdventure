import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import FilterIC from "../../assets/icons/filter.png";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../constant/formatDate";

const DestinationDetail = () => {
  const navigate = useNavigate()
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  console.log("destination: " + destination);

  const [depatureList, setDepartureList] = useState([])
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const [ratings, setRatings] = useState([])
  const [images, setImages] = useState([])

  const [selectedDeparture, setSelectedDeparture] = useState("all departure")
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect (() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3001/image", requestOptions)
    .then(response => response.json())
    .then(data => {
      setImages(data)
    })
    .catch(error => console.log('error', error));

  fetch("http://localhost:3001/rating", requestOptions)
    .then(response => response.json())
    .then(data => {
      setRatings(data)
    })
    .catch(error => console.log('error', error));
    
    fetch(`http://localhost:3001/tour/destination?destination=${destination}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setTours(result)
        setLoading(false)
    })
      .catch(error => console.log('error', error));
  }, [destination])


  useEffect (() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3001/tour/destination/departures?destination=${destination}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setDepartureList(result)
      })
      .catch(error => console.log('error', error));
  }, [destination])

  const numRows = Math.ceil(tours?.length / 3);
  const rows = Array.from({ length: numRows }, (_, index) =>
  tours.slice(index * 3, (index + 1) * 3)
  );


  const renderImage = (departure) => {
    const image = images.find(image => image.name === departure);
    if (image && image.images && image.images.length > 0) {
      const imageLink = image.images[0];
      return imageLink;
    }
    return null; 
  };
  
  const getRating = (trip) => {
    const rating = ratings.find(rating => rating.name === trip.destination);
    if (rating) {
      return rating.rating;
    }
    return 0; // Default rating if 'rating' object is undefined
  };

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const currentDate = new Date();

  const tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(currentDate.getDate() + 10);

  const sortedTours = tours
  .filter((item) => {
    const departureDate = new Date(item.departureDate);
      return (
        (selectedDeparture === 'all departure' || item.departure === selectedDeparture) &&
        departureDate > tenDaysFromNow && item.isCancel === false
      );
  })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.departureDate.localeCompare(b.departureDate);
      } else {
        return b.departureDate.localeCompare(a.departureDate);
      }
    });

  
    const handleClick = (id) => {
      console.log('Clicked:', id);
      const url = `/tour-detail?id=${encodeURIComponent(id)}`;
      navigate(url);
    };

  if(loading) {
    return <div>Loading...</div>
  }


  return (
    <div
      className={styles.screenFont}
      style={{ margin: "0px", padding: "0px" }}
    >
      {/* Intro Background */}
      <div className={styles.introBackground}>
        <div className={styles.introBackgroundLayer} style={{backgroundImage: `url(${renderImage(destination)})`,     backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
          <h1 className={styles.introBackgroundText}>{destination}</h1>
        </div>
      </div>
      {/* Some text */}
      <div style={{ marginLeft: "5%", marginTop: "2.5%", fontSize: "22px" }}>
        We introduce you all tours that have the destination is {destination}!
      </div>
      {/* Filter section */}
      <div
        style={{
          marginLeft: "5%",
          marginTop: "1vw",
          fontSize: "18px",
        }}
      >
        Your departure
      </div>
      <div
        className={styles.displayHorizon}
        style={{
          padding: "0 5%",
          justifyContent: "space-between",
        }}
      >
        <motion.select className={styles.filterBox} name="departure" onChange={(e) => setSelectedDeparture(e.target.value)}>
          <motion.option value="all departure">All departure</motion.option>
          {
            depatureList.map((departure) => (
              <motion.option value={departure }>
                {departure}
              </motion.option>
            ))
          }
        </motion.select>

        <motion.button
          className={styles.displayHorizon}
          whileTap={{ scale: 0.9 }}
          onChange={handleSortOrderChange}
        >
          <div style={{ fontSize: "20px" }}>Filter Date</div>
          <img
            style={{ height: "3vh", marginLeft: "1vw" }}
            src={FilterIC}
            alt="tick"
          />
        </motion.button>
      </div>
      {/* Tour Card Section */}
      <div className={styles.tourContainer}>
          {sortedTours
          .map((item) => (
            <>
            <RecommendedTripCard
              key={item._id}
              image={renderImage(item.departure)}
              departure={item.departure}
              destination={item.destination}
              departure_date={formatDate(item.departureDate)}
              return_date={formatDate(item.departureDate)}
              rating={getRating(item)}
              price={item.price}
              onClick={() => handleClick(item._id)}
            />
            </>
          ))}
        </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DestinationDetail;
