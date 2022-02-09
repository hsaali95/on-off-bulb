import React from "react";
import image1 from "../images/bulb-off.png";
import image2 from "../images/bulb-on.png";
import "./header.css";
import { useState } from "react";

const BulbOnOff = () => {
  let [bulbOn, setBulbOff] = useState(true);
  console.log(bulbOn);
  let switchBulb = () => {
    setBulbOff(!bulbOn);
  };
  let changeSrc = bulbOn ? image1 : image2;
  return (
    <>
      <div className="bulbButtonConatiner">
        <div className="bulbContainer">
          {/* <p>value is{bulbOn}</p> */}

          <img className="bulbImage" src={changeSrc} alt="imagee" />
        </div>
        {/* <button onClick={switchBulb}>click</button> */}

        <div className="buttonContainer">
          <label className="switch">
            <input type="checkbox" onClick={switchBulb} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </>
  );
};
export default BulbOnOff;
