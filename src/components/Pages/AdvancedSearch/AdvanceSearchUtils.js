import {
  changeNumberFormat,
  changeRatingFormat,
} from "./searchFilters/filtersUtils";

export function generateAdvancedSearchUrl(
  {
    query,
    Genre,
    Country,
    Year,
    Language,
    paginationLinkNext,
    numberOfPages,
    paginationLinkPrev,
    pagination,
  },
  pageNumber,
  customUrl
) {
  let baseUrl = `https://movies-app-siit.herokuapp.com/movies?take=10&skip=${
    (pageNumber - 1) * 10
  }`;
  const urlQuery = [];

  if (query) {
    urlQuery.push(`Title=${query}`);
  }

  if (Genre && Genre.length) {
    urlQuery.push(`Genre=${Genre.join(", ")}`);
  }

  if (Country && Country.length) {
    urlQuery.push(`Country=${Country.join(", ")}`);
  }

  if (Year && Year.length) {
    urlQuery.push(`Year=${Year.join(", ")}`);
  }
  if (Language && Language.length) {
    urlQuery.push(`Language=${Language.join(", ")}`);
  }
  if (paginationLinkNext) {
    urlQuery.push(``);
  }
  if (urlQuery.length) {
    return baseUrl + `&${urlQuery.join("&")}`;
  }

  return baseUrl;
}

export function filterByRatingOrVotes(
  movie,
  minRating,
  maxRating,
  minVotes,
  maxVotes,
  // minRuntime,
  // maxRuntime
) {
  const { imdbRating, imdbVotes, Runtime } = movie;
  const imdbVotesNumber = changeNumberFormat(imdbVotes);
  // const movieRuntime = changeRatingFormat(Runtime);

  if (
    imdbRating >= minRating &&
    imdbRating <= maxRating &&
    imdbVotesNumber >= minVotes &&
    imdbVotesNumber <= maxVotes 
  )
    return true;

  return false;
}
