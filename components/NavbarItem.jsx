'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams()
    const currentGenre = searchParams.get('genre')
  return (
    <Link href={`/?genre=${param}`}
    className={`${currentGenre === param ? 'underline underline-offset-4 rounded-md decoration-2 decoration-blue-600' : 'text-foreground/70'} `}
    >
      {title}
    </Link>
  )
}

export default NavbarItem