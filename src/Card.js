import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
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
          backgroundPosition: "center",

        }}
      ></div>
    <div className="card--stats" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 10px',lineHeight:'.15',marginTop:'10px'}}>
 <h3 className="card--name"style={{}}>{props.item.name}</h3>
<FaStar color="yellow" size={25} />
    </div>
     

      <p style={{paddingLeft:"10px",marginTop:"0"}} className="card--price">
        <span style={{fontWeight:"bold",fontSize:"21px"}}>${props.item.price}  
          </span> night</p>
      <p style={{paddingLeft:"10px"}} className="card--description">{props.item.description}</p>
    </div>
  );
};

export default Card;
