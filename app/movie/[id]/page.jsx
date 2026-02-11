import Image from 'next/image'
import React from 'react'

const MoviePage = async ({ params }) => {
  const movieId = params.id

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch movie details')
  }

  const movie = await res.json()

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <p className="text-foreground/80 leading-relaxed">
        {movie.overview}
      </p>
    </div>
  )
}

export default MoviePage
