import React, { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'
import { IconContext } from "react-icons"
import '../styles/ModalImage.scss'

const ModalImage = () => {
    const { srcImage, setsrcImage } = useContext(ImageContext)
    console.log("srcImage ", srcImage)

    const handleClose = () => {
        setsrcImage(null)
    }

    return (
        <section>
            <div className="containerHeader-modal">
                <h2></h2>
                <IconContext.Provider value={{ color: "blue" }}>
                    <button className="button-close" onClick={handleClose}>x</button>
                </IconContext.Provider>
            </div>
            <img src={srcImage} alt="Imagen buscada" />

            <a href={srcImage} target="_blank" download><button className="button-download">Download</button></a>



        </section>
    )
}

export default ModalImage