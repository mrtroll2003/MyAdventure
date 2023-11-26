import React, {useState, useEffect} from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import HalfDaNang from "../../assets/images/half_danang.png";
import HalfHaLong from "../../assets/images/half_halong.png";
import Footer from "../../component/Footer/Footer";
import { useLocation } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";

const TourDetail = (props) => {
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log("id",id)

  const [loading, setLoading] = useState(true);
  
  const [tour, setTour] = useState()
  const [images, setImages] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/image`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setImages(data);
      console.log(tour);
    })
    .catch(error => console.log('error', error));
  
    fetch(`http://localhost:3001/tour/place?id=${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setTour(data);
      setLoading(false);
      console.log(tour);
    })
    .catch(error => console.log('error', error));



  }, [id, tour, images]);

  const renderImage = (name) => {
    const image = images.find(image => image.name === name);
    if (image && image.images && image.images.length > 0) {
      const imageLink = image.images[0];
      return imageLink;
    }
    return null; 
  };

  const getCity = (name) => {
    const location =name;
    const city = location.split(",")[0].trim();
    return city;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* Left background */}
        <div
          className={styles.halfIntroBackground}
          style={{ backgroundImage: `url(${renderImage(tour.departure)})` }}
        >
          <div className={styles.halfIntroBackgroundLayer}>{tour.departure}</div>
        </div>
        {/* Right background */}
        <div
          className={styles.halfIntroBackground}
          style={{ backgroundImage: `url(${renderImage(tour.destination)})` }}
        >
          <div className={styles.halfIntroBackgroundLayer}>{getCity(tour.destination)}</div>
        </div>
      </div>
      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className={styles.titleText}
          style={{ fontSize: "3.5vw", marginTop: "2.5%", fontWeight: "800" }}
        >
          Tour details
        </h1>
        <h2
          className={styles.titleText}
          style={{ fontSize: "2vw", margin: "0px", fontWeight: "600" }}
        >
          {tour.departure}
          {" - "}
          {tour.destination}
        </h2>
        <h3
          className={styles.titleText}
          style={{ fontSize: "1.5vw", margin: "0px", fontWeight: "400" }}
        >
          {formatDate(tour.departureDate)}
          {" - "}
          {formatDate(tour.returnDate)}
        </h3>
      </div>
      {/* Transportation */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "2.5%" }}
      >
        Transportation:
      </div>
      <div className={styles.horizontal}>
        <div className={styles.firstHalf}>
          <p className={styles.leftText}>Transportation's brand: </p>
          <p className={styles.leftText}>Departure Date: </p>
          <p className={styles.leftText}>Departure Time: </p>
          <p className={styles.leftText}>Return Date: </p>
          <p className={styles.leftText}>Return Time: </p>
        </div>
        <div className={styles.secondHalf}>
          <p className={styles.rightText}>{tour.transport}</p>
          <p className={styles.rightText}>{formatDate(tour.departureDate)}</p>
          <p className={styles.rightText}>{formatHour(tour.departureDate)}</p>
          <p className={styles.rightText}>{formatDate(tour.returnDate)}</p>
          <p className={styles.rightText}>{formatHour(tour.returnDate)}</p>
        </div>
      </div>
      {/* Accommodation */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Accommodation:
      </div>
      <div className={styles.horizontal}>
        <div className={styles.firstHalf}>
          <p className={styles.leftText}>Accommodation's name: </p>
          <p className={styles.leftText}>Checkin Date: </p>
          <p className={styles.leftText}>Checkin Time: </p>
          <p className={styles.leftText}>Checkout Date: </p>
          <p className={styles.leftText}>Checkout Time: </p>
        </div>
        <div className={styles.secondHalf}>
          <p className={styles.rightText}>{tour.hotel}</p>
          <p className={styles.rightText}>{formatDate(tour.checkin)}</p>
          <p className={styles.rightText}>{formatHour(tour.checkin)}</p>
          <p className={styles.rightText}>{formatDate(tour.checkout)}</p>
          <p className={styles.rightText}>{formatHour(tour.checkout)}</p>
        </div>
      </div>
      {/* Schedule Details */}
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Schedule Details:
      </div>
      <div
        className={styles.text1}
        style={{ marginLeft: "7.8%", marginTop: "1%", marginRight: "6%" }}
      >
        {tour.details}
      </div>
      {/* {details.day1[1].map((item, index) => (
        <div key={index} className={styles.detailsText}>
          {item}
        </div>
      ))} */}
{/* 
      <div
        className={styles.text}
        style={{ marginLeft: "6%", marginTop: "2%" }}
      >
        Day 2: {details.day2[0]}
      </div>
      {details.day2[1].map((item, index) => (
        <div key={index} className={styles.detailsText}>
          {item}
        </div>
      ))}
      <div
        className={styles.text}
        style={{ marginLeft: "6%", marginTop: "2%" }}
      >
        Day 3: {details.day3[0]}
      </div>
      {details.day3[1].map((item, index) => (
        <div key={index} className={styles.detailsText}>
          {item}
        </div>
      ))}

      <div
        className={styles.text}
        style={{ marginLeft: "6%", marginTop: "2%" }}
      >
        Day 4: {details.day4[0]}
      </div>
      {content_day4.map((item, index) => (
        <div key={index} className={styles.detailsText}>
          {item}
        </div>
      ))} */}
      {/* Price */}
      <div
        className={styles.price}
        style={{ marginTop: "2.5%", marginLeft: "6%" }}
      >
        Price: ${tour.price}
      </div>
      {/* Book this tour button  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: "2.5%",
        }}
      >
        <motion.div
          className={styles.bookTourBtn}
          style={{ marginRight: "5%" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Booking this tour
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TourDetail;
