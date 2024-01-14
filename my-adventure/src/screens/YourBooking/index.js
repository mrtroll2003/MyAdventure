import React, { useEffect, useState } from "react";
import TourContainer from "../../component/YourBookingContainer";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { formatDate } from "../../constant/formatDate";
const YourBooking = () => {
  const email = localStorage.getItem("email");
  const [bookings, setBooking] = useState([]);
  const [tours, setTours] = useState([]);
  const [adultList, setAdultList] = useState([]);
  const [childList, setChildList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all bookings");
  const [sortOrder, setSortOrder] = useState("desc");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3001/booking/email?email=${email}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBooking(data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, [email]);

  useEffect(() => {
    const fetchAdultLists = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const fetchedAdultLists = [];

        for (const booking of bookings) {
          const response = await fetch(
            `http://localhost:3001/adult/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
            requestOptions
          );
          const result = await response.json();
          fetchedAdultLists.push(result);
        }

        setAdultList(fetchedAdultLists);
        console.log("Adult Lists:", adultList);
      } catch (error) {
        console.log("Error:", error);
        setAdultList([]);
      }
    };

    const fetchChildrenLists = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const fetchedChildrenLists = [];

        for (const booking of bookings) {
          const response = await fetch(
            `http://localhost:3001/children/booking?bookingEmail=${booking.email}&bookingDate=${booking.date}`,
            requestOptions
          );
          const result = await response.json();
          fetchedChildrenLists.push(result);
        }

        setChildList(fetchedChildrenLists);
        console.log("Children Lists:", adultList);
      } catch (error) {
        console.log("Error:", error);
        setChildList([]);
      }
    };

    const fetchTourList = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        const fetchedTourLists = [];

        for (const booking of bookings) {
          const response = await fetch(
            `http://localhost:3001/tour/place?id=${booking.tourID}`,
            requestOptions
          );
          const result = await response.json();
          fetchedTourLists.push(result);
        }

        setTours(fetchedTourLists);
        console.log("Tours Lists:", tours);
      } catch (error) {
        console.log("Error:", error);
        setTours([]);
      }
    };
    fetchAdultLists();
    fetchChildrenLists();
    fetchTourList();
  }, [bookings]);

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  const filterBookings = bookings
    .filter(
      (item) =>
        selectedStatus === "all bookings" || item.status === selectedStatus
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });

  if (loading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <div className={styles.hi}>
        Hi our beloved customer, <span className={styles.mark}></span>
      </div>
      <div className={styles.welcome}>
        We are happy that you have chosen our company for your upcoming trips.
        We thank you very much and wish you a rewarding experience at
        MyAdventure!
      </div>
      <div className={styles.welcome} style={{ marginBottom: "5vh" }}>
        Here are all your booking and its status!
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <>
          <div className={styles.horizon}>
            <input
              type="text"
              placeholder="Search for destination..."
              onChange={(e) => setSearchText(e.target.value)}
              className={styles.searchBox}
            />

            <motion.select
              className={styles.searchBox}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{ marginLeft: "5vw" }}
            >
              <motion.option value="all bookings">All Bookings</motion.option>
              <motion.option value="Waiting for handling">
                Waiting for handling
              </motion.option>
              <motion.option value="Waiting for checking">
                Waiting for checking
              </motion.option>
              <motion.option value="Confirmed">Confirmed</motion.option>
              <motion.option value="Paid">Paid</motion.option>
              <motion.option value="Finish">Finish</motion.option>
              <motion.option value="Cancelled">Cancelled</motion.option>
            </motion.select>

            <motion.button
              className={styles.horizon}
              whileTap={{ scale: 0.95 }}
              onClick={handleSortOrderChange}
              style={{ marginLeft: "5vw" }}
            >
              <div className={styles.filterText}>Filter Date</div>
              <img
                className={styles.icon}
                src={require("../../assets/icons/filter.png")}
                alt="tick"
              />
            </motion.button>
          </div>
          {filterBookings
            .map((booking) => {
              const tourIndex = bookings.findIndex(
                (item) => item._id === booking._id
              );
              return { booking, tourIndex };
            })
            .filter(({ booking, tourIndex }) => {
              if (searchText === "") {
                return true;
              } else {
                const tour = tours[tourIndex];
                return (
                  tour &&
                  tour.destination &&
                  tour.destination
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              }
            })
            .sort((a, b) => {
              if (sortOrder === "asc") {
                return a.booking.date.localeCompare(b.booking.date);
              } else {
                return b.booking.date.localeCompare(a.booking.date);
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
                    date={booking.date && formatDate(booking.date)}
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
