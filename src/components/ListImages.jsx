import React from "react";
import Image from "./Images";
import "../styles/ListImages.scss";

const ListImages = ({ images, dark }) => {
  return (
    <div className={dark ? "ListImages theme-dark" : "ListImages"}>
      {images.map((item) => (
        <Image key={item.id} image={item}></Image>
      ))}
    </div>
  );
};

export default ListImages;
