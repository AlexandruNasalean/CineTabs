export function convertToNumbers(movies) {
  return movies
    .map((movie) => parseFloat(movie.replace(",", "").replace(".", "")))
    .sort((a, b) => a - b);
}
