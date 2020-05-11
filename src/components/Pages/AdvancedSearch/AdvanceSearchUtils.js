export function generateAdvancedSearchUrl({query,Genre,Country,Year}){
// import { changeNumberFormat } from "./searchFilters/filtersUtils";

  let baseUrl = "https://movies-app-siit.herokuapp.com/movies";
  const urlQuery = [];
  
  if (query) {
    urlQuery.push(`Title=${query}`);
  }
  
  if (Genre && Genre.length) {
    urlQuery.push(`Genre=${Genre.join(", ")}`);
  }
  
  if(Country && Country.length){
    urlQuery.push(`Country=${Country.join(",")}`)
  }

  if(Year && Year.length){
    urlQuery.push(`Year=${Year.join(",")}`)
  }
  
  if(urlQuery.length){
    return baseUrl + `?${urlQuery.join("&")}`
  }
  return baseUrl;
}

// export function filterByRatingOrVotes(
//   movie,
//   minRating,
//   maxRating,
//   minVotes,
//   maxVotes
// ) {
//   const { imdbRating, imdbVotes } = movie;
//   const imdbVotesNumber = changeNumberFormat(imdbVotes);

//   if (
//     imdbRating >= minRating &&
//     imdbRating <= maxRating &&
//     imdbVotesNumber >= minVotes &&
//     imdbVotesNumber <= maxVotes
//   )
//     return true;

//   return false;
// }
