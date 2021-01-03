import React, { createContext, useState } from "react"

const initialAppTheme = () => {
  const currentTheme = localStorage.getItem('app-theme') || 'light'
  return currentTheme
}

export const AppThemeContext = createContext()

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialAppTheme)
  

  function setAppTheme(value){
    console.log(value)
    localStorage.setItem('app-theme', value)
    const properties = document.querySelector('html')
    properties.classList.add(value)
    if(value == 'dark'){
      properties.classList.remove('light')
    }else{
      properties.classList.remove('dark')
    }
    setTheme(value)
  }

  return (
    <AppThemeContext.Provider value={{
      theme, setAppTheme
    }}>
      {
        children
      }
    </AppThemeContext.Provider>
  )
}
