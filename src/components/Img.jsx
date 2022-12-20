import React, { useState, useEffect } from "react";
import { api } from "../api/api";

const Img = ({ id }) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    api.post("/breed", { id: id }).then((res) => {
      console.log(res.data);
      setImg(res.data);
    });
  }, []);
  return (
    <div className="img-container">
      <img
        className="img-container__img"
        src={img.url}
        alt=""
      />
    </div>
  );
};

export default Img;
