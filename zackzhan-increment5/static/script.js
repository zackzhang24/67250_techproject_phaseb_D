// --- Console Practice ---
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}
sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// --- Time-Based Greeting ---
var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var el = document.getElementById("greeting");
    if (!el) return;
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

// --- Dynamic Footer Year ---
function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (!yearEl) return;
    var year = new Date().getFullYear();
    yearEl.innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
}

// --- Active Navigation Bar ---
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

// --- jQuery Read More / Read Less ---
if (typeof $ !== 'undefined') {
    $("#readMore").click(function(){
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });

    $("#readLess").click(function(){
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
}

// --- Buy Tickets Form Toggle ---
function showPurchaseForm() {
    var form = document.getElementById("purchaseForm");
    if (form) {
        form.style.display = "block";
    }
}

// --- Responsive Navigation Toggle ---
function toggleNav() {
    var nav = document.querySelector('.nav_bar');
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    }
}

// --- Leaflet Map ---
var mapEl = document.getElementById('map');
if (mapEl) {
    var map = L.map('map').setView([40.4433, -79.9436], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup('MonoMuse Museum')
        .openPopup();
}


// --- Responsive Navigation Toggle ---
function toggleNav() {
    var nav = document.querySelector('.nav_bar');
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    }
}

// --- Leaflet Map ---
var mapEl = document.getElementById('map');
if (mapEl) {
    var map = L.map('map').setView([40.4433, -79.9436], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup('MonoMuse Museum')
        .openPopup();
}