import React from "react";
import "./style.css";

const LogoCard = (props) => (
    <div className="card" >
      <div className="img-container">
        <img alt={props.name} src={props.image} 
        key={props.id} id = {props.id}
        onClick={() => props.handleClick(props.id)} />
      </div>
    </div>
  );

export default LogoCard;

