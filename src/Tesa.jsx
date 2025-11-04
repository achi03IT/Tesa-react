import React from "react";
import "./tesa.css";
const Tesa = (props) => (
    <div className="beverage-card">
        <img src={`/images/${props.image}`} alt={props.name} />
        <h3 className="card-title">{props.name}</h3>
        <p className="card-description">{props.description}</p>
        <span className="card-price">{props.price}</span>
    </div>
);
export default Tesa;