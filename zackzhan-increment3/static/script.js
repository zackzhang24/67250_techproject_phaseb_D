// --- Part 2: Console Practice ---

// Numeric addition
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

// String concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Function
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}
sumnPrint(x, y);
sumnPrint(A, B);

// Conditional
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// Arrays + Loops
var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

// forEach version
function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Found the Banana!");
        }
    });
}
// Comment these out after testing so alerts don't fire every page load
// findTheBanana(L1);
// findTheBanana(L2);

// --- Part 3: Time-Based Greeting ---

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var el = document.getElementById("greeting");
    if (!el) return; // prevents errors on other pages
    if (h < 5 || h >= 20) {
        el.innerHTML = "Good Night! Welcome to MonoMuse";
    } else if (h < 12) {
        el.innerHTML = "Good Morning! Welcome to MonoMuse";
    } else if (h < 18) {
        el.innerHTML = "Good Afternoon! Welcome to MonoMuse";
    } else {
        el.innerHTML = "Good Evening! Welcome to MonoMuse";
    }
}
greeting(hour);

// --- Part 4: Dynamic Footer Year ---

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (!yearEl) return;
    var year = new Date().getFullYear();
    yearEl.innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
}