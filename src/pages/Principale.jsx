import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer"
import List from "../components/List";

const Principale = () => {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__content__menu"></div>
        {/* section 1 */}
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
              <List />
            </div>
            
          </div>
        </div>
        {/* section 2 */}
        <div className="main__content__second">
          <div className="message">
            <span>most</span> searched breeds
          </div>
          <div className="message">66+ breeds for you to discover</div>
          <Carousel />
        </div>
        {/* section 3*/}
        <div className="main__content__third">
          <div>
            why you should have a cat?
          </div>
          <div>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </div>
          <div>
            read more <span class="material-icons">trending_flat</span>
          </div>
          <div>
            <img src="src/assets/image1.png" alt="" />
          </div>
          <div>
            <img src="src/assets/image2.png" alt="" />
          </div>
          <div>
            <img src="src/assets/image3.png" sizes="800px 200px" alt="" />
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Principale;
