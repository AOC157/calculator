var number1 = "";
var number2 = "";

var order;

var equationFlag = false; 

var orderFlag = false;

function getNumber(number){
    if(equationFlag){
        document.getElementById("text").innerText = "";
        equationFlag = false;
        orderFlag = false;
    }
    if(!orderFlag){
        number1 += number;
    }
    else{
        number2 += number;
    }
    var numberText = document.createTextNode(number);
    document.getElementById("text").appendChild(numberText);
}

function getOrder(order){
    if(equationFlag){
        document.getElementById("text").innerHTML = "";
        return;
    }
    if(orderFlag){
        return;
    }
    orderFlag = true;
    this.order = order;

    var orderText = document.createTextNode(order);
    document.getElementById("text").appendChild(orderText);
}

function equation(){
    equationFlag = true;
    var answer;
    switch(order){
        case "*":
            answer = number1 * number2;
            break;
        case "/":
            answer = number1 / number2;
            break;
        case "+":
            answer = Number(number1) + Number(number2);
            break;
        case "-":
            answer = number1 - number2;
            break;
    }
    var answerText = document.createTextNode("=" + answer);
    document.getElementById("text").appendChild(answerText);
    number1 = "";
    number2 = "";
}