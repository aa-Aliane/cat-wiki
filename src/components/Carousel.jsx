import React from "react";

const Carousel = () => {
  return (
    <div className="carousel">
      <ul className="carousel__list">
        <li className="carousel__list__item">
          <div></div>
          <p className="fs-m fw-semi-bold pt-0">bengal</p>
        </li>
        <li className="carousel__list__item">
          <div></div>
          <p className="fs-m fw-semi-bold pt-0">savanahh</p>
        </li>
        <li className="carousel__list__item">
          <div></div>
          <p className="fs-m fw-semi-bold pt-0">norweigian forest cat</p>
        </li>
        <li className="carousel__list__item">
          <div></div>
          <p className="fs-m fw-semi-bold pt-0">selkirk rex</p>
        </li>

        <div className="carousel__list__seemore">
          see more <span class="material-icons">trending_flat</span>
        </div>
      </ul>
    </div>
  );
};

export default Carousel;
