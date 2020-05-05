export function generateAdvancedSearchUrl({ query, Genre }) {
  let baseUrl = "https://movies-app-siit.herokuapp.com/movies";
  const urlQuery = [];
  if (query) {
    urlQuery.push(`Title=${query}`);
  }
  if (Genre && Genre.length) {
    urlQuery.push(`Genre=${Genre.join(", ")}`);
  }
  if (urlQuery.length) {
    return baseUrl + `?${urlQuery.join("&")}`;
  }
  return baseUrl;
}

export function filterByRatings(movie, minRating, maxRating) {
  const { imdbRating } = movie;

  if (imdbRating >= minRating && imdbRating <= maxRating) return true;

  return false;
}
