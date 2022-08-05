menu_value = ""
data = ""
page_number = 1
page_size = 0
first_index = 1
last_index = 1

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
        type: "GET",
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
    $("#button").empty();
    $("#more_click").empty();

    page_size = Number(page_size)
    first_index = page_size * (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size - 1)
    for (i = first_index; i <= last_index; i++) {

        if(i < 20){
        x = data.results[i].poster_path
        image_html = `<img src='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");

        }
    }

    for (i = 1; i <= Math.ceil(data.results.length / page_size); i++) {
        $("#button").append(`<button class="display"onclick="change_page_number(this)" id="${i}">${i}</button>`)
    }
        $("#more_click").append(`<button id= "first"onclick="first()">First</button>`)
        $("#more_click").append(`<button id = "previous"onclick="previous()" > Previous </button>`)

        $("#more_click").append(`<button id = "next"onclick="next()"> Next </button>`)
        $("#more_click").append(`<button id = "last"onclick="last()"> Last </button>`)

}



function change_page_number(thisis) {
    page_number = $(thisis).attr("id");
    page_number = Number(page_number)
    display()
}



function first(){
    page_number = 1
    display()
}



function last(){
    page_number = Math.ceil(data.results.length / page_size)
    display()
}


function next(){
    if(page_number >= Math.ceil(data.results.length / page_size)){
        return
    }
    else {
        page_number = page_number + 1
        display()
    }
          
}


function previous(){
    if (page_number == 1){
        return
    }
    else {
        page_number = page_number - 1
        display()
    }
}



function setup() {
    $("#find_movie_info").click(call_ajax)

    page_size = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })

    $("page_size").click(change_page_number, display)

    $("body").on("click", ".display", change_page_number)

}

jQuery(document).ready(setup)