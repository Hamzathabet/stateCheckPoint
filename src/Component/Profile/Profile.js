import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const styleProfile={color :"orange" , textAlign :"center" ,paddingTop:"4em"};

  return (
    <div style={styleProfile} className="card" >
      <span className="vue"> Seen : {props.counter}</span>
      <h1>{props.fullname}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <em>{props.default}</em>
      
    </div>
  );
};
Profile.defaultProps = {
  fullname: "Hamza",
  bio :"i exist",
  profession :"dev",
  default:"this is a default props"
};
Profile.propsTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};
export default Profile;
