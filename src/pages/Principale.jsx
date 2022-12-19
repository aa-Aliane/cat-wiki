import React from "react";
import Home from "../components/Home";
import Description from "../components/Description";
import Footer from "../components/Footer";
import { useTabStore } from "../Stores/tabState";

const Principale = () => {
  const currentTab = useTabStore((state) => state.currentTab);

  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content__menu"></div>
        {currentTab === "Home" && <Home />}
        {currentTab === "Description" && <Description />}
        {/* <Description /> */}
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Principale;
