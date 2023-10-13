import React from "react";
import Header from "../../component/Header/index";
import MainTabbar from "../../component/MainTabbar/MainTabbar";
import IntroBackground from "../../component/IntroBackground/IntroBackground";
import { TourSearch } from "../../component/TourSearch/TourSearch";
import { motion } from "framer-motion";
import { Maldives,Mongolia,Morocco,IntBG } from "../../assets/images";
import "./styles.css";

const BookingStepOne = () => {
  return (
    <div>
      <Header></Header>
      <MainTabbar></MainTabbar>
      <div>
        <IntroBackground style="position:absolute;"></IntroBackground>
        <TourSearch style="position:absolute;z-index:4;"></TourSearch>
      </div>
      <motion.h1>&nbsp;&nbsp;&nbsp;&nbsp;Domestic Tours</motion.h1>
      <div style={{minHeight:"100px",}}>
        <motion.h2 animate={{display:"flex",float:"left",}}>&nbsp;&nbsp;Explore unique places to stay</motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>
      
      <motion.div className="imageBox">
        <motion.div className="polaroid">
          <img src={Maldives} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
            <h5>Stay among the atolls in <span style={{color:"#49DEC3"}}>Maldives</span></h5>
            <p>Known as the "Money Island" due to the abundance of cowry shells</p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Morocco} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
          <h5>Explore the Ourika Valley in <span style={{color:"#49DEC3"}}>Morocco</span></h5>
          <p>Morocco's Hispano-Moorish architecture blends influences from Berber culture.</p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Mongolia} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
          <h5>Live traditionally in <span style={{color:"#49DEC3"}}>Mongolia</span></h5>
          <p>Traditional Mongolian yurts consist of an angled latticewood</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1 style={{color:"#F6F893",}}>&nbsp;&nbsp;&nbsp;&nbsp;International Tours</motion.h1>
      <div style={{minHeight:"100px",}}>
        <motion.h2 animate={{display:"flex",float:"left",}}>&nbsp;&nbsp;Explore unique places to stay</motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>

      <motion.div className="imageBox" style={{backgroundImage:`url(${IntBG})`,minHeight:"670px",}}>
        <motion.div className="polaroid">
          <img src={Maldives} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
            <h5>Stay among the atolls in <span style={{color:"#49DEC3"}}>Maldives</span></h5>
            <p>Known as the "Money Island" due to the abundance of cowry shells</p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Morocco} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
          <h5>Explore the Ourika Valley in <span style={{color:"#49DEC3"}}>Morocco</span></h5>
          <p>Morocco's Hispano-Moorish architecture blends influences from Berber culture.</p>
          </motion.div>
        </motion.div>
        <motion.div className="polaroid">
          <img src={Mongolia} style={{width:"100%",borderRadius:"20px"}}/>
          <motion.div className="container">
          <h5>Live traditionally in <span style={{color:"#49DEC3"}}>Mongolia</span></h5>
          <p>Traditional Mongolian yurts consist of an angled latticewood</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1>&nbsp;&nbsp;&nbsp;&nbsp;Customer's Feedbacks</motion.h1>
      <div style={{minHeight:"100px",}}>
        <motion.h2 animate={{display:"flex",float:"left",}}>&nbsp;&nbsp;Explore <span style={{color:"#49DEC3"}}>subjective feedbacks</span> from customers</motion.h2>
        <motion.a className="allMenu">All</motion.a>
      </div>

      <motion.div className="reviewContainer">
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
        <motion.div className="reviewGrid">
          <motion.h1>Hang Le</motion.h1><br></br>
          <motion.h3 style={{display:"inline",}}>Sài Gòn - Sapa</motion.h3>
          <motion.h5 style={{display:"inline",float:"right",}}>28-09-2023</motion.h5>
          <motion.p>Sapa is an amazing place, so I highly recommend you MyAdventure agency because of nice service!</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingStepOne;