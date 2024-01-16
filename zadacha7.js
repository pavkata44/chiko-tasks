// JS za zadacha 7

function reverse() {
    console.clear();
    const word = document.getElementById("word").value;
    let revreseString = "";

    for (let i = word.length - 1; i >= 0; i--) {
        revreseString += word[i];
    }

    document.getElementById("result").innerHTML = "Result: " + revreseString;
    console.log("Original String: " + word);
    console.log("Result: " + revreseString)
}