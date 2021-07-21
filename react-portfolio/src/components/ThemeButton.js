import React from 'react'
import '../App.css';
import useDarkMode from './hooks/useDarkMode'
import {LightBulbIcon,  MoonIcon} from '@heroicons/react/outline'

const ThemeButton = () => {
   const [colorTheme, setTheme] = useDarkMode()
    return (
        <>
        <span id="themeButton" onClick={() => setTheme(colorTheme)}
        className='rouded-full bg-white '>
        {colorTheme === 'light' ? <LightBulbIcon className="h-10 w-10 rounded-full bg-white text-black"/> :  <MoonIcon className="h-10 w-10 rounded-full bg-black text-white"/>}
        </span>        
        </>
    )
}

export default ThemeButton
