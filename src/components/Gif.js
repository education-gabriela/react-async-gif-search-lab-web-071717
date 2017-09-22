import React from "react";

const Gif = (props) => {
  return (
    <li>
      <img src={props.image.url} />
    </li>
  );
}

export default Gif;