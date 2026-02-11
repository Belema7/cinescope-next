import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Card = ({ result }) => {
  const imagePath = result.backdrop_path || result.poster_path

  return (
    <div className="group relative overflow-hidden rounded-2xl 
                    border border-border/40 
                    bg-background/60 backdrop-blur-sm
                    shadow-sm hover:shadow-xl 
                    transition-all duration-300">

      <Link
        href={`/movie/${result.id}`}
        className="relative block w-full h-64 overflow-hidden"
      >
        <Image
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/original/${imagePath}`
              : '/no-image.png'
          }
          alt={result.title || result.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-1">
          {result.title || result.name}
        </h2>

        <p className="text-sm text-foreground/70 line-clamp-2">
          {result.overview}
        </p>
      </div>
    </div>
  )
}

export default Card
