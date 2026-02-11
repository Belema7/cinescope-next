import React from 'react'

const Results = ({results}) => {
  return (
    <div>
        {results.map((result) => (
            <div key={result.id} className="p-4 border-b border-border/40">
                <h2 className="text-lg font-semibold">{result.title || result.name}</h2>
                <p className="text-sm text-foreground/80">{result.overview}</p>
            </div>
        ))}
    </div>
  )
}

export default Results