import React, { useState } from "react";

const Box = (props) => {
  const handleLearnMoreClick = () => {
    window.location.href = props.url;
  };

  return (
    <div className="box">
      <h5>{props.name}</h5>
      <img src={props.img} alt='' />
      <button onClick={handleLearnMoreClick}>Learn More!</button>
    </div>
  );
}

export default Box;
