import React, { useContext } from 'react'
// import { DarkModeSwitch } from 'react-toggle-dark-mode'
import DarkModeToggle from "react-dark-mode-toggle"
// import { DarkContext } from '../context/DarkContext'
import '../styles/Header.scss'
import logo from '../assets/icons/z.png'


const Header = ({ setDark, dark }) => {

  // isDarkMode, setIsDarkMode

  return (
    <header className={dark ? "dark-header" : "light-header"} >
      <div><img src={logo} alt="Logo" /> <p>Reactimage</p></div>
      <DarkModeToggle
        onChange={setDark}
        checked={dark}
        size={60}
      />
    </header>
  );
}

export default Header;
