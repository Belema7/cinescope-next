import Results from '@/components/Results'
import React from 'react'

const Page = async ({ params }) => {
  const searchTerm = params.searchTherm

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch search results')
  }

  const data = await res.json()
  const results = data.results

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: "{searchTerm}"
      </h1>

      {results && results.length === 0 && (
        <h2 className="text-xl font-semibold">
          No results found for "{searchTerm}"
        </h2>
      )}

      {results && results.length > 0 && (
        <Results results={results} />
      )}
    </div>
  )
}

export default Page
