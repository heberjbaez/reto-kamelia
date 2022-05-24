import React from "react";
import "../assets/styles/User.css"

export default function User({ name, img }) {
  return (
    <div className="card" >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}
