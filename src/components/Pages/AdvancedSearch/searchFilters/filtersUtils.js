import { uniq } from "lodash";

export function convertToNumbers(movies) {
  return movies
    .map((movie) => parseFloat(movie.replace(",", "").replace(".", "")))
    .sort((a, b) => a - b);
}

export function changeNumberFormat(movie) {
  return parseFloat(movie.replace(",", "").replace(".", ""));
}

export function extractUniqueVotes(movies) {
  const movieVotes = movies.map((movie) => movie.imdbVotes);
  return uniq(movieVotes);
}

export function extractUniqueRatings(movies) {
  const movieRatings = movies.map((movie) => movie.imdbRating);
  return uniq(movieRatings).sort();
}
