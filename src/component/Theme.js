import React, { useState } from 'react'
import useTheme from '../contexts/ThemeContext'


const Theme = () => {
    const {themeMode, darkTheme, lightTheme} = useTheme()
    const [toggle, setToggle] = useState(true)
    
    const handleClick = () => {
        if(themeMode === "dark"){
            lightTheme()
        }else{
            darkTheme()
        }
        setToggle(!toggle)
        
    }

  return (
    <div className='border border-1 p-1 rounded-md text-2xl'>
      <button
      onClick={handleClick}
      >{toggle ? "🌙" : "🌞"}</button>
    </div>
  )
}

export default Theme
