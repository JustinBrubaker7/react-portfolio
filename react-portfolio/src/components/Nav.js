import React from 'react'
import useDarkMode from './hooks/useDarkMode'
import {LightBulbIcon,  MoonIcon} from '@heroicons/react/outline'

const Nav = () => {
   const [colorTheme, setTheme] = useDarkMode()
    return (
        <>
        <span onClick={() => setTheme(colorTheme)}
        className='rouded-full bg-white'>
        {colorTheme === 'light' ? <LightBulbIcon className="h-10 w-10 rounded-full bg-white text-black"/> :  <MoonIcon className="h-10 w-10 rounded-full bg-black text-white"/>}
        </span>
        
        <ul className="space-x-4 inline-flex">
            <li className="flex">Home</li>   
            <li className="flex">About</li>   
            <li className="flex">Experience</li>   
            <li className="flex">Projects</li>      
        </ul>  
        
        </>
    )
}

export default Nav
