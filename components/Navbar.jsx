import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex gap-10 px-6 py-4 dark:bg-background/50 bg-background/50 rounded-2xl w-max mx-auto mb-10'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar