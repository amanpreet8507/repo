function process_res(data){
    console.log(data);
    for( i = 0; i < data.results.length; i++){
    $("#result").append(JSON.stringify(data.results[i].original_title) + "<br>")
    $("#result").append(JSON.stringify(data.results[i].overview) + "<br><br><br>")
    $("#result").append(` <img src = "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`)

    }
}

function search_(){
    movie_name = $("#movie_name").val()
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=1b977ff48db9f4e31e40912f11c4ea6b&language=en-US&query=${movie_name}&page=1&include_adult=false`,
        type: "get",
        success: process_res
    })
}
function setup () {
    $("#find_movie_info").click(search_)
}


$(document).ready(setup)