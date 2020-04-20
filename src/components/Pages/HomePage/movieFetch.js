export function carouselFetch() {
  document.getElementById("search-bar").addEventListener("click", () => {
    fetch("https://movies-api-siit.herokuapp.com/movies")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        for (let i = 0; i < json.results.length; i++) {
          const movie = json.results[i];
          console.log(movie);
          console.log(movie.Poster);
        }
      });
  });
}
