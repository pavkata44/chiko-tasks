// JS za zadacha 1

function getSum() {
    var num1, num2, sum;

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    sum = num1 + num2;

    document.getElementById("result").innerHTML = sum;
}