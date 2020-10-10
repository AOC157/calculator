var number1 = 0;
var number2 = 0;

var order;

var orderFlag = false;

function getNumber(number){
    if(!orderFlag){
        number1 *= 10;
        number1 += number;
    }
    else{
        number2 *= 10;
        number2 += number
    }
    document.getElementById(number).style.backgroundColor = "red";
}

function getOrder(order){
    orderFlag = true;
    this.order = order;

}