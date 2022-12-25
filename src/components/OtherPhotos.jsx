import React from "react";
import { useState, useEffect } from "react";
import { api } from "../api/api";

const OtherPhotos = ({ id }) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    api
      .post("/breed", { id: id, limit: 8 })
      .then((res) => setCats(res.data.slice(0, 8)));
  }, []);
  return (
    <div className="photos">
      <h1 className="photos__title">other photos</h1>
      <div className="photos__gallery">
        {cats.map((cat, i) => (
          <img
            className="photos__gallery__item"
            key={`cat${i}`}
            src={cat.url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default OtherPhotos;
