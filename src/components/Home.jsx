import React, { useState } from "react";
import Carousel from "./Carousel";
import List from "./List";
import { api } from "../api/api";
import { useEffect } from "react";
import { useCatsStore } from "../Stores/catsState";
import { useTabStore } from "../Stores/tabState";
import { useInput } from "../hooks/useInput";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [breedsRendered, setBreedsRendered] = useState([]);
  const initBreeds = useCatsStore((state) => state.initCats);
  const breeds = useCatsStore((state) => state.cats);
  const selectBreed = useCatsStore((state) => state.selectCat);
  const setCurrentTab = useTabStore((state) => state.setCurrentTab);

  // keyword input for the search engine
  const [input, setInput] = useInput({
    keyword: "",
  });

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

  //Handle search
  useEffect(() => {
    let value = input.keyword.toLowerCase();
    if (value.length !== 0) {
      {
        console.log(value.length === 0, value, breedsRendered);
        setBreedsRendered(
          breeds.filter((breed) => {
            let name = breed.name.toLowerCase();
            return name.includes(value);
          })
        );
      }
    } else {
      console.log("else : ", value.length === 0, value, breedsRendered);
      setBreedsRendered([]);
    }
  }, [input]);

  // Handle Breed Selection
  const HandleBreedSelection = (item) => {
    selectBreed(item);
    setCurrentTab("Description");
  };

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
              value={input.keyword}
              onChange={(e) => setInput(e.target.value, "keyword")}
            />
            <span class="material-icons">search</span>
          </div>
          <List items={breedsRendered} HandleSelect={HandleBreedSelection} />
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
