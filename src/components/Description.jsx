import React from "react";
import Img from "./Img";
import InfoCard from "./InfoCard";
import OtherPhotos from "./OtherPhotos";
import { useCatsStore } from "../Stores/catsState";
import { useTabStore } from "../Stores/tabState";

const Description = () => {
  const selected = useCatsStore((state) => state.selected);
  const setCurrentTab = useTabStore((state) => state.setCurrentTab);
  return (
    <div className="description">
      <span
        className="material-icons description__back-home"
        onClick={() => setCurrentTab(1)}
      >
        keyboard_backspace
      </span>
      <div className="description__first-section">
        <Img id={selected.id} />
        <InfoCard selected={selected} />
      </div>
      <div className="description__second-section">
        <OtherPhotos id={selected.id} />
      </div>
    </div>
  );
};

export default Description;
