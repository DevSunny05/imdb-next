
import React from 'react'
import NvabarItem from './NvabarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-amber-100 dark:bg-gray-900 lg:text-lg p-4'>
        <NvabarItem title={'Trending'} param='fetchTrending'/>
        <NvabarItem title={'Top Rated'} param='fetchTopRated'/>
    </div>
  )
}

export default Navbar