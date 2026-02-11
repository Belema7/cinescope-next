export const API_KEY = process.env.API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Fetch data from TMDB API with error handling.
 * @param {string} endpoint - The API endpoint (e.g., 'movie/top_rated').
 * @param {object} params - Query parameters.
 * @returns {Promise<any>} - The JSON response.
 */
export async function fetchFromTMDB(endpoint, params = {}) {
    const query = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        include_adult: 'false',
        ...params,
    });

    const url = `${BASE_URL}/${endpoint}?${query.toString()}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

        if (!res.ok) {
            throw new Error(`Failed to fetch data from TMDB: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('TMDB API Error:', error);
        throw new Error('Failed to fetch data. Please try again later.');
    }
}
