import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import FilterIC from "../../assets/icons/filter.png";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import { formatDate } from "../../constant/formatDate";

const  DateTourManagement = () =>{

  const navigate = useNavigate();
  const [departures, setDepartures] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [tours, setTours] = useState([]);
  const [images, setImages] = useState([])
  const [ratings, setRatings] = useState([])
  const [selectedDestination, setSelectedDestination] = useState("all destination");
  const [selectedDeparture, setSelectedDeparture] = useState("all departure");
  const [sortOrder, setSortOrder] = useState('asc');
  const [type, setType] = useState("On Progress");
  const [searchText, setSearchText] = useState("")
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/tour/find-date?date=${date}`, requestOptions)
      .then(response => response.json())
      .then(result => setTours(result))
      .catch(error => console.log('error', error));
  }, [tours]);


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:3001/tour/vietnam-tours/departures", requestOptions)
    .then(response => response.json())
    .then(result => setDepartures(result))
    .catch(error => console.log('error', error));
  }, [departures]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3001/tour/vietnam-tours/destinations", requestOptions)
    .then(response => response.json())
    .then(result => setDestinations(result))
    .catch(error => console.log('error', error));
  }, [destinations]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3001/image", requestOptions)
      .then(response => response.json())
      .then(result => setImages(result))
      .catch(error => console.log('error', error));
  }, [images]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3001/rating", requestOptions)
      .then(response => response.json())
      .then(result => setRatings(result))
      .catch(error => console.log('error', error));
  }, [ratings]);

  const renderImage = (trip) => {
    const image = images.find(image => image.name === trip.destination);
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
    return 0;
  };

  const handleClick = (id) => {
    console.log('Clicked:', id);
    const url = `/tour-detail?id=${encodeURIComponent(id)}`;
    navigate(url);
  };

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };


  const sortedTours = tours
    .filter((item) => {
      return (
      (selectedDestination === 'all destination' || item.destination === selectedDestination) &&
      (selectedDeparture === 'all departure' || item.departure === selectedDeparture) && item.isCancel === false
      )
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.departureDate.localeCompare(b.departureDate);
      } else {
        return b.departureDate.localeCompare(a.departureDate);
      }
    })
    .filter((item) => {
      return item && item.destination && item.destination.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
      <div style={{flexDirection: "column", display: "flex"}}>
         <div className={styles.title}>ALL TOUR IN {date} </div>
        <div style={{display:"flex",flexDirection:"row", alignItems: "baseline", justifyContent: "space-between", padding: "0 5vw", marginTop: "1.5vw"}}>
          <div className={styles.displayHorizon}>
          <div className={styles.comboboxContainer}>
            <div>Departure</div>
            <motion.select
              className={styles.filterBox}
              name="departure"
              value={selectedDeparture}
              onChange={(e) => setSelectedDeparture(e.target.value)}
            >
              <motion.option key="all" value="all departure">All departure</motion.option>
              {departures?.map((departure, index) => (
                <motion.option key={index} value={departure}>{departure}</motion.option>
              ))}
            </motion.select>
          </div>

          <div className={styles.comboboxContainer} style={{marginLeft: "3vw"}}>
            <div>Destination</div>
            <motion.select
              className={styles.filterBox}
              name="destination"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
            >
              <motion.option key="all" value="all destination">All destination</motion.option>
              {destinations?.map((destination, index) => (
                <motion.option key={index} value={destination}>{destination}</motion.option>
              ))}
            </motion.select>
          </div>
          </div>
        </div>
        

      <div className={styles.tourContainer}>
        {sortedTours
          .map((item) => (
            <>
            <div className={styles.tourCard} key={item._id}>
              <RecommendedTripCard
                image={renderImage(item)}
                departure={item.departure}
                destination={item.destination}
                departure_date={formatDate(item.departureDate)}
                return_date={formatDate(item.returnDate)}
                rating={getRating(item)}
                price={item.price}
                onClick={() => handleClick(item._id)}
              />
            </div>
            </>
          ))}
      </div>
        <Footer />
      </div>
    );
  }

export default DateTourManagement;
