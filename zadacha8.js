// JS za zadacha 8

function sumArray() {
    let array = [5, 3, 10, 11, 4, 24, 2, 13];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 !== 0) {
            sum += array[i];
        }
    }

    console.clear();
    document.getElementById("array").innerHTML = "Original array: " + array;
    document.getElementById("result").innerHTML = "Result: " + sum;
    console.log("Original Array: " + array);
    console.log("Result: " + sum);
}