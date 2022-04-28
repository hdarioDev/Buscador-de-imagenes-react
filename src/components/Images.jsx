import React, { useContext } from "react"
import { AiOutlineLike } from 'react-icons/ai';
import { ImageContext } from "../context/ImageContext"
import "../styles/Images.scss"

const Images = ({ image }) => {
  const { setsrcImage } = useContext(ImageContext)
  const { likes, tags, webformatURL } = image
  const handleDownloadImage = () => {
    //window.open(webformatURL, "_blank")
    setsrcImage(webformatURL)

  };
  return (
    <>
      <article onClick={() => handleDownloadImage()}>
        <img src={webformatURL} alt={tags} />
        <div className="container-likes">
          <p>
            <span>{likes}<AiOutlineLike className="icon-like" size={16} /></span>
          </p>
        </div>
      </article>
    </>

  );
};

export default Images;
