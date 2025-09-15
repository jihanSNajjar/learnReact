import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {/* <img src={props.item.image} className='card--image'  loading='lazy' alt=' card img'/> */}
      <div
        className="card--image"
        style={{
          backgroundImage: `url(${props.item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          لاشckgroundPosition: "center",

        }}
      ></div>
      <h3 className="card--name">{props.item.name}</h3>
      <p className="card--price">${props.item.price}$ night</p>
      <p className="card--description">{props.item.description}</p>
    </div>
  );
};

export default Card;
