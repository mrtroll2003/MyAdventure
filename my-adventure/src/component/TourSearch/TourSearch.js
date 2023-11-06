import React from 'react'
import { motion } from "framer-motion";
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';


const TourSearch = ()  =>{
  const navigate = useNavigate();
  return (
    <div className={styles.contentView}>
      <div>
        <div style={{color: "#5CD6C0"}}>Depart From -Arrive To</div>
        <motion.select id="depart" name="depart" className={styles.box}>
          <motion.option value="" disabled selected>Choose your tour</motion.option>
          <motion.option value="au">Australia</motion.option>
        </motion.select>
      </div>

      <div style={{marginLeft: "2vw"}}>
        <div style={{color: "#5CD6C0"}}>Departing</div>
        <motion.input type="date" id="dtime" name="dtime" placeholder="dd/mm/yyyy" className={styles.box}/>
      </div>

      <div style={{marginLeft: "2vw"}}>
        <div style={{color: "#5CD6C0"}}>Returning</div>
        <motion.input type="date" id="dtime" name="dtime" placeholder="dd/mm/yyyy" className={styles.box}/>
      </div>

      <div style={{marginLeft: "2vw"}}>
        <div style={{color: "#5CD6C0"}}>Adult</div>
        <motion.input type="number" id="numAdult" name="numAdult" className={styles.box} min="0" style={{width: "5vw"}}/>
      </div>

      <div style={{marginLeft: "2vw"}}>
        <div style={{color: "#5CD6C0"}}>Children (under 16)</div>
        <motion.input type="number" id="numAdult" name="numAdult" className={styles.box} min="0" style={{width: "5vw"}}/>
      </div>

      <motion.button className={styles.signUp} whileTap={{ scale: 1.5 }}
      onClick={() => {
        navigate('/booking-step-two');
      }}>
        Next Step
      </motion.button>
      
    </div>
  )
}

export default TourSearch;