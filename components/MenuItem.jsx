import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, icon: Icon, address }) => {
  return (
    <Link
      href={address}
      className="flex items-center gap-2 
                 text-foreground/80 
                 hover:text-blue-600 
                 transition-colors duration-200"
    >
      <Icon className="text-xl md:hidden" />
      <p className="hidden md:block uppercase text-sm font-medium tracking-wide">
        {title}
      </p>
    </Link>
  )
}

export default MenuItem
