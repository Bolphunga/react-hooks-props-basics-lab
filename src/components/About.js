import React from "react";
import user from "../data/user";

function Links(props) {
  return(
    <div>
       <h3>Links</h3>
       <a href="#GitHub">{props.github}</a>
       <a href="#Linkedin">{props.linkedin}</a>
    </div>
  )
}

//{!isBio ? null : props.bio}
function About(props) {
  const isBio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{!isBio ? null : props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links  github={user.links.github} linkedin={user.links.linkedin}  />
    </div>
  )
}

export default About;
