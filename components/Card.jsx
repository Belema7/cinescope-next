import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Card = ({ result }) => {
  const imagePath = result.backdrop_path || result.poster_path

  return (
    <div className="group relative overflow-hidden rounded-xl 
                    border border-border/40 
                    bg-card text-card-foreground
                    shadow-sm hover:shadow-2xl hover:scale-[1.02]
                    transition-all duration-300 ease-in-out cursor-pointer h-full flex flex-col">

      <Link
        href={`/movie/${result.id}`}
        className="relative block w-full aspect-[2/3] overflow-hidden"
      >
        <Image
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/w500/${imagePath}`
              : '/no-image.png'
          }
          alt={result.title || result.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="blur"
          blurDataURL="data:image/gray;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-yellow-400 border border-white/10">
          ⭐ {result.vote_average?.toFixed(1) || 'N/A'}
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col gap-2">
        <h2 className="text-lg font-bold line-clamp-1 group-hover:text-blue-500 transition-colors">
          {result.title || result.name}
        </h2>

        <p className="text-sm text-foreground/60 line-clamp-3 mb-2 flex-1">
          {result.overview}
        </p>

        <div className="flex items-center justify-between text-xs text-foreground/50 mt-auto pt-2 border-t border-border/40">
          <span>{result.release_date || result.first_air_date}</span>
          <span className="group-hover:translate-x-1 transition-transform">Read More &rarr;</span>
        </div>
      </div>
    </div>
  )
}

export default Card
