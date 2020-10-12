var number1 = 0;
var number2 = 0;

var order;

var orderFlag = false;

function getNumber(number){
    if(!orderFlag){
        number1 += number;
    }
    else{
        number2 += number
    }
    var numberText = document.createTextNode(number);
    document.getElementById("text").appendChild(numberText);
}

function getOrder(order){
    orderFlag = true;
    this.order = order;

    var orderText = document.createTextNode(order);
    document.getElementById("text").appendChild(orderText);
}

function equation(){
    var answer;
    switch(order){
        case "*":
            answer = number1 * number2;
            break;
        case "/":
            answer = number1 / number2;
            break;
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
    }
    var answerText = document.createTextNode("=" + answer);
    document.getElementById("text").appendChild(answerText);
}

function dot(){

}