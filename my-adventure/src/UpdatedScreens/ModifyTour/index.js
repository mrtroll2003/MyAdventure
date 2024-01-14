import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatDate, formatHour } from "../../constant/formatDate";
import DatePicker from "react-datepicker";
import moment from "moment";

const ModifyTour = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(true);

  const [tour, setTour] = useState();
  const [images, setImages] = useState([]);
  const [transportBrand, setTransportBrand] = useState("");
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [accomodation, setAccomodation] = useState("");
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState();
  const [message, setMessage] = useState("");
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransportBrandChange = (e) => {
    setTransportBrand(e.target.value);
  };

  const handleAccomodationChange = (e) => {
    setAccomodation(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3001/image`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.log("error", error));

    fetch(
      `http://localhost:3001/tour/place?id=${encodeURIComponent(id)}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setTour(data);
        setLoading(false);
        console.log("place");
      })

      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (tour && tour._id) {
      setTransportBrand(tour.transport);
      const departureDateTime = moment(
        tour.departureDate,
        moment.ISO_8601
      ).format("DD-MM-YYYY HH:mm");
      setDepartureDate(moment(departureDateTime, "DD-MM-YYYY HH:mm").toDate());
      const returnDateTime = moment(tour.returnDate, moment.ISO_8601).format(
        "DD-MM-YYYY HH:mm"
      );
      setReturnDate(moment(returnDateTime, "DD-MM-YYYY HH:mm").toDate());
      setAccomodation(tour.hotel);
      const checkinDateTime = moment(tour.checkin, moment.ISO_8601).format(
        "DD-MM-YYYY HH:mm"
      );
      setCheckinDate(moment(checkinDateTime, "DD-MM-YYYY HH:mm").toDate());
      const checkoutDateTime = moment(tour.checkout, moment.ISO_8601).format(
        "DD-MM-YYYY HH:mm"
      );
      setCheckoutDate(moment(checkoutDateTime, "DD-MM-YYYY HH:mm").toDate());
      setPrice(tour.price);
      setDetails(tour.details);
    }
  }, [tour]);

  const renderImage = (name) => {
    const image = images.find((image) => image.name === name);
    if (image && image.images && image.images.length > 0) {
      const imageLink = image.images[0];
      return imageLink;
    }
    return null;
  };

  const getCity = (name) => {
    const location = name;
    const city = location?.split(",")[0].trim();
    return city;
  };

  const UpdateTour = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/tour/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const status = await response.status;
      return status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    if (
      transportBrand === "" ||
      accomodation === "" ||
      departureDate === undefined ||
      returnDate === undefined ||
      checkinDate === undefined ||
      checkoutDate === undefined ||
      price === "" ||
      details === ""
    ) {
      setMessage("Please fill in enough information");
      setIsShowMessage(true);
      return;
    }

    const data = {
      tourID: tour._id,
      departureDate: departureDate,
      returnDate: returnDate,
      price: price,
      hotel: accomodation,
      transport: transportBrand,
      checkinDate: checkinDate,
      checkoutDate: checkoutDate,
      details: details,
    };

    setIsLoading(true);

    try {
      const response = await UpdateTour(data);
      setIsLoading(false);

      console.log("helllooooo");

      if (response === 200) {
        const url = `/tour-detail?id=${encodeURIComponent(tour._id)}`;
        navigate(url);
      } else if (response === 401) {
        setMessage("Not found tour information");
        setIsShowMessage(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <>
        <div className={styles.introBackground}>
          {/* Left background */}
          <div
            className={styles.halfIntroBackground}
            style={{ backgroundImage: `url(${renderImage(tour.departure)})` }}
          >
            <div className={styles.halfIntroBackgroundLayer}>
              {tour.departure}
            </div>
          </div>
          {/* Right background */}
          <div
            className={styles.halfIntroBackground}
            style={{ backgroundImage: `url(${renderImage(tour.destination)})` }}
          >
            <div className={styles.halfIntroBackgroundLayer}>
              {getCity(tour.destination)}
            </div>
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
          <h1 className={styles.titleMainText}>Tour details</h1>
          <h2 className={styles.titleTourText}>
            {tour.departure}
            {" - "}
            {tour.destination}
          </h2>
          <h3 className={styles.titleTimeText}>
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
          style={{ marginLeft: "5%", marginTop: "5.5%" }}
        >
          Transportation:
        </div>
      </>

      <>
        <div>
          <div className={styles.horizontal}>
            <p className={styles.leftText}>Transportation's brand: </p>
            <input
              value={transportBrand}
              onChange={handleTransportBrandChange}
              type="text"
              className={styles.inputStyle}
            />
          </div>

          <div className={styles.horizontal}>
            <p className={styles.leftText}>Departure Date: </p>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              showTimeInput
              dateFormat="dd/MM/yyyy HH:mm"
              className={styles.datePicker}
            />
          </div>

          <div className={styles.horizontal}>
            <p className={styles.leftText}>Return Date: </p>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              showTimeInput
              dateFormat="dd/MM/yyyy HH:mm"
              className={styles.datePicker}
            />
          </div>
        </div>
      </>
      {/* Accommodation */}
      <>
        <div
          className={styles.text}
          style={{ marginLeft: "5%", marginTop: "2vw" }}
        >
          Accommodation:
        </div>
        <>
          <div>
            <div className={styles.horizontal}>
              <p className={styles.leftText}>Accommodation's name: </p>
              <input
                value={accomodation}
                onChange={handleAccomodationChange}
                type="text"
                className={styles.inputStyle}
              />
            </div>

            <div className={styles.horizontal}>
              <p className={styles.leftText}>Checkin Date: </p>
              <DatePicker
                selected={checkinDate}
                onChange={(date) => setCheckinDate(date)}
                showTimeInput
                dateFormat="dd/MM/yyyy HH:mm"
                className={styles.datePicker}
              />
            </div>

            <div className={styles.horizontal}>
              <p className={styles.leftText}>Checkout Date: </p>
              <DatePicker
                selected={checkoutDate}
                onChange={(date) => setCheckoutDate(date)}
                showTimeInput
                dateFormat="dd/MM/yyyy HH:mm"
                className={styles.datePicker}
              />
            </div>
          </div>
        </>
      </>
      {/* Schedule Details */}
      <>
        <div
          className={styles.text}
          style={{ marginLeft: "5%", marginTop: "2vw" }}
        >
          Schedule Details:
        </div>
      </>

      <textarea
        value={details}
        onChange={handleDetailsChange}
        type="text"
        className={styles.textareaStyle}
      />

      {/* Price */}
      <div className={styles.horizontal}>
        <div className={styles.price}>Price: $</div>
        <input
          value={price}
          onChange={handlePriceChange}
          type="text"
          style={{
            padding: "0.2vw 1vw",
            marginLeft: "1vw",
            width: "10vw",
            border: "0.2vw solid black",
            borderRadius: "0.5vw",
          }}
        />
      </div>

      {isShowMessage ? <div className={styles.errorText}>{message}</div> : null}

      <div className={styles.submitContainer}>
        <motion.button
          className={styles.submitBtn}
          whileHover={{ scale: "0.98" }}
          onClick={handleSubmit}
        >
          Save
        </motion.button>
      </div>

      {/* Footer */}
      <Footer />

      {isLoading && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
      )}
    </>
  );
};

export default ModifyTour;
