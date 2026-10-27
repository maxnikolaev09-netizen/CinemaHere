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
    /* Отдельный кадр эпизода можно указать по ключу:
       "series/series-5/s01e01": "assets/Cadr/3serial.jpg" */
  },
  frames: {
    /* Фильмы */
    "film-2": "assets/Cadr/1film.jpg",
    "film-3": "assets/Cadr/010101.jpeg",
    "film-4": "assets/Cadr/3film.jpg",
    "film-5": "assets/Cadr/4film.jpg",
    "film-6": "assets/Cadr/5film.jpg",

    /* Сериалы */
    "series-3": "assets/Cadr/1serial.webp",
    "series-4": "assets/Cadr/2serial.jpg",
    "series-5": "assets/Cadr/4serial.jpg",
    "series-1": "assets/Cadr/5serial.webp",

    /* Аниме */
    "anime-4": "assets/Cadr/1Anime.jpg",
    "anime-5": "assets/Cadr/2Anime.jfif",
    "anime-6": "assets/Cadr/3Anime.jfif",
    "anime-1": "assets/Cadr/4Anime.jpg",
    "anime-2": "assets/Cadr/5Anime.png"

    /* Подходящих кадров для Менталиста, film-1 и anime-3 в Cadr нет. */
  }
};

/*
  Ссылки на трейлеры:
  - VK Видео: значение src из кода iframe (video_ext.php).
  - RUTUBE: ссылка rutube.ru/play/embed/ID или страница rutube.ru/video/ID.
  Сейчас подключены трейлеры к 5 фильмам, 6 сериалам и 1 аниме.
  Пустые поля оставлены, когда подходящий ролик на поддерживаемой площадке не удалось подтвердить.
  Ссылки на полные видео указываются через movie или episodes (см. README.md).
*/
window.CINEMAHERE_MEDIA = {
  films: {
    "film-1": { trailer: "https://rutube.ru/video/23c9f7025b5e108bdef9a8bb2628b993/" },
    "film-2": { trailer: "https://rutube.ru/video/1135ebdc2281e646badd2ce754fa3839/" },
    "film-3": { trailer: "https://rutube.ru/video/0406f7c38f6a0e8511de3ab893d59189/" },
    "film-4": { trailer: "https://rutube.ru/video/f1f999e698674de1b6ddb1b71b8aa308/" },
    "film-5": { trailer: "https://rutube.ru/video/b4875ee9b7bf0601927b4cf85d1a777c/" },
    "film-6": { trailer: "" }
  },
  series: {
    "series-1": { trailer: "https://rutube.ru/video/acc893f460b1711c0f27dc1c076040f9/" },
    "series-2": { trailer: "https://rutube.ru/video/89ff405043e890fb1ff05ff545726458/" },
    "series-3": { trailer: "https://rutube.ru/video/3798d1d34c9c59eaefceb3252cadbb56/" },
    "series-4": { trailer: "https://rutube.ru/video/6836b8c7f8fe8305f80881bb002f9b42/" },
    "series-5": { trailer: "https://rutube.ru/video/fa4f9878aac647aaee278060dec2668c/" },
    "series-6": { trailer: "https://rutube.ru/video/0b03498c70d6b6084103033c4010efe5/" }
  },
  anime: {
    "anime-1": { trailer: "https://rutube.ru/video/972f6f9c662861b0655930ceacd723a5/" },
    "anime-2": { trailer: "" },
    "anime-3": { trailer: "" },
    "anime-4": { trailer: "" },
    "anime-5": { trailer: "" },
    "anime-6": { trailer: "" }
  }
};