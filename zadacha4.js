// JS za zadacha 4

let CPU = Math.floor(Math.random() * 100);
let GPU = Math.floor(Math.random() * 100);
let PSU = Math.floor(Math.random() * 100);
let Motherboard = Math.floor(Math.random() * 100);
let SSD = Math.floor(Math.random() * 100);
let computerCase = Math.floor(Math.random() * 100);
let price = CPU + GPU + PSU + Motherboard + SSD + computerCase; 

function showPrice() {
    document.getElementById("CPU").innerHTML = "Price of CPU is: " + CPU;
    document.getElementById("GPU").innerHTML = "Price of GPU is: " + GPU;
    document.getElementById("PSU").innerHTML = "Price of PSU is: " + PSU;
    document.getElementById("Motherboard").innerHTML = "Price of Motherboard is: " + Motherboard;
    document.getElementById("SSD").innerHTML = "Price of SSD is: " + SSD;
    document.getElementById("computerCase").innerHTML = "Price of computerCase is: " + computerCase;
}

document.addEventListener("DOMContentLoaded", function() {
    showPrice();
});

function totalPrice(){
    client = String(document.getElementById("client").value);

    if (client == "normal"){
        document.getElementById("result").innerHTML = "Total Price = " + price;
    } else if (client == "special") {
        document.getElementById("result").innerHTML = "Total Price + 15% discount = " + price * ( (100-15) / 100 );
    }
}