"use client"
import React, { useEffect, useState } from 'react'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

const DarkMode = () => {
    const {systemTheme,theme,setTheme}=useTheme()

    const [mount,setMount]=useState(false)
    
    const currentTheme= theme === 'system' ? systemTheme:theme;

    useEffect(()=>{setMount(true)},[])

   
  return (
    <>
    {
        mount && currentTheme === "dark" ?
        (<MdDarkMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>):
        (<MdLightMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>)
    }

    </>
  )
}

export default DarkMode