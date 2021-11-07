const ENDPOINT_URL = 'https://api.themoviedb.org/3/movie';

const getFeaturedLiteflix = async () => {
   const url = new URL(`${ENDPOINT_URL}/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
   const response = await fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   });
   const dataResponse = await response.json();
   return dataResponse;
};

const getPopularMovies = async () => {
   const url = new URL(`${ENDPOINT_URL}/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20`);
   const response = await fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   });
   const dataResponse = await response.json();
   return dataResponse;
};

export const homeService = {
   getFeaturedLiteflix,
   getPopularMovies
};