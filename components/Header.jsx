import Link from 'next/link'
import React from 'react'
import { SearchSlash } from 'lucide-react';
import MenuItem from './MenuItem'
import DarkModeSwitch from './DarkModeSwitch';
const Header = () => {
  return (
    <div className='flex justify-around items-center py-6'>
        {/* left side */}
        <div className="font-bold text-2xl">
            <Link href="/">CineScope</Link>
        </div> 

        {/* right side */}
        <div className='flex items-center gap-10'>
            <span className='cursor-pointer hover:text-amber-600'>
              <DarkModeSwitch/>
            </span>
            <MenuItem title="About" address='/about' icon={SearchSlash}/>
        </div>
    </div>
  )
}

export default Header