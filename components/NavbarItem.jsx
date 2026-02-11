'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const currentGenre = searchParams.get('genre')

  const isActive = currentGenre === param

  return (
    <Link
      href={`/?genre=${param}`}
      className={`text-sm font-medium tracking-wide transition-all duration-200
        ${
          isActive
            ? 'text-blue-600 underline underline-offset-8 decoration-2'
            : 'text-foreground/70 hover:text-foreground'
        }`}
    >
      {title}
    </Link>
  )
}

export default NavbarItem
