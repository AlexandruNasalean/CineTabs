export function generateAdvancedSearchUrl({query,Genre,Country}){
  let baseUrl = "https://movies-app-siit.herokuapp.com/movies";
  const urlQuery = [];
  if(query){
    urlQuery.push(`Title=${query}`);
  }
  if(Genre && Genre.length){
    urlQuery.push(`Genre=${Genre.join(", ")}`);
  }
  if(Country && Country.length){
    urlQuery.push(`Country=${Country.join(",")}`)
  }
  if(urlQuery.length){
    return baseUrl + `?${urlQuery.join("&")}`
  }
  return baseUrl;
}