import React from "react";
import Carousel from "../components/Carousel";

const Principale = () => {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content__menu"></div>
        <div className="main__content__first">
          <div>
            <img src="src/assets/CatwikiLogo.svg" alt="" />
            <div className="fs-xl fw-medium">
              Get to know more about your cat breed
            </div>
            <div>
              <input
                className="clr-primary-800"
                type="text"
                placeholder="enter you breed here"
              />
              <span class="material-icons">search</span>
            </div>
          </div>
        </div>
        <div className="main__content__second">
          <div className="message">
            <span>most</span> searched breed
          </div>
          <div className="message">66+ breeds for you to discover</div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Principale;
