let userInput = document.getElementById("user-input");
let searchBtn = document.getElementById("search");
let resultText = document.getElementById("N-result");
let movies = document.getElementById("movies");

async function getMovie() {

    movies.innerHTML = "";
    let movie = userInput.value;

    if (movie === "") {
        let Ndiv = document.createElement("div");

        Ndiv.classList.add("result");
        Ndiv.innerText = "Please enter Movie name...";

        movies.appendChild(Ndiv);
        return;
    }


    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=d6db0a3a&s=${movie}`);
        let data = await response.json();

        if (data.Response === "False") {
            movies.innerHTML = "<p id='result'>Movie not found!</p>"
            console.log("Movie not found11111");
            return;
        }


        data.Search.forEach(movie => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("P-result");

            let poster = document.createElement("img");  //Movie Image
            poster.src = movie.Poster;

            let title = document.createElement("p");  //Movie Title
            title.innerText = movie.Title;

            let year = document.createElement("p");  //Movie Year
            year.innerText = movie.Year;

            newDiv.appendChild(poster);
            newDiv.appendChild(title);
            newDiv.appendChild(year);

            movies.append(newDiv);

        })

    } catch (error) {
 
        movies.innerHTML = "<p id='result'>Movie Not Found...</p>";

        console.log("Movie not found22222");
        console.log(error);
        return;
    }

}

searchBtn.addEventListener("click", () => {
    getMovie();
})

userInput.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        getMovie();
    }
})