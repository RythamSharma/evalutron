import React from "react";

export default function Card(props) {
  return (
    <div className="card my-4 mx-3" style={{width:"18rem", height:'350px' }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p style={{marginTop: props.mar}} className="card-text">
          {props.description}
        </p>
      </div>
    </div>
  );
}
