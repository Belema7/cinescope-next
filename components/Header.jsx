import Link from 'next/link'
import React from 'react'
import { SearchSlash } from 'lucide-react'
import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md 
                       bg-background/80 border-b border-border/40">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-extrabold tracking-tight 
                     hover:text-blue-600 transition-colors"
        >
          CineScope
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <DarkModeSwitch />
          <MenuItem 
            title="About" 
            address="/about" 
            icon={SearchSlash} 
          />
        </div>

      </div>
    </header>
  )
}

export default Header
