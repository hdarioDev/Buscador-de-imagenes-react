import React, { createContext, useState, useEffect } from 'react'

export const DarkContext = createContext()

const DarkProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(() => false)

    return (
        <DarkContext.Provider
            value={{ isDarkMode, setIsDarkMode }}
        >
            {props.children}
        </DarkContext.Provider>
    )

}
export default DarkProvider