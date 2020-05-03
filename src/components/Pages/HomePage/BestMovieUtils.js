export function getBestMovie(movies) {
  return movies.sort((a, b) => {
    const first = Number(a.imdbRating);
    const second = Number(b.imdbRating);

    return second - first;
  })[0];
}
