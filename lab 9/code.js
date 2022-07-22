menu_value = ""
data = ""
page_number = 1
page_size = ""
function process_response(x) {
    data = x
    page_number = 1
    current_page = ""
    display()
}

function call_ajax() {
    w = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=1b977ff48db9f4e31e40912f11c4ea6b&query=${w}`,
        "type": "GET",
        "success": process_response
    })
}
function display_back_drop() {
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100"%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`)



}

function display() {

    $("#results").empty();
    for(i = 1; i<= Math.ceil(data.results.length /page_size); i++){
        $("#results").append(`<button class = "display" id = "${i}">${i}</button>`)
    }
    $("#results").append("<br>")
    
    page_size = Number(page_size)
    first_index = page_size * (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size - 1)
    for (i = first_index; i <= last_index; i++) {

        $("#results").append(data.results[i].original_title + "<br>");

        $("#results").append(data.results[i].overview + "<br>");
        x = data.results[i].poster_path
        image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");

        z = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>");
    }
}

function chage_page_number() {
    page_number = $(this).attr("id");
    page_number = Number(page_number)
    display()
}
function setup() {
    $("#find_movie_info").click(call_ajax)
    
    $("body").on("click", ".backdrop_button", display_back_drop)
 
     page_size = $("#page_size option:selected").val();
     $("#page_size").change(function () {
         page_size = $("#page_size option:selected").val();
     })
 
     $(".display").click(chage_page_number)
 
 }
 
$(document).ready(setup)