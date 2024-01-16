// JS za zadacha 6

function returnLastDigitName() {
    let number = Math.floor(Math.random() * 100);
    let lastDigit = number % 10;
    let numberName = 0;
    console.clear();
    console.log("The random generated number is: " + number);

    switch(lastDigit) {
        case 0: 
            numberName = "Zero";
            break;
        case 1: 
            numberName = "One";
            break;
        case 2:
            numberName = "Two";
            break;
        case 3:
            numberName = "Three";
            break;
        case 4:
            numberName = "Four";
            break;
        case 5:
            numberName = "Five";
            break;
        case 6:
            numberName = "Six";
            break;
        case 7:
            numberName = "Seven";
            break;
        case 8:
            numberName = "Eight";
            break;
        case 9:
            numberName = "Nine";
            break;
        default: "there seems to be an issue with the numbers, please try again!";    
    }

    console.log(lastDigit + " " + numberName);
}