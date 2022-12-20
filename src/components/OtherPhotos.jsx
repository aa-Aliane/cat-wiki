import React from "react";
import { useEffect } from "react";
import { api } from "../api/api";

const OtherPhotos = ({ id }) => {
  useEffect(() => {
    api.post("/breed", { id: id, all: true }).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="photos">
      <h1 className="photos__title">other photos</h1>
      <ul className="photos__gallery">
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
        <li className="photos__gallery__item"></li>
      </ul>
    </div>
  );
};

export default OtherPhotos;
