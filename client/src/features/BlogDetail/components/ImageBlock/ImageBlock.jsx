import React from "react";

import "./ImageBlock.scss";

const ImageBlock = ({ images }) => {
  return (
    <div className="image__block">
      {images.length ? (
        images.map((img, idx) => (
          <div className="block__picture" key={idx + "img"}>
            <img src={img.img} alt="img-block" />
            <p>{img?.text}</p>
          </div>
        ))
      ) : (
        <p>Images not found</p>
      )}
    </div>
  );
};

export default ImageBlock;
