import React from "react";
import "./style.css";

const Loading = (props, event) => {
  return (
    <div className="loader">
      <h3 className="loadMessage u-margin-top-huge ">{props.message}</h3>
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__ball" />
    </div>
  );
};

Loading.defaultProps = {
  message: 'Loading...'
};

export default Loading;
