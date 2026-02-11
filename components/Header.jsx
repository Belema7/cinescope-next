import Link from 'next/link'
import React from 'react'
import { SearchSlash } from 'lucide-react'
import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md 
                       bg-background/80 border-b border-border/40 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-4 gap-4">

        {/* Logo & Menu */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            CineScope
          </Link>
        </div>

        {/* Search Box - Centered on Desktop */}
        <div className="flex-1 max-w-xl mx-4 w-full">
          {/* We will need to make sure SearchBox is responsive */}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <div className="hidden sm:flex gap-4">
            <MenuItem
              title="Home"
              address="/"
              icon={SearchSlash}
            />
            <MenuItem
              title="About"
              address="/about"
              icon={SearchSlash}
            />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
