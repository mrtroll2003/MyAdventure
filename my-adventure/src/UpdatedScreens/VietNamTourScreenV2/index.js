import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import FilterIC from "../../assets/icons/filter.png";


import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import { formatDate } from "../../constant/formatDate";

const  VietNamTourScreenCompany = () =>{

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3001/tour/vietnam-tours", requestOptions)
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

  const currentDate = new Date();

  const tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(currentDate.getDate() + 10);

  const sortedTours = tours
    .filter((item) => {
      const departureDate = new Date(item.departureDate);
      if(type === "On Progress") {
        return (
          (selectedDestination === 'all destination' || item.destination === selectedDestination) &&
          (selectedDeparture === 'all departure' || item.departure === selectedDeparture) &&
          departureDate > tenDaysFromNow && item.isCancel === false
        );
      } else if (type === "Cancelled") {
        return (
          (selectedDestination === 'all destination' || item.destination === selectedDestination) &&
          (selectedDeparture === 'all departure' || item.departure === selectedDeparture) &&
          item.isCancel === true
        );
      } else if(type === "Waiting for departuring") {
        return (
          (selectedDestination === 'all destination' || item.destination === selectedDestination) &&
          (selectedDeparture === 'all departure' || item.departure === selectedDeparture) &&
          departureDate <= tenDaysFromNow && departureDate > currentDate && item.isCancel === false
        );
      }
      return (
        (selectedDestination === 'all destination' || item.destination === selectedDestination) &&
        (selectedDeparture === 'all departure' || item.departure === selectedDeparture) &&
        departureDate <= currentDate && item.isCancel === false
      );
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.departureDate.localeCompare(b.departureDate);
      } else {
        return b.departureDate.localeCompare(a.departureDate);
      }
    });

    const hanleCreateClick = () => {
      navigate('/company/create-vietnam-tours')
    }

    return (
      <div style={{flexDirection: "column", display: "flex"}}>
        {/* Viet Nam Tour Intro */}
        <div className={styles.vnTourIntroBackground}>
          <div className={styles.vnTourIntroLayer}>
            <h1 className={styles.vnTourIntroText}>OUR VIETNAM TOURS</h1>
          </div>
        </div>



        <div style={{display:"flex",flexDirection:"row", alignItems: "center", justifyContent: "space-between", padding: "2vw 5vw"}}>
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

          <div className={styles.comboboxContainer}>
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

          <motion.button
              className={styles.displayHorizon}
              whileTap={{ scale: 0.9 }}
              onClick={handleSortOrderChange}
            >
              <div style={{ fontSize: "1.2vw", fontWeight: "500"}}>Filter Date</div>
              <img
                style={{ height: "1.2vw", marginLeft: "1vw" }}
                src={FilterIC}
                alt="tick"
              />
            </motion.button>
        </div>


        <div className={styles.comboboxContainer} style={{marginTop: "0.2vw"}}>
            <div>The status of tours</div>
            <motion.select
              className={styles.filterBox}
              name="status"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <motion.option key="On Progress" value="On Progress">On Progress</motion.option>
              <motion.option key="Cancelled" value="Cancelled">Cancelled</motion.option>
              <motion.option key="Finished" value="Finished">Finished</motion.option>
              <motion.option key="Waiting for departuring" value="Waiting for departuring">Waiting for departuring</motion.option>
            </motion.select>
          </div>
        
      
        <div
        style={{
          padding: "0 5vw",
          margin: "0.8vw 0",
          fontSize: "1.2vw",
        }}
      >
        If you want to make a new tour in the future please click below button!
      </div>

      <motion.button className={styles.button} whileTap={{ opacity: 0.5, transition: { duration: 0.1 } }} onClick={hanleCreateClick}>
          + Create a new tour
      </motion.button>


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

export default VietNamTourScreenCompany;
