import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(fab, faSun, faSnowflake);

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    icon: "sun"
  },
  winter: {
    text: "Burr its Cold maaaan!",
    icon: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h4><FontAwesomeIcon className="icons icon-left " icon={icon} /></h4>

      <h1 className="displayS">{text}</h1>
      <h4><FontAwesomeIcon className="icons icon-right" icon={icon} /></h4>
    </div>
  );
};

export default SeasonDisplay;
