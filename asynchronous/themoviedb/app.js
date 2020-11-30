let searchQuery = 'iron man';
const API_KEY = '659755775c442c8c41820f55809c3842';

const getMovies = _ => {
    const MOVIE_ENDPOINT = 'https://api.themoviedb.org';
    const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    
    return fetch(MOVIE_URL)
        .then(res => res.json())
        .then(data => {
            const movies = [];
            data.results.forEach(movie => {
                let imagePath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                let obj = {
                    title: movie.title,
                    image: imagePath
                }
                movies.push(obj);
            });
            return movies;
        })
}

const render = movies => {
    let markup = '';

    movies.forEach(movie => {
        markup += `
            <div class="movies__item">
                <img src="${movie.image}" class="movies__img"></img>
                <h2 class="movies__title">${movie.title}</h2>
            </div>
        `
    })

    document.querySelector('.movies').innerHTML = markup;
}

getMovies()
    .then(data => {
        render(data)
    })
    