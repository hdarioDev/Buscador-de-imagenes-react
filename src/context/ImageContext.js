import React, { createContext, useState, useEffect } from 'react'

export const ImageContext = createContext()

const ImageProvider = (props) => {
    const [srcImage, setsrcImage] = useState(null)

    return (
        <ImageContext.Provider
            value={{ srcImage, setsrcImage }}
        >
            {props.children}
        </ImageContext.Provider>
    )

}
export default ImageProvider