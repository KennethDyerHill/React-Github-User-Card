import React from "react";
import "./Cards.css";

const Cards = (props) => {

    return(
        <div className="cards">
          <h3>{props.data.name}</h3>
          <img className="cards-img" src={props.data.avatar_url}></img>
          <p>Bio: {props.data.bio}</p>
          <p>Location: {props.data.location}</p>
          <a href={props.data.repos_url}>Projects</a>
          <br />
          <a href="https://api.github.com/users/KennethDyerHill/following">Following</a>
          <br />
          <a href={props.data.followers_url}>Followers</a>
        </div>
    )
}

export default Cards;