import Results from "@/components/Results"

export const dynamic = 'force-dynamic'

const API_KEY = process.env.API_KEY

const Home = async ({ searchParams }) => {
  const params = await searchParams
  const genre = params?.genre ?? 'fetchTrending'

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated'
        ? 'movie/top_rated'
        : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`
  )

  if (!res.ok) { 
    throw new Error('Failed to fetch movies')
  }

  const data = await res.json()
  const results = data.results

  return (
    <div className="min-h-screen">
      <Results results={results} />
    </div>
  )
}

export default Home
