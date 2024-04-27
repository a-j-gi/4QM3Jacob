
function number() {
const numberr = document.getElementById("numberr").value;
if (numberr > 0) {
    document.getElementById("res").innerHTML = "The number is positive.";
}
else if (numberr < 0) {
    document.getElementById("res").innerHTML = "The number is not positive.";
}
else if (numberr == 0) {
    document.getElementById("res").innerHTML = "That is zero.";
}
else {
    document.getElementById("res").innerHTML = "Not a number. Please input a number.";
}
document.getElementById("number").innerHTML = number;
}