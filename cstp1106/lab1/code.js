console.log("is working");

function solve_quad(){
    a = $("#a_value").val();
    b = $("#a_value").val();
    c = $("#a_value").val();
if(a == 0){
    console.log("is not quadratic");
    if(b == 0){
        console.log("Bye! cuz a=0 and b=0!");
    } else {
        x1 = -1 * c / b
        console.log(x1);
    }
} else {
    d = b ** 2 - 4  * a  * c;

    if (d < 0)
    console.log("No real answer!");
    else{
        x1 = (-b + Math.sqrt(d)) / (2 * a)
        x2 = (-b - Math.sqrt(d)) / (2 * a)
        console.log("X1 : " + x1);
        console.log("X2 : " + x2);
        }
    }
}

//a=3
//b=4
//c=1

//solve_quad(a,b,c)
// solve_quad(2,2,1)
// solve_quad(2,2,1)
// solve_quad(2,2,1)
// solve_quad(2,2,1)


function setup(){
    console.log("jQuery words!");
    $("#calc_the_route_of_quad").click(solve_quad)

    // solve_quad(?,?,?)
}

$(document).ready(setup)