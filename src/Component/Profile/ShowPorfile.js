import React from "react";

const ShowPorfile = (props) => {
  return (
    <div>
      <button onClick={() => props.handelShow()}>Show</button>
    </div>
  );
};

export default ShowPorfile;
