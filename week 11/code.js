hide_button = "<button class='hide'>Hide this</button>"

function f1(){
    tmp1 = jQuery("#opp1").val()
    tmp2 = jQuery("#opp2").val()
    tmp1 = Number (tmp1)
    tmp2 = Number (tmp2)
    jQuery("#result").html("Result: " + (tmp1 + tmp2))
    $("#history").append("<div class='addStyle'>" +  tmp1 + " + " + tmp2 + " = " + (tmp1 + tmp2) + hide_button +  "<div>" )
}

function f2(){
    tmp1 = jQuery("#opp1").val()
    tmp2 = jQuery("#opp2").val()
    tmp1 = Number (tmp1)
    tmp2 = Number (tmp2)
    jQuery("#result").html("Result: " + (tmp1 - tmp2))
    $("#history").append("<div class='subStyle'>" +  tmp1 + " - " + tmp2 + " = " + (tmp1 - tmp2) + hide_button +  "<div>" )
}

function f3(){
    tmp1 = jQuery("#opp1").val()
    tmp2 = jQuery("#opp2").val()
    tmp1 = Number (tmp1)
    tmp2 = Number (tmp2)
    jQuery("#result").html("Result: " + (tmp1 * tmp2))
    $("#history").append("<div class='multiStyle'>" + tmp1 + " * " + tmp2 + " = " + (tmp1 * tmp2) + hide_button + "<div>" )
}

function f4(){
    tmp1 = jQuery("#opp1").val()
    tmp2 = jQuery("#opp2").val()
    tmp1 = Number (tmp1)
    tmp2 = Number (tmp2)
    jQuery("#result").html("Result: " + (tmp1 / tmp2))
    $("#history").append("<div class='diviStyle'>" + tmp1 + " / " + tmp2 + " = " + (tmp1 / tmp2) + hide_button +  "<div>")
}

function hide_(){
    $(this).parent().hide();
    
  }

function setup(){
    console.log("setup() got called!");
    jQuery("#add").click(f1)
    jQuery("#sub").click(f2)
    jQuery("#multi").click(f3)
    jQuery("#divi").click(f4)

    
    jQuery('body').on("click", ".hide",  hide_);


}







$(document).ready(setup)