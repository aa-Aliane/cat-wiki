import React from "react";
import Home from "../components/Home";
import Description from "../components/Description";
import Footer from "../components/Footer";


const Principale = () => {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content__menu"></div>
        {/* <Home /> */}
        <Description />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Principale;
