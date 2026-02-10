import React from 'react'

const AboutPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Heading */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About CineScope
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern movie discovery experience built with Next.js
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          <span className="font-semibold">CineScope</span> is a movie discovery
          application built with <span className="font-medium">Next.js</span>,
          designed to demonstrate clean architecture, proper routing, rendering
          strategies, and URL-driven state management.
        </p>

        <p>
          The app allows users to explore movies, view detailed information, and
          manage a personal watchlist. It also includes a system-aware dark mode
          to provide a comfortable viewing experience across different
          environments.
        </p>

        <p>
          This project serves as a practical showcase of modern web development
          best practices, including server-side rendering, client-side
          interactivity, responsive layouts, and accessible UI patterns.
        </p>
      </div>

      {/* Tech highlight */}
      <div className="mt-12 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-base">
          <li>• App Router & modern Next.js patterns</li>
          <li>• URL-driven state & dynamic routing</li>
          <li>• System-aware dark mode</li>
          <li>• Responsive & accessible design</li>
        </ul>
      </div>
    </section>
  )
}

export default AboutPage
