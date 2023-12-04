import React from "react";
import "./styles.css";

import Avatar from "../../images/avatar.png";
import { motion } from "framer-motion";

const CompanyCard = ({ avatar, name, role, details }) => {
  return (
    <motion.div className="companyCardContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <img src={avatar} alt="employee-avatar" style={{ width: "30%" }} />
        <h1 className="companyCardName" style={{ marginTop: "2.5vh" }}>
          {name}
        </h1>
        <h2 className="companyCardRole" style={{ marginTop: "1.25vh" }}>
          {role}
        </h2>
        <div className="detailsContainer">
          <p className="companyCardDetails">{details[0]}</p>
          <p className="companyCardDetails">{details[1]}</p>
          <p className="companyCardDetails">{details[2]}</p>
          <p className="companyCardDetails">{details[3]}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyCard;
