import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export class TourSearch extends React.Component {
    render() {
      return (
        <div className="contentView">
          <motion.form>
            <motion.label
                for="depart"
                className="contentText"
                //style="display:block;"
            >
                Depart from-Arrive to
            </motion.label>
            <motion.select id="depart" name="depart" className="box">
                <motion.option value="au">Australia</motion.option>
            </motion.select>
          </motion.form>
          
          <motion.form>
            <motion.label
                for="dtime"
                className="contentText"
                //style="display:block;"
            >
                Departing
            </motion.label>
            <motion.input type="text" id="dtime" name="dtime" placeholder="dd/mm/yyyy" className="box"/>
          </motion.form>
          <motion.form>
            <motion.label
                for="rtime"
                className="contentText"
                //style="display:block;"
            >
                Returning
            </motion.label>
            <motion.input type="text" id="rtime" name="rtime" placeholder="dd/mm/yyyy" className="box"/>
          </motion.form>
          <motion.form>
            <motion.label
                for="numAdult"
                className="contentText"
                //style="display:block;"
            >
                Adult
            </motion.label>
            <motion.input type="number" id="numAdult" name="numAdult" className="box" min="0"/>
          </motion.form>
          <motion.form>
            <motion.label
                for="numChild"
                className="contentText"
                //style="display:block;"
            >
                Child (under 16)
            </motion.label>
            <motion.input type="number" id="numChild" name="numChild" className="box" min="0"/>
          </motion.form>
          <motion.div className="contentText signUp" whileTap={{ scale: 1.5 }}>
            Next Step
          </motion.div>
        </div>
      );
    }
  }

  