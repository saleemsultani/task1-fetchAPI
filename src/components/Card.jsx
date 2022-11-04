import React from "react";

function Card(props) {
  return (
    <div className="country">
      <img className="country__img" src={props.flag} alt="country flag" />
      <div className="country__data">
        <h3 class="country__name">{props.name}</h3>
        <h4 class="country__region">{props.subregion}</h4>
        <p class="country__row">
          <span>👫</span>
          {(+props.population / 1000000).toFixed(1)}M people
        </p>
        <p className="country__row">
          <span>🗣️</span> {props.language}
        </p>
        <p class="country__row">
          <span>✡️</span>
          {props.capital?.[0]}
        </p>
      </div>
    </div>
  );
}

export default Card;
