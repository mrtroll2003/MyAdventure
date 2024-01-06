import React, {useEffect, useState} from "react";
import RecommendedTripCard from "../../component/RecommendedTripCard/RecommendedTripCard";
import HolidayTypeCircle from "../../component/HolidayTypeCircle/HolidayTypeCircle";
import Footer from "../../component/Footer/Footer";
import GreenGlobe from "../../assets/icons/green_globe.png";
import MessageBubble from "../../assets/icons/message_bubble.png";
import Flag from "../../assets/icons/flag.png";
import ArrowRight from "../../assets/icons/arrowRight.png";
import CityIcon from "../../assets/icons/city.png";
import SafariIcon from "../../assets/icons/safari.png";
import BeachIcon from "../../assets/icons/beach.png";
import AdventureIcon from "../../assets/icons/adventure.png";
import HoneymoonIcon from "../../assets/icons/honeymoon.png";
import HappyCustomer01 from "../../assets/images/happy_customer_01.png";
import HappyCustomer02 from "../../assets/images/happy_customer_02.png";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { formatDate } from "../../constant/formatDate";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [tours, setTours] = useState([])
  const [images, setImages] = useState([])
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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
  
    fetch("http://localhost:3001/tour", requestOptions)
      .then(response => response.json())
      .then(data => {
        setTours(data);
      })
      .catch(error => console.log('error', error));
  }, []);
  
  useEffect(() => {
    const sortedData = tours.sort((a, b) => getRating(b) - getRating(a));
    const top3Trips = sortedData.slice(0, 3);
    setData(top3Trips);
  }, [tours]);
  
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
  const numRows = Math.ceil(data.length / 3);
  const rows = Array.from({ length: numRows }, (_, index) =>
    data.slice(index * 3, (index + 1) * 3)
  );

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.welcome}><mark className={styles.highlight}>Welcome To Our</mark></h2>
          <h2 className={styles.myadventure}><mark className={styles.highlight}>My Adventure</mark></h2>
          <h2 className={styles.booking}><mark className={styles.highlight}>Enjoy your dream vacation, discover amazing places at exclusive details</mark></h2>
        </div>
        <div style={{marginTop: "20vh"}}>
          <div className={styles.boldStatement}>WHY WE ARE THE BEST?</div>
          <div className={styles.normalText}>
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video you want to add.
          </div>
          <div className={styles.subContentView}>
            <div className={styles.subContent}>
              <img src={GreenGlobe} alt="Green Globe" className={styles.icon} />
              <div className={styles.subContentText}>Amazing Travel</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
            <div className={styles.subContent}>
              <img src={Flag} alt="Flag" className={styles.icon}/>
              <div className={styles.subContentText}>Book Your Trip</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
            <div className={styles.subContent}>
              <img src={MessageBubble} alt="Message Bubble" className={styles.icon} />
              <div className={styles.subContentText}>Nice Support</div>
              <div className={styles.subContentMainText}>
                When you click Online Video, you can
                paste in the embed code for the
                video you want to add.
              </div>
            </div>
            {/*  */}
          </div>
          <div className={styles.packageBackground}>
            <div className={styles.packageView}>
              <div style={{width: "80%"}}>
                <h1 id={styles.packageIntroduction}>Summer Vacation Packages</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <p id={styles.packageMainText}>
                    Video provides a powerful way to help you prove your point. When
                    you click Online Video, you can paste
                    in the embed code for the video you want to add. You can also
                    type a keyword to search online for the
                    video that best fits your document.
                  </p>

                </div>
                <h1 id={styles.packagePriceView}>
                  <span id={styles.packagePriceText01}>From Only </span>
                  <span id={styles.packagePrice}>$159.00</span>
                  <span id={styles.packagePriceText02}> per person</span>
                </h1>
              </div>
{/* 
              <motion.button
                  id={styles.detailsBtn}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  DETAILS
                </motion.button> */}
            </div>
          </div>
          {/*  */}
          <div style={{marginTop: "10vh"}}>
            <div className= {styles.boldStatement}>POPULAR TRIP</div>
            <div className={styles.normalText}>
              Video provides a powerful way to help you prove your point. When you
              click Online Video, you
              can paste in the embed code for the video you want to add.
            </div>
            <div className={styles.titleRowView}>
              <p
                style={{
                  fontFamily: "NunitoSans",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#6E7491",
                }}
              >
                Explore unique{" "}
                <span style={{ color: "#5CD6C0" }}>places to stay</span>
              </p>
                <motion.button style={{display: "flex", flexDirection: 'row'}} whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} onClick={() => navigate('/vietnam-tours')}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "NunitoSans",
                      color: "#A1B0CC",
                    }}
                  >
                    All
                  </p>
                  <motion.img
                    src={ArrowRight}
                    alt="arrow right"
                    style={{ alignSelf: "center", width: '1.5vw' }}

                  />
              </motion.button>
            </div>
            {rows.map((row, rowIndex) => (
              <>
              <div
                key={rowIndex}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: "2%",
                }}
              >
                {row.map((item) => (
                  <>
                  <RecommendedTripCard
                    key={item._id}
                    image={renderImage(item)}
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
              </>

            ))}
          </div>
          {/* Happy Customer */}
          <div className={styles.happyCustomerBackground}>
            <div className={styles.happyCustomerView}>
              <img
                src={HappyCustomer01}
                alt="happy customer 01"
                style={{ marginLeft: "5%", alignSelf: "flex-end" }}
              />
              <img
                src={HappyCustomer02}
                alt="happy customer 02"
                style={{ marginLeft: "-5%", alignSelf: "flex-end" }}
              />
              <div className={styles.happyCustomerContentView}>
                <h1 id={styles.whiteBoldStatement}>HAPPY CUSTOMERS</h1>
                <p id={styles.whiteNormalText}>
                  Video provides a powerful way to help you prove your point. When
                  you click Online Video, you can paste in the embed code for the
                  video you want to add. You can also type a keyword to search
                  online for the video that best fits your document.
                  <br />
                  <br />
                  Video provides a powerful way to help you prove your point. When
                  you click Online Video, you can paste in the embed code for the
                  video you want to add.
                </p>
              </div>
            </div>
          </div>
          {/* Holiday Types */}
          <div style={{marginTop: "10vh"}}>
            <div className={styles.boldStatement}>HOLIDAY TYPES</div>
            <div className={styles.normalText}>
              Video provides a powerful way to help you prove your point. When you
              click Online Video, you
              <br />
              can paste in the embed code for the video you want to add.
            </div>
            {/*  */}
            <div className={styles.holidayTypeView}>
              <HolidayTypeCircle image={CityIcon} holidayTypeName={"City"} />
              <HolidayTypeCircle image={SafariIcon} holidayTypeName={"Safari"} />
              <HolidayTypeCircle image={BeachIcon} holidayTypeName={"Beach"} />
              <HolidayTypeCircle
                image={AdventureIcon}
                holidayTypeName={"Adventure"}
              />
              <HolidayTypeCircle
                image={HoneymoonIcon}
                holidayTypeName={"Honeymoon"}
              />
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
