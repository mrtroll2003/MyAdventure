import React from "react";
import Header from "../../component/Header/index";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import { motion } from "framer-motion";
import { Maldives, Mongolia, Morocco, IntBG } from "../../assets/images";
import "./styles.css";
import TourSearch from "../../component/TourSearch/TourSearch";
import StarRatings from 'react-star-ratings';
import Footer from "../../component/Footer/Footer";

const BookingStepOne = () => {
  return (
    <div>
      <Header></Header>
      {/* <MainTabbar option={"Travel Protection"}></MainTabbar> */}
      <MainTabbar/>
      {/* <div>
        <IntroBackground style="position:absolute;"></IntroBackground>
        <TourSearch style="position:absolute;z-index:4;"></TourSearch>
      </div> */}
      <div className="content">
        <div className='title'>
          <h2 className='welcome'><mark className='highlight'>Welcome To Our</mark></h2>
          <h2 className='myadventure'><mark className='highlight'>My Adventure</mark></h2>
          <h2 className='booking'><mark className='highlight'>Booking your favorite tour to discover amazing places!</mark></h2>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: 'center', marginTop: "9vh"}}>
          <TourSearch/> 
        </div>

        <div style={{marginTop: "11vh", fontWeight: "500", margin: "3vw"}}>
          <div style={{marginLeft: '7vw', fontSize: "6vh"}}>Domestic Tour</div>
          <div style={{ minHeight: "100px" }}>
            <span style={{color: "#6E7491"}}>Explore unique <span style={{color: "#5CD6C0"}}>places to stay</span></span>
            <button className="allMenu">
              <div>All</div>
              <img src={require("../../assets/icons/arrowRight.png")} alt="arrowRight" style={{width: "3vh", marginLeft: "0.2vw"}}/>
            </button>
          </div>
          <motion.div className="imageBox">
            <motion.div className="polaroid">
              <img src={Maldives} style={{ width: "100%", borderRadius: "20px" }} />
              <motion.div className="container">
                <h5>
                  Stay among the atolls in{" "}
                  <span style={{ color: "#49DEC3" }}>Maldives</span>
                </h5>
                <p>
                  Known as the "Money Island" due to the abundance of cowry shells
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="polaroid">
              <img src={Morocco} style={{ width: "100%", borderRadius: "20px" }} />
              <motion.div className="container">
                <h5>
                  Explore the Ourika Valley in{" "}
                  <span style={{ color: "#49DEC3" }}>Morocco</span>
                </h5>
                <p>
                  Morocco's Hispano-Moorish architecture blends influences from
                  Berber culture.
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="polaroid">
              <img src={Mongolia} style={{ width: "100%", borderRadius: "20px" }} />
              <motion.div className="container">
                <h5>
                  Live traditionally in{" "}
                  <span style={{ color: "#49DEC3" }}>Mongolia</span>
                </h5>
                <p>Traditional Mongolian yurts consist of an angled latticewood</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>


      <motion.div
        style={{ backgroundImage: `url(${IntBG})`, flexDirection: "column", marginTop: "20vh", paddingTop: "2vh", paddingBottom: "3vh"}}
      >
        <div style={{margin: "3vw"}}>
          <div style={{marginLeft: '7vw', fontSize: "6vh", color: "#F6F893", fontWeight: "bold",}}>International Tours</div>
            <div style={{ minHeight: "100px" }}>
              <span style={{color: "#6E7491"}}>Explore unique <span style={{color: "#22C3A6"}}>places to stay</span></span>
              <button className="allMenu">
                <div style={{color: "black"}}>All</div>
                <img src={require("../../assets/icons/blackArrowRight.png")} alt="arrowRight" style={{width: "3vh", marginLeft: "0.2vw"}}/>
              </button>
            </div>
            <motion.div className="imageBox">
              <motion.div className="polaroid">
                <img src={Maldives} style={{ width: "100%", borderRadius: "20px" }} />
                <motion.div className="container">
                  <h5>
                    Stay among the atolls in{" "}
                    <span style={{ color: "#49DEC3" }}>Maldives</span>
                  </h5>
                  <p>
                    Known as the "Money Island" due to the abundance of cowry shells
                  </p>
                </motion.div>
              </motion.div>
              <motion.div className="polaroid">
                <img src={Morocco} style={{ width: "100%", borderRadius: "20px" }} />
                <motion.div className="container">
                  <h5>
                    Explore the Ourika Valley in{" "}
                    <span style={{ color: "#49DEC3" }}>Morocco</span>
                  </h5>
                  <p>
                    Morocco's Hispano-Moorish architecture blends influences from
                    Berber culture.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div className="polaroid">
                <img src={Mongolia} style={{ width: "100%", borderRadius: "20px" }} />
                <motion.div className="container">
                  <h5>
                    Live traditionally in{" "}
                    <span style={{ color: "#49DEC3" }}>Mongolia</span>
                  </h5>
                  <p>Traditional Mongolian yurts consist of an angled latticewood</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div> 
        </motion.div>

          <div style={{margin: "3vw"}}>
            <div style={{marginLeft: '7vw', fontSize: "6vh", color: "#black", fontWeight: "bold",}}>Customer’s Feedback</div>
              <div style={{ minHeight: "100px" }}>
                <span style={{color: "#6E7491"}}>Explore <span style={{color: "#22C3A6"}}>subjective feedbacks</span>from <span style={{color: "#22C3A6"}}>customers</span></span>
                <button className="allMenu">
                  <div style={{color: "black"}}>All</div>
                  <img src={require("../../assets/icons/blackArrowRight.png")} alt="arrowRight" style={{width: "3vh", marginLeft: "0.2vw"}}/>
                </button>
              </div>
              <motion.div className="reviewContainer">
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
                <motion.div className="reviewGrid">
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <motion.h1 style={{fontSize: '3.5vh', fontWeight: 'bold'}}>Hang Le</motion.h1>
                    <div  style={{display: "flex", flexDirection: "column"}} >
                    <StarRatings
                      rating={5}
                      numberOfStars={5}
                      starRatedColor="yellow"
                      name='rating'
                      starDimension="2vh"
                      starSpacing="0.1vw"
                    />
                    </div>
                  </div>

                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: '2vh'}}>
                    <motion.h3>Sài Gòn - Sapa</motion.h3>
                    <motion.h5>
                      28-09-2023
                    </motion.h5>
                  </div>
                  <motion.br></motion.br>
                  <motion.p>
                    Sapa is an amazing place, so I highly recommend you MyAdventure
                    agency because of nice service!
                  </motion.p>
                </motion.div>
              </motion.div>
          </div>
          <Footer/>
        </div>
      {/* <motion.h1>&nbsp;&nbsp;&nbsp;&nbsp;Domestic Tours</motion.h1>
      <div style={{ minHeight: "100px" }}>
        <motion.h2 animate={{ display: "flex", float: "left" }}>
          &nbsp;&nbsp;Explore unique places to stay
        </motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>

      <motion.div className="imageBox">
        <motion.div className="polaroid">
          <img src={Maldives} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Stay among the atolls in{" "}
              <span style={{ color: "#49DEC3" }}>Maldives</span>
            </h5>
            <p>
              Known as the "Money Island" due to the abundance of cowry shells
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Morocco} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Explore the Ourika Valley in{" "}
              <span style={{ color: "#49DEC3" }}>Morocco</span>
            </h5>
            <p>
              Morocco's Hispano-Moorish architecture blends influences from
              Berber culture.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Mongolia} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Live traditionally in{" "}
              <span style={{ color: "#49DEC3" }}>Mongolia</span>
            </h5>
            <p>Traditional Mongolian yurts consist of an angled latticewood</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1 style={{ color: "#F6F893" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;International Tours
      </motion.h1>
      <div style={{ minHeight: "100px" }}>
        <motion.h2 animate={{ display: "flex", float: "left" }}>
          &nbsp;&nbsp;Explore unique places to stay
        </motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>

      <motion.div
        className="imageBox"
        style={{ backgroundImage: `url(${IntBG})`, minHeight: "670px" }}
      >
        <motion.div className="polaroid">
          <img src={Maldives} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Stay among the atolls in{" "}
              <span style={{ color: "#49DEC3" }}>Maldives</span>
            </h5>
            <p>
              Known as the "Money Island" due to the abundance of cowry shells
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Morocco} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Explore the Ourika Valley in{" "}
              <span style={{ color: "#49DEC3" }}>Morocco</span>
            </h5>
            <p>
              Morocco's Hispano-Moorish architecture blends influences from
              Berber culture.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Mongolia} style={{ width: "100%", borderRadius: "20px" }} />
          <motion.div className="container">
            <h5>
              Live traditionally in{" "}
              <span style={{ color: "#49DEC3" }}>Mongolia</span>
            </h5>
            <p>Traditional Mongolian yurts consist of an angled latticewood</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1>&nbsp;&nbsp;&nbsp;&nbsp;Customer's Feedbacks</motion.h1>
      <div style={{ minHeight: "100px" }}>
        <motion.h2 animate={{ display: "flex", float: "left" }}>
          &nbsp;&nbsp;Explore{" "}
          <span style={{ color: "#49DEC3" }}>subjective feedbacks</span> from
          customers
        </motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>

      <motion.div className="reviewContainer">
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1>
          <br></br>
          <motion.h3 style={{ display: "inline" }}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{ display: "inline", float: "right" }}>
            28-09-2023
          </motion.h5>
          <motion.p>
            Sapa is an amazing place, so I highly recommend you MyAdventure
            agency because of nice service!
          </motion.p>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default BookingStepOne;
