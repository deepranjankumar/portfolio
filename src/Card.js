import React from 'react';
import './index.css'
const Card=(props)=>{
    return(<>
    <div className="container">
      <div className="img">
        <img src={props.img} alt="buffet"/>
      </div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.para} </p>
        <div className="row">
          <h1 className="price ">{props.price}</h1>
          <button className="order">Order Now</button>
        </div>
        <p>{props.tag}</p>
      </div>
    </div>
    </>)
}
export default Card;