// JS za zadacha 2

function numCompareResult() {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);

    document.getElementById("num1").innerHTML = "First Random Number = " + randomNumber1;
    document.getElementById("num2").innerHTML = "Second Random Number = " + randomNumber2;

    if (randomNumber1 > randomNumber2){
        console.clear();
        console.log("Number 1 is greater than Number 2");
    } else if (randomNumber1 < randomNumber2) {
        console.clear();
        console.log("Number 2 is greater than Number 1");
    } else if (randomNumber1 == randomNumber2) {
        console.clear();
        console.log("Both number are equal");
    }
}