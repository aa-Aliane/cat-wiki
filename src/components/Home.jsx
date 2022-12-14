import React from "react";
import Carousel from "./Carousel";
import List from "./List";

const Home = () => {
  return (
    <div className="home">
      {/* section 1 */}
      <div className="home__first-section">
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
      <div className="home__second-section">
        <div className="message">
          <span>most</span> searched breeds
        </div>
        <div className="message">66+ breeds for you to discover</div>
        <Carousel />
      </div>
      {/* section 3*/}
      <div className="home__third-section">
        <div>why you should have a cat?</div>
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
    </div>
  );
};

export default Home;
