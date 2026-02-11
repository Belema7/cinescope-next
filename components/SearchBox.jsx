"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() === '') return
    router.push(`/search/${encodeURIComponent(search)}`)

  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
    </form>
  )
}

export default SearchBox