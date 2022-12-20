import React from "react";
import { useEffect } from "react";

const InfoCard = ({ selected }) => {
  useEffect(() => {
    console.log(selected);
  }, []);
  return (
    <ul className="info-card">
      <li className="info-card__general">
        <h1 className="pb-1">{selected.name}</h1>
        <p className="fw-semi-bold text-neutral-700">{selected.description}</p>
      </li>

      <li className="info-card__char1">
        <h4>temperament:</h4>
        {selected.temperament}
      </li>
      <li className="info-card__char1">
        <h4>Origin:</h4>
        {selected.origin}
      </li>
      <li className="info-card__char1">
        <h4>Life Span:</h4>
        {selected.life_span}
      </li>
      <li className="info-card__char2">
        <h4>adaptibility: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.adaptability)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>affection level: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.affection_level)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>child friendly: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.child_friendly)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>grooming: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.grooming)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>intelligence: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.intelligence)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>health issues: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.health_issues)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>social needs: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.social_needs)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
      <li className="info-card__char2">
        <h4>stranger friendly: </h4>
        {[0, 1, 2, 3, 4].map((r) => {
          if (r < selected.stranger_friendly)
            return <span activated-state={"true"}></span>;
          else return <span activated-state={"false"}></span>;
        })}
      </li>
    </ul>
  );
};

export default InfoCard;
