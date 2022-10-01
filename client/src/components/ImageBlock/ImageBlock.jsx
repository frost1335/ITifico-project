import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultImg } from "../../assets";
import { useImgExsist } from "../../hooks/useImgExsist";
import { useGetImagesQuery } from "../../services/imagesApi";

import "./ImageBlock.scss";

export const Image = (img, idx) => {
  const imgExsist = useImgExsist(img?.img);
  const description = useRef(null);

  useEffect(() => {
    description.current.innerHTML = img?.description || "";
  });

  return (
    <div className="block__picture" key={idx + "img"}>
      <img
        src={
          imgExsist
            ? process.env.REACT_APP_BASE_URL + "/Uploads/" + img
            : defaultImg
        }
        alt="img-block"
      />
      <p ref={description}>{img?.description || ""}</p>
    </div>
  );
};

const ImageBlock = ({ data, index, component }) => {
  const { lessonId, blogId } = useParams();
  const { data: imageList, isLoading } = useGetImagesQuery(component);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      let imageClone = imageList?.data.filter((img) => {
        if (component === "article") {
          return img.parentId === blogId;
        }
        if (component === "lesson") {
          return img.parentId === lessonId;
        }
        return img;
      });

      imageClone = imageClone.filter((img) => img.index === index);

      setImage([...imageClone]);
    }
  }, [isLoading, imageList, lessonId, component, index, blogId]);

  return (
    <div className="image__block">
      {data.content.length ? (
        data.content.map((_, idx) => (
          <Image
            idx={idx}
            img={image?.find?.((img) => img.idx === idx)?.file || ""}
          />
        ))
      ) : (
        <p>Images not found</p>
      )}
    </div>
  );
};

export default ImageBlock;
