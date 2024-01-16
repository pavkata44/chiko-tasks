// JS za zadacha 3

function showArray() {
    let array = [5,3,6,12,4];

    document.getElementById("array").innerHTML = "Array numbers are: " + array;
}

document.addEventListener("DOMContentLoaded", function() {
    showArray();
});

function sortArray() {
    let array = [5,3,6,12,4];
    array.sort((a, b) => a - b);

    document.getElementById("array").innerHTML = "Sorted array numbers are: " + array;
}