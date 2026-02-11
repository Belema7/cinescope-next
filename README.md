# CineScope 🎬

A modern movie discovery web application built with [Next.js 15](https://nextjs.org/) and [TMDB API](https://www.themoviedb.org/).

## Features ✨

- **Trending & Top Rated**: Browse current hits and all-time classics.
- **Search**: Find movies instantly with real-time search.
- **Detailed View**: Access rich metadata, ratings, and high-quality backdrops.
- **Dark Mode**: Toggle between light and dark themes seamlessly.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Server Components**: Efficient data fetching and SEO optimization.

## Tech Stack 🛠️

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Data Source**: TMDB API

## Getting Started 🚀

### Prerequisites

- Node.js 18+ installed.
- A TMDB API Key (Get one [here](https://www.themoviedb.org/documentation/api)).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cinescope.git
    cd cinescope
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    Create a `.env.local` file in the root directory and add your API key:
    ```bash
    API_KEY=your_tmdb_api_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure 📂

- `/app`: App Router pages and layouts.
- `/components`: Reusable UI components (Header, Card, SearchBox).
- `/lib`: Utility functions (API fetch wrapper).
- `/public`: Static assets.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/appointment/deploying) for more details.

---

Built with ❤️ by belema.
