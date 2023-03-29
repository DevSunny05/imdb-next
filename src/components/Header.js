import React from 'react'
import MenuItems from './MenuItems'
import {AiFillHome,AiFillInfoCircle} from 'react-icons/ai'
import Link from 'next/link'
import DarkMode from './DarkMode'


const Header = () => {
  return (
    <>
    
        <div className='flex justify-between items-center mx-2 max-w-5xl sm:mx-auto py-6 '>
            <div className='flex font-bold text-4xl'>
                <MenuItems title={'HOME'} address={'/'} Icon={AiFillHome}/>
                <MenuItems title={'ABOUT'} address={'/about'} Icon={AiFillInfoCircle}/>
            </div>
            <div className='flex items-center space-x-5 '>
                <DarkMode/>
                <Link href={'/'}>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                        <span className='text-xl hidden sm:inline-block ml-1'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
   
    </>
  )
}

export default Header