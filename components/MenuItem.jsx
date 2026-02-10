import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, icon: Icon, address}) => {
  return (
    <Link href={address}>
     <Icon className="text-2xl md:hidden" />

      <p className='uppercase hidden md:block'>{title}</p>
    </Link>
  )
}

export default MenuItem