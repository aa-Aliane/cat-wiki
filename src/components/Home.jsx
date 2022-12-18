import React, { useState } from "react";
import Carousel from "./Carousel";
import List from "./List";
import { api } from "../api/api";
import { useEffect } from "react";
import { useCatsStore } from "../Stores/catsState";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [breedsRendered, setBreedsRendered] = useState([]);
  const initBreeds = useCatsStore((state) => state.initCats);
  const breeds = useCatsStore((state) => state.cats);

  const HandleSearch = (e) => {
    setBreedsRendered(
      breeds.filter((breed) => breed.name.includes(e.target.value))
    );
  };

  

  // random cats
  useEffect(() => {
    api.get("/random").then((res) => {
      console.log(res.data);
      setCats(res.data);
    });

    api.get("/breeds").then((res) => {
      initBreeds(res.data);
      console.log(breeds.length);
    });
  }, []);

  return (
    <div className="home">
      {/* section 1 */}
      {breeds.length}
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
              onKeyDown={HandleSearch}
            />
            <span class="material-icons">search</span>
          </div>
          <List
            items={breedsRendered}
            
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="home__second-section">
        <div className="message">
          <span>most</span> searched breeds
        </div>
        <div className="message">66+ breeds for you to discover</div>
        <Carousel cats={cats} />
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
