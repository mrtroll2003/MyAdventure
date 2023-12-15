import React, {useState, useEffect} from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";

const TourDetail = (props) => {
  const navigate = useNavigate()
  const location  = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  // const { id } = useParams();
  // console.log("id", id)
  // const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  
  const [tour, setTour] = useState()
  const [images, setImages] = useState([])
  const [adult, setAdult] = useState([])
  const [children, setChildren] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3001/image`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setImages(data);
    })
    .catch(error => console.log('error', error));
  
    fetch(`http://localhost:3001/tour/place?id=${encodeURIComponent(id)}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      setTour(data);
      setLoading(false);
      console.log("place")
    })
  

    .catch(error => console.log('error', error));
  }, []);

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


  const handleBookTour = () => {
    console.log('token',localStorage.getItem('token') )
    if (localStorage.getItem('token') === undefined || localStorage.getItem('token') === null) {
      navigate('/sign-in')
      return;
    }
    const url = `/booking?id=${encodeURIComponent(tour._id)}`;
    navigate(url);
    return;
  }

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
    const city = location?.split(",")[0].trim();
    return city;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <>
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
      </>
      {/* Title */}
      <>
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
      </>
      {/* Transportation */}
      <>
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "2.5%" }}
      >
        Transportation:
      </div>
      </>


      <>
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
      </>
      {/* Accommodation */}
      <>
      <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Accommodation:
      </div>
      </>
        <>
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
        </>
      {/* Schedule Details */}
        <>
        <div
        className={styles.text}
        style={{ marginLeft: "5%", marginTop: "1.5%" }}
      >
        Schedule Details:
      </div>
        </>


        <>
        <div
        className={styles.text1}
        style={{ marginLeft: "7.8%", marginTop: "1%", marginRight: "6%" }}
      >
        {tour.details}
      </div>
        </>
   
      {/* Price */}
        <>
        <div
        className={styles.price}
        style={{ marginTop: "2.5%", marginLeft: "6%" }}
      >
        Price: ${tour.price}
      </div>
        </>


      {/* Number of customers */}
        <>
        {
        localStorage.getItem("isAdmin") ? (
          <>
            <div style={{padding: "1vw 5vw", fontSize: "1.8vw"}}>
              <div style={{fontStyle: "italic"}}>Number of customers booking this tour: <span style={{fontWeight: "bold"}}>{(adult?.length || 0)}</span> adults <span style={{fontWeight: "bold"}}>{(children?.length || 0)}</span> children</div>
              <div style={{fontSize: "1.2vw"}}>Click <motion.button whileTap={{scale: 0.9}} style={{fontWeight: "500", fontStyle: "italic", textDecoration: "underline"}} onClick={() => {}}>here</motion.button> to see the customer list for this tour</div>
            </div>
          </>
        ) : null
      }
        </>
      


      {/* Book this tour button  */}
      {console.log("isAdmin" + localStorage.getItem("isAdmin"))}
      <>
      {localStorage.getItem("isAdmin") === true ? (
          <>
          <div className={styles.displayHorizon}> 
            <motion.button className={styles.companyBtn} whileHover={{scale: 0.9}}>Modify</motion.button>
            <motion.button className={styles.companyBtn} style={{backgroundColor: "#FF8139"}}  whileHover={{scale: 0.9}}>Cancel</motion.button>
          </div>
          </>
        ) : (
          <>
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
          onClick={handleBookTour}
        >
          Booking this tour
        </motion.div>
      </div>
          </>
        )}
      </>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default TourDetail;
