"use client"
import React, { useEffect } from 'react'

const error = ({ error , reset}) => {
    useEffect(() => {
        console.error(error)
    }, [error])
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Something went wrong!</h1>
      <p className="text-sm text-red-500">{error.message}</p>
      <button onClick={() => reset()} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Try Again
      </button>
    </div>
  )
}

export default error