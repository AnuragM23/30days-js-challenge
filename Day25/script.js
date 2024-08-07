const searchForm = document.querySelector('.searchForm');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

// Function to fetch movie details using the OMDB API.
const getMovieInfo = async(movie) =>{
    const apiKey = "8a7e6017";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    showMovieData(data);
    
}

// Function to show movie data on screen
const showMovieData = (data) => {
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data; // destuctured to extract properties

    const movieElement = document.createElement('div');
    movieElement.innerHTML = `<h2>${Title}</h2>
    <p><strong>Rating : &#11088; </strong>${imdbRating}</p>
    `;

    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(',').forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieElement);

    movieContainer.appendChild(movieElement);

}

// Adding event listener to search form
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(inputBox.value);   
    const movieName = inputBox.value.trim(); 
    if(movieName !== ''){
        getMovieInfo(movieName);
    }
});