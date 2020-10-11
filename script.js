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
    var textNumber = document.createTextNode(number);
    document.getElementById("text").appendChild(textNumber);
}

function getOrder(order){
    orderFlag = true;
    this.order = order;

    var orderNumber = document.createTextNode(order);
    document.getElementById("text").appendChild(orderNumber);


}