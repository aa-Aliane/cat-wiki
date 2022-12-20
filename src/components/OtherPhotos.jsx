import React from "react";
import { useState, useEffect } from "react";
import { api } from "../api/api";
import { useCatsStore } from "../Stores/catsState";

const OtherPhotos = ({ id }) => {
  const cats = useCatsStore((state) => state.breedRandomImgs);
  const setCats = useCatsStore((state) => state.initBreedRandomImgs);

  useEffect(() => {
    let all = [];
    setCats([]);
    for (let i = 0; i < 8; i++)
      (async () => {
        let p = new Promise(async (resolve) => {
          let res = await api.post("/breed", { id: id });
          resolve(res.data);
        });
        p.then((cat) => {
          if (!all.map((c) => c.id).includes(cat.id)) {
            all = [...all, cat];
            setCats([...all, cat]);
          }
          console.log();
        });
      })();
  }, []);
  return (
    <div className="photos">
      <h1 className="photos__title">other photos</h1>
      <ul className="photos__gallery">
        {cats.map((cat, i) => (
          <li className="photos__gallery__item" key={`cat${i}`}>
            <img src={cat.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherPhotos;
