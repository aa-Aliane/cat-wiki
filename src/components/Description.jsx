import React from "react";
import Img from "./Img";
import InfoCard from "./InfoCard";
import OtherPhotos from "./OtherPhotos"

const Description = () => {
  return (
    <div className="description">
      <div className="description__first-section">
        <Img />
        <InfoCard />
      </div>
      <div className="description__second-section">
        <OtherPhotos />
      </div>
    </div>
  );
};

export default Description;
