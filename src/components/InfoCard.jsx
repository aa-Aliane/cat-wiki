import React from "react";

const InfoCard = () => {
  return (
    <ul className="info-card">
      <li className="info-card__general">
        <h1 className="pb-1">Bengal</h1>
        <p className="fw-semi-bold text-neutral-700">
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </p>
      </li>

      <li className="info-card__char1">
        <h4>temperament:</h4>Alert, Agile, Energetic, Demanding, Intelligent
      </li>
      <li className="info-card__char1">
        <h4>Origin:</h4>United States
      </li>
      <li className="info-card__char1">
        <h4>Life Span:</h4>12 - 15 years
      </li>
      <li className="info-card__char2">
        <h4>adaptibility: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>affection level: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>child friendly: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>grooming: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>intelligence: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>health issues: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>social needs: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
      <li className="info-card__char2">
        <h4>stranger friendly: </h4>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
        <span activated-state={false}></span>
      </li>
    </ul>
  );
};

export default InfoCard;
