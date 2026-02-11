import Results from '@/components/Results'
import React from 'react'
import { fetchFromTMDB } from '@/lib/api'

const Page = async ({ params }) => {
  const { searchTerm } = await params;

  let results = [];
  try {
    const data = await fetchFromTMDB('search/movie', {
      query: searchTerm,
      page: 1
    });
    results = data.results;
  } catch (error) {
    console.error("Search fetch error:", error);
    // You could return an error UI component here or let error.js handle it
    throw error;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: "{decodeURIComponent(searchTerm)}"
      </h1>

      {results && results.length === 0 && (
        <h2 className="text-xl font-semibold">
          No results found for "{decodeURIComponent(searchTerm)}"
        </h2>
      )}

      {results && results.length > 0 && (
        <Results results={results} />
      )}
    </div>
  )
}

export default Page
