import React from "react";

export default function Card(props) {
  return (
    <div className="card my-4 mx-3 cardd ">
      <div style={{ width: "280px", overflow:"hidden" }} >

      <img
        src={props.img}
        className="card-imdg-top"
        alt="..."
        />
        </div>
      <div className="card-body">
        <p style={{ marginTop: props.mar }} className="card-text">
          {props.description}
        </p>
      </div>
    </div>
  );
}
