export function generateAdvancedSearchUrl({query,Genre}){
  let baseUrl = "https://movies-app-siit.herokuapp.com/movies";
  const urlQuery = [];
  if(query){
    urlQuery.push(`Title=${query}`);
  }
  if(Genre && Genre.length){
    urlQuery.push(`Genre=${Genre.join(", ")}`);
  }
  if(urlQuery.length){
    return baseUrl + `?${urlQuery.join("&")}`
  }
  return baseUrl;
}