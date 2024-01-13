import React, { useEffect, useState } from "react";
import DestinationSection from "../../component/DestinationSection/DestinationSection";
import Footer from "../../component/Footer/Footer";

import styles from "./styles.module.css";

const InternationalTourScreen = () => {
  const [asiaDestinations, setAsiaDestinations] = useState()
  const [europeDestinations, setEuropeDestinations] = useState()
  const [australiaDestinations, setAustraliaDestinations] = useState()
  const [resultData, setResultData] = useState([])
  const [asiaDestinationsImage, setAsiaDestinationsImage] = useState()
  const [europeDestinationsImage, setEuropeDestinationsImage] = useState()
  const [australiaDestinationsImage, setAustraliaDestinationsImage] = useState()
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect (() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/tour/international-tours/asia-destinations", requestOptions)
      .then(response => response.json())
      .then(result => setAsiaDestinations(result))
      .catch(error => console.log('error', error));
  }, []);


  useEffect (() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/tour/international-tours/europe-destinations", requestOptions)
      .then(response => response.json())
      .then(result => setEuropeDestinations(result))
      .catch(error => console.log('error', error));
  }, []);

  useEffect (() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/tour/international-tours/australia-destinations", requestOptions)
      .then(response => response.json())
      .then(result => {
        setAustraliaDestinations(result)
        setResultData(result.data)
      })
      .catch(error => console.log('error', error));
  }, []);


  useEffect(() => {
    console.log("result data", resultData)
  }, [resultData])


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
  
        const fetchedImageList = [];
  
        for (const destination of asiaDestinations) {
          const response = await fetch(`http://localhost:3001/image/place?name=${destination}`, requestOptions)
          const result = await response.json();
          fetchedImageList.push(result);
        }
  
        setAsiaDestinationsImage(fetchedImageList);

      } catch (error) {
        console.log('Error:', error);
        setAsiaDestinationsImage([]);
      }
    }


    fetchImage()
  }, [asiaDestinations])


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
  
        const fetchedImageList = [];
  
        for (const destination of europeDestinations) {
          const response = await fetch(`http://localhost:3001/image/place?name=${destination}`, requestOptions)
          const result = await response.json();
          fetchedImageList.push(result);
        }
  
        setEuropeDestinationsImage(fetchedImageList);
      } catch (error) {
        console.log('Error:', error);
        setEuropeDestinationsImage([]);
      }
    }


    fetchImage()
  }, [europeDestinations])


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
  
        const fetchedImageList = [];
  
        for (const destination of australiaDestinations) {
          const response = await fetch(`http://localhost:3001/image/place?name=${destination}`, requestOptions)
          const result = await response.json();
          fetchedImageList.push(result);
        }
  
        setAustraliaDestinationsImage(fetchedImageList);
      } catch (error) {
        console.log('Error:', error);
        setAustraliaDestinationsImage([]);
      }
    }
    fetchImage()
  }, [australiaDestinations])

  const filterAustraliaDestinations = australiaDestinationsImage
  ? australiaDestinationsImage.filter((destination) => {
      return destination.name.toLowerCase().includes(searchText.toLowerCase());
    })
  : [];

  const filterEuropeDestinations = europeDestinationsImage
  ? europeDestinationsImage.filter((destination) => {
      return destination.name.toLowerCase().includes(searchText.toLowerCase());
    })
  : [];

  const filterAsiaDestinaitons = asiaDestinationsImage
  ? asiaDestinationsImage.filter((destination) => {
      return destination.name.toLowerCase().includes(searchText.toLowerCase());
    })
  : [];

    return (
      <div>
        {/* Viet Nam Tour Intro */}
        <div className={styles.vnTourIntroBackground}>
          <div className={styles.vnTourIntroLayer}>
            <h1 className={styles.vnTourIntroText}>INTERNATIONAL TOURS</h1>
          </div>
        </div>

        
        <input
          type="text"
          placeholder="Search for destination..."
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchBox}
        />
        {/* DESTINATIONS IN ASIA VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Asia."
          }
          img={filterAsiaDestinaitons}
        >
          {"DESTINATIONS IN ASIA"}
        </DestinationSection>
        {/* DESTINATIONS IN EUROPE VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Europe."
          }
          img={filterEuropeDestinations}
        >
          {"DESTINATIONS IN EUROPE"}
        </DestinationSection>
        {/* DESTINATIONS IN AUSTRALIA VIETNAM */}
        <DestinationSection
          text={
            "Awe-inspiring landscapes characterised by limestone mountains and vibrant green rice paddies, diverse local cultures and exhilarating adventures; this is Australia."
          }
          img={filterAustraliaDestinations}
        >
          {"DESTINATIONS IN AUSTRALIA"}
        </DestinationSection>


        {/* Footer */}
        <Footer />
      </div>
    );
}

export default InternationalTourScreen;
