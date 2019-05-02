import React from "react";
import './style.css';

const Loading = (props) => {
  return (
    <div className="loader">{props.message}
     <div className="loader__bar"></div>
     <div className="loader__bar"></div>
     <div className="loader__bar"></div>
     <div className="loader__bar"></div>
     <div className="loader__bar"></div>
     <div className="loader__ball"></div>
   </div>
     
  )
};

export default Loading;