import React, { Suspense } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="flex justify-center mt-10 mb-12">
      <div className="flex gap-8 px-8 py-3 
                      rounded-full 
                      bg-secondary/50 backdrop-blur-md 
                      border border-border/40 
                      shadow-sm">
        <Suspense fallback={<div>Loading...</div>}>
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated" />
        </Suspense>
      </div>
    </div>
  )
}

export default Navbar
