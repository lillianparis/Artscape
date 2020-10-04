import React from "react";
import "./style.css";

function studio() {
  return (
    <div className="studioheading text-center">
      <img
        src="https://via.placeholder.com/200"
        alt="..."
        class="rounded-circle"
      ></img>
      <p className="artistname">Artist Name</p>
      <hr className="my-4" />
      <p className="artistinfo">Artist Info</p>
    </div>
    
  );
}

export default studio;
