import React, { useContext, useState } from "react"
import { ImageContext } from "../context/ImageContext"
import "../styles/Formulario.scss"
import imageSearch from "../assets/icons/search.png"
import ImageNotFount from "../assets/images/Noimagefound.jpeg"
import { ModalCreate } from "./Modal"
import ModalImage from "./ModalImage"

const Formulario = ({ setSearched, images, searched }) => {
  const { srcImage } = useContext(ImageContext)
  const [text, setText] = useState("")
  const [validInput, setValidInput] = useState(false)
  const hadleSubmit = (e) => {
    if (text.trim() === "") {
      setValidInput(true)
      return
    }
    setValidInput(false)
    setSearched(text)
    // submitForm = true
  };

  const handleChange = (e) => {
    setText(e.target.value)
    // console.log("handleChange  ", e.target.value)
    if (e.target.value.trim() !== "") {
      setValidInput(false)
    }
  }

  return (
    <React.Fragment>
      <div className="form">
        {images == 0 && searched == "" ? (
          <React.Fragment>
            <h2> Access +6.5M images </h2>
            <p>
              Download free images for your projects. Resources made by and for
              designers. PNG, JPG formats.
            </p>
          </React.Fragment>
        ) : null}

        <div className="search-container">
          <input
            className={validInput ? "input input-error" : "input"}
            type="text"
            maxLength="50"
            placeholder="Buscar..."
            onChange={handleChange}
          />
          {/* <span>x</span> */}
          <img
            src={imageSearch}
            alt="Icono de búsqueda"
            onClick={hadleSubmit}
          />
        </div>
      </div>
      {images == 0 && (searched == "") == 0 ? (
        <div className="not-found">
          <img src={ImageNotFount} alt="not found" />
        </div>
      ) : null}
      {
        srcImage ?
          <ModalCreate>
            <ModalImage />
          </ModalCreate>
          :
          null
      }
    </React.Fragment>
  )
}
export default Formulario
