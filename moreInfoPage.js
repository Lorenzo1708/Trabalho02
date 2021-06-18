// https://api.themoviedb.org/3/movie/${localStorage.getItem('movieID')}?api_key=${API_KEY}&language=pt-BR

// https://image.tmdb.org/t/p/original${resultsMovie.backdrop_path}

function getMovies() {
    let dataFromResponse = JSON.parse(this.responseText)

    // movie.backdrop_path
    // movie.genres
    // movie.homepage
    // movie.overview
    // movie.release_date
    // movie.runtime
    // movie.spoken_languages
    // movie.title
    // movie.vote_average

    let movieBackdropPath = dataFromResponse.backdrop_path
    let movieGenres = dataFromResponse.genres
    let movieHomepage = dataFromResponse.homepage
    let movieOverview = dataFromResponse.overview
    let movieReleaseDate = dataFromResponse.release_date
    let movieRuntime = dataFromResponse.runtime
    let movieSpokenLanguages = dataFromResponse.spoken_languages
    let movieTitle = dataFromResponse.title
    let movieVoteAverage = dataFromResponse.vote_average

    console.log(movieGenres)

    document.getElementById('moviesDiv').innerHTML = `
        <div class="col-12 col-md-6 d-flex align-items-stretch mb-4">
            <div class="card shadow">
                <img class="card-img-top w-100" src="https://image.tmdb.org/t/p/original${movieBackdropPath}" alt="Backdrop">

                <div class="card-body d-flex justify-content-between flex-column">
                    <div class="mb-3">
                        <h4 class="card-title">${movieTitle}</h4>
                        <h6 class="card-subtitle mb-3 dateText">${movieReleaseDate.split('-').reverse().join('/')}</h6>
                        <p class="card-text">${movieOverview}</p>
                        <h6 class="mb-3">Duração: ${movieRuntime}min</h6>
                        <h6 class="mb-3">Gêneros: ${movieGenres.map((movieGenre) => movieGenre.name).join(', ')}</h6>
                        <h6 class="mb-3">Idiomas: ${movieSpokenLanguages.map((movieSpokenLanguage) => movieSpokenLanguage.name).join(', ')}</h6>
                        <h6 class="mb-3">Nota: ${movieVoteAverage}/10.0</h6>
                    </div>
                    <div class="mt-3">
                        <div class="col-12 d-flex align-items-center justify-content-center flex-column">
                            <a class="btn btn-primary" href="${movieHomepage}">Página Oficial</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

window.onload = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/${localStorage.getItem('movieID')}?api_key=${API_KEY}&language=pt-BR`)
    newXHR.send()
}