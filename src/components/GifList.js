import React from "react";
import Gif from "./Gif";

const GiftList = (props) => {
  console.log(props)
  const list = props.gifs.map((gif, index) => {
    return <Gif key={index} image={gif.images.original} staticUrl={gif.images["480w_still"].url}/>
  });
  return (
    <ul>
      {list}
    </ul>
  );
}

export default GiftList;