import Results from "@/components/Results"
import { fetchFromTMDB } from "@/lib/api"

export const dynamic = 'force-dynamic'

const API_KEY = process.env.API_KEY

const Home = async ({ searchParams }) => {
  const params = await searchParams
  const genre = params?.genre ?? 'fetchTrending'

  /*
    Determine the endpoint based on the genre.
    'fetchTopRated' -> 'movie/top_rated'
    'fetchTrending' (default) -> 'trending/all/week'
  */
  const endpoint = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';

  // Use the centralized fetch function
  const data = await fetchFromTMDB(endpoint, { page: 1 });
  const results = data.results;

  return (
    <div className="min-h-screen">
      <Results results={results} />
    </div>
  )
}

export default Home
