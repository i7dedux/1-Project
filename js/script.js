function FindD() {
    var side = parseInt(document.getElementById("side").value);
    document.getElementById("show").innerHTML = Math.sqrt(2) * side;
}

function TrArea() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    console.log(typeof(side1));
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    document.getElementById("display").innerHTML = area;
}

function Circle() {
    var r = parseInt(document.getElementById("radius").value);
    document.getElementById('cArea').innerHTML = Math.PI * r * r;
    document.getElementById('cCircum').innerHTML = 2 * Math.PI * r;
}

function FindLargest() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    if (num1 > num2) {
        document.getElementById("largest").innerHTML = num1;
    } else if (num2 > num1) {
        document.getElementById("largest").innerHTML = num2;
    } else {
        document.getElementById("largest").innerHTML = "Numbers are equal";
    }
}

function oddEven() {
    var num = parseInt(document.getElementById("num").value);
    if (num % 2 == 0) {
        document.getElementById("oddEven").innerHTML = "Even";
    } else {
        document.getElementById("oddEven").innerHTML = "Odd";
    }
}