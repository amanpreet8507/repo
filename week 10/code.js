function process_responses(data){
    $("#z").html(JSON.stringify(data.main.temp))
}


function init_ajex(){
    city_name = $("#cityname").val()
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=897a00f148b69c6a4a05dfee06c88da9&units=metric`,
        type:"GET",
        success: process_responses
    })
    }

function setup(){
    $('#temprature').click(init_ajex);
    }
$(document).ready(setup)