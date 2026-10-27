/* Все пути задаются относительно index.html. Заменяйте файлы в assets или меняйте здесь путь. */
window.CINEMAHERE_ASSETS = {
  logo: "assets/logo/cinemahere.svg",
  posters: {
    "film-1": "assets/posters/1.webp", "film-2": "assets/posters/13.jpg",
    "film-3": "assets/posters/5.jpg", "film-4": "assets/posters/15.webp",
    "film-5": "assets/posters/6.webp", "film-6": "assets/posters/17.webp",
    "series-1": "assets/posters/2.webp", "series-2": "assets/posters/14.webp",
    "series-3": "assets/posters/7.jpg", "series-4": "assets/posters/21.jpg",
    "series-5": "assets/posters/8.jpg", "series-6": "assets/posters/20.jpg",
    "anime-1": "assets/posters/4.avif", "anime-2": "assets/posters/11.jpg",
    "anime-3": "assets/posters/9.jpg", "anime-4": "assets/posters/12.jpg",
    "anime-5": "assets/posters/10.jpg", "anime-6": "assets/posters/22.jpg"
  },
  episodes: {
    /* "series/series-1/s01e01": "assets/episodes/series/series-1/s01e01.webp" */
  }
};

/* Добавьте URL ваших видео в нужный раздел, сохранив структуру примера. */
window.CINEMAHERE_MEDIA = {
  films: {
    /* "film-1": { trailer: "assets/videos/trailers/film-1.mp4", movie: "assets/videos/films/film-1.mp4" } */
  },
  series: {
    /* "series-1": { trailer: "assets/videos/trailers/series-1.mp4", episodes: { "s01e01": "assets/videos/series/series-1/s01e01.mp4" } } */
  },
  anime: {
    /* "anime-1": { trailer: "assets/videos/trailers/anime-1.mp4", episodes: { "s01e01": "assets/videos/anime/anime-1/s01e01.mp4" } } */
  }
};
