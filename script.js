const form = document.getElementById("form")
const itemClass = document.getElementById("wrapper")
let movieArray = []
let movieId = []
let movies = []
let feedHtml = ""


form.addEventListener("submit", function (event) {
    event.preventDefault()

    fetch("http://www.omdbapi.com/?apikey=3e58d4a9&s=Blade")
        .then(res => res.json())
        .then(data => {
            movieArray = data.Search
            // console.log(movieArray)

            for (let i = 0; i < movieArray.length; i++) {
                movieId.push(data.Search[i].imdbID)
            }

            return movieId

        })


    for (let id of movieId) {
        fetch(`http://www.omdbapi.com/?apikey=3e58d4a9&i=${id}`)
            .then(res => res.json())
            .then(data => {

                feedHtml += `<div class="item" id="items">   
                                        <img src="${data.Poster}" alt ="${data.Title}" class="poster" >
                                        <div class="outer">
                                            <div class="title-stars">
                                                <h4 class="title">${data.Title}</h4>
                                                <i class="fa-solid fa-star"></i>
                                                <p class="rating">${data.imdbRating}</p>
                                            </div>
                                            <div class="length-genre">
                                                <p class="movie-length">${data.Runtime}</p>
                                                <p class="genre">${data.Genre}</p>
                                                <div class="watchlist">
                                                    <a href="#" class="a-watchlist">
                                                        <i class="fa-solid fa-circle-plus"></i>
                                                    </a>
                                                    <p class="add-to-watchlist">Watchlist</p>
                                                </div>

                                            </div>
                                            <p class="description">${data.Plot}</p>
                                        </div>
                                </div>`

                return feedHtml
            })

    }

    itemClass.innerHTML = feedHtml

})







// movieArray = data.Search
            // console.log(movieArray)
            // for (let movie of movieArray) {
            //     feedHtml = `< img src = "${movie.Poster}" alt = "${movie.Title}" class="poster" >
            //                 <div class="outer">
            //                     <div class="title-stars">
            //                         <h4 class="title">${movie.Title}</h4>
            //                         <i class="fa-solid fa-star"></i>
            //                         <p class="rating">8.1</p>
            //                     </div>
            //                     <div class="length-genre">
            //                         <p class="movie-length">116 min</p>
            //                         <p class="genre">Drama, Mystery, Sci-fi</p>
            //                         <div class="watchlist">
            //                             <a href="#" class="a-watchlist">
            //                                 <i class="fa-solid fa-circle-plus"></i>
            //                             </a>
            //                             <p class="add-to-watchlist">Watchlist</p>
            //                         </div>

            //                     </div>
            //                     <p class="description">A blade runner must pursue and terminate four replicants who stole a ship in
            //                         space, and have returned to Earth to find their creator.</p>
            //                 </div>`
            // }

            // itemClass.innerHTML = feedHtml