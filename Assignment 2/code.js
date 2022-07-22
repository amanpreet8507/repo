function process_response(data){

    for( i = 0; i < data.results.length; i++){
    $("#results").append(JSON.stringify(data.results[i].original_title) + "<br>")
    $("#results").append(JSON.stringify(data.results[i].overview) + "<br><br><br>")
    $("#results").append(` <img src = "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`)
    
    z = `<button id="${data.results[i].backdrop_path}"
    class = "backdrop_button"> Backdrop image</button>`
    $("#results").append(z + "<br>");
    }
}

function search_(){
    w = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=1b977ff48db9f4e31e40912f11c4ea6b&language=en-US&query=${w}&page=1&include_adult=false`,
        "type": "GET",
        "success": process_response
    })
}

function display_back_drop() {
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`)



}
function setup () {
    $("#find_movie_info").click(search_)
    $("body").on ("click",".backdrop_button", display_back_drop)
}


$(document).ready(setup)