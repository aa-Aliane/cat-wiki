import React from "react";
import Img from "./Img";
import InfoCard from "./InfoCard";
import OtherPhotos from "./OtherPhotos";
import { useCatsStore } from "../Stores/catsState";

const Description = () => {
  const selected = useCatsStore((state) => state.selected);
  return (
    <div className="description">
      <div className="description__first-section">
        <Img id={selected.id} />
        <InfoCard selected={selected}/>
      </div>
      <div className="description__second-section">
        <OtherPhotos id={selected.id}/>
      </div>
    </div>
  );
};

export default Description;
