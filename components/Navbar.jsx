import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="flex justify-center mt-10 mb-12">
      <div className="flex gap-8 px-8 py-4 
                      rounded-2xl 
                      bg-background/70 backdrop-blur-md 
                      border border-border/40 
                      shadow-sm">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </div>
  )
}

export default Navbar
