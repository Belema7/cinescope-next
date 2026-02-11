import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        
        <img
          src="/Spinner.svg"
          alt="Loading..."
          className="w-12 h-12 animate-spin"
        />

        <p className="text-sm text-foreground/70 tracking-wide">
          Loading movies...
        </p>

      </div>
    </div>
  )
}

export default Loading
