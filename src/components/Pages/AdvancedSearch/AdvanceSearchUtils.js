import { changeNumberFormat } from "./searchFilters/filtersUtils";

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

export function filterByRatingOrVotes(
  movie,
  minRating,
  maxRating,
  minVotes,
  maxVotes
) {
  const { imdbRating, imdbVotes } = movie;
  const imdbVotesNumber = changeNumberFormat(imdbVotes);

  if (
    imdbRating >= minRating &&
    imdbRating <= maxRating &&
    imdbVotesNumber >= minVotes &&
    imdbVotesNumber <= maxVotes
  )
    return true;

  return false;
}
