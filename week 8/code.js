function calc(operation){
    
    firstopp = jQuery('#opp1').val();
    secondpop = jQuery('#opp2').val();

    firstopp_int = parseInt(firstopp);
    secondopp_int = parseInt(secondpop);
    hide_button = "<button class='hide'> Hide it </button>"

switch (operation){
    case "add":

      result = firstopp_int + secondopp_int;
      text = firstopp + " +  " + secondopp + " = ";
      styled_result = "<div id='addStyle'>" + text + result + hide_button + "</div>";       
      break;

    case "sub":

      result = firstopp_int - secondopp_int;
      text = firstopp + " - " + secondopp + " = ";
      styled_result = "<div id='subStyle'>" + text + result + hide_button + "</div>"; 
      break;

    case "multi":

      result = firstopp_int * secondopp_int;
      text = firstopp + " * " + secondopp + " = ";
      styled_result = "<div id='multiStyle'>" + text + result + hide_button + "</div>";
      break;

    case "divi":

      result = firstopp_int / secondopp_int;
      text = firstopp + " / " + secondopp + " = ";
      styled_result = "<div id='diviStyle'>" + text + result + hide_button +  "</div>"; 
      break;

    default:
      console.log("Something bad happened");

}

  result = value + result;
  jQuery('#result').html(result);

  old_div_content = jQuery('#history').html();
  new_div_content = old_div_content + styled_result ; 
  jQuery('#history').html(new_div_content); 
}

function hide_(){
  $(this).parent().remove();
}
setup = function() {
  
  jQuery('.button_').click(function (){
    calc(this.id);
  });
  
  jQuery('body').on("click", ".hide", hide_);
  

}

  
  jQuery(document).ready(setup)