import React, { useState, useEffect } from "react"
import ImageProvider from "./context/ImageContext"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListImages from "./components/ListImages"
import { API_KEY, API_URL, PAGINATOR } from "./utils/env"
import "../src/styles/App.scss"

const App = () => {
  const [searched, setSearched] = useState("")
  const [images, setImages] = useState([])
  const [dark, setDark] = useState(false)
  // const { srcImage } = useContext(ImageContext)
  console.log("dark ", dark)
  //PAGINADOR state
  const [pageCurrent, savePagecurrent] = useState(1)
  const [totalPages, saveTotalpages] = useState(1)

  useEffect(() => {
    console.log("useEffect run ")
    const getFromAPI = async () => {
      if (searched === "") return
      const url = `${API_URL}?key=${API_KEY}&q=${searched}&per_page=${PAGINATOR}&page=${pageCurrent}` //yellow+flowers&image_type=photo
      const response = await fetch(url)
      const result = await response.json()
      setImages(result.hits)
      //SETEO DE TOTAL DE PAGINAS
      const calculeTotalPages = Math.ceil(result.totalHits / PAGINATOR)
      if (calculeTotalPages > 0) {
        saveTotalpages(calculeTotalPages)
      }
      //MOVER PANTALLA AL INICIO
      const headerHtml = document.querySelector("header")
      headerHtml.scrollIntoView({ behavior: "smooth" })
    }
    getFromAPI()
  }, [searched, pageCurrent])

  //DEFINIR NRO DE PAGINAS
  const pageAfter = () => {
    const newPageCurrent = pageCurrent - 1
    if (newPageCurrent === 0) return
    savePagecurrent(newPageCurrent)
  }

  const pageBefore = () => {
    const newPageCurrent = pageCurrent + 1
    if (newPageCurrent > totalPages) return
    savePagecurrent(newPageCurrent)
  };

  return (
    <ImageProvider>
      <div className={dark ? "dark-mode" : "light-mode"}>
        <Header dark={dark} setDark={setDark}></Header>
        <Formulario
          images={images.length}
          searched={searched}
          setSearched={setSearched}
        />
        <ListImages images={images} dark={dark} ></ListImages>
        {images.length > 0 ? (
          <div className={dark ? "btn-navigator-container theme-dark" : "btn-navigator-container"} >
            {pageCurrent === 1 ? null : (
              <button className="btn btn-preview" onClick={pageAfter}>
                {" "}
                &laquo; Preview{" "}
              </button>
            )}
            {pageCurrent === totalPages || pageCurrent === 0 ? null : (
              <button className="btn btn-next" onClick={pageBefore}>
                Next &raquo;
              </button>
            )}
          </div>
        ) : null}
      </div>
    </ImageProvider>
  )
}

export default App
