import React from "react";

const ImageItems = ({ id, image }) => {
  return (
    <div>
      <img src={image} alt={id} style={{ maxWidth: "100px" }} />
    </div>
  );
};

export default ImageItems;
