// JS za zadacha 9

function arrayReverse() {
    let array = ["apple","orange","turtle","test"];
    let new_array = "";

    for(let i = array.length - 1; i >= 0; i--) {
        if (i == 3) {
        new_array += array[i];
        } else new_array += ", " + array[i];
    }

    console.clear();
    document.getElementById("array").innerHTML = "Original array: " + array;
    document.getElementById("result").innerHTML = "Result: " + new_array;
    console.log("Original Array: " + array);
    console.log("Result: " + new_array);
}