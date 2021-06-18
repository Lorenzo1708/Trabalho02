// https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1
// https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1

// https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1

// https://image.tmdb.org/t/p/original${resultsMovie.backdrop_path}

function getMovies() {
    let dataFromResponse = JSON.parse(this.responseText)

    document.getElementById('moviesDiv').innerHTML = dataFromResponse.results.map((resultsMovie) => {
        // resultsMovie.backdrop_path
        // resultsMovie.id
        // resultsMovie.overview
        // resultsMovie.release_date
        // resultsMovie.title

        let resultsMovieBackdropPath = resultsMovie.backdrop_path
        let resultsMovieID = resultsMovie.id
        let resultsMovieOverview = resultsMovie.overview
        let resultsMovieReleaseDate = resultsMovie.release_date
        let resultsMovieTitle = resultsMovie.title

        return `    
            <div class="col-12 col-md-6 col-xl-3 d-flex align-items-stretch mb-4">
                <div class="card shadow">
                    <img class="card-img-top w-100" src="https://image.tmdb.org/t/p/original${resultsMovieBackdropPath}" alt="Backdrop">

                    <div class="card-body d-flex justify-content-between flex-column">
                        <div class="mb-3">
                            <h4 class="card-title">${resultsMovieTitle}</h4>
                            <h6 class="card-subtitle mb-3 dateText">${resultsMovieReleaseDate.split('-').reverse().join('/')}</h6>
                            <p class="card-text">${resultsMovieOverview}</p>
                        </div>
                        <div class="mt-3">
                            <div class="col-12 d-flex align-items-center justify-content-center flex-column">
                                <a class="btn btn-primary" href="more-info-page.html" onclick="(() => localStorage.setItem('movieID', ${resultsMovieID}))()">Mais Informações</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join('')
}

window.onload = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
    newXHR.send()
}

document.getElementById('topRatedMoviesButton').onclick = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)
    newXHR.send()
}

document.getElementById('nowPlayingMoviesButton').onclick = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`)
    newXHR.send()
}

document.getElementById('popularMoviesButton').onclick = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
    newXHR.send()
}

document.getElementById('upcomingMoviesButton').onclick = () => {
    let newXHR = new XMLHttpRequest()

    newXHR.onload = getMovies

    newXHR.open('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1`)
    newXHR.send()
}