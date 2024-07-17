import React from "react";
import avt1 from "./img/avt2.jpg";
import "./index.css";

const User = function (props) {
return (
<div className="card">
    <a href="#">
    <img src={props.image} alt="avtimg" />
    </a>
    <div className="content">
    <a className="author" href="#">{props.name}</a>
    <div className="metadata">    
    today is  <span className="date"> {props.date} </span></div>
    <div className="comment">"{props.comments}"<span></span></div>
    </div>
</div>
);
};

export default User;
