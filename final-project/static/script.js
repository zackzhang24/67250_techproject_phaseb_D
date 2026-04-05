// ===== Dynamic Footer Year =====
function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (!yearEl) return;
    var year = new Date().getFullYear();
    yearEl.innerHTML = "&copy; " + year + " ACE Museum. All rights reserved.";
}

// ===== Time-Based Greeting =====
function greeting() {
    var el = document.getElementById("greeting");
    if (!el) return;
    var hour = new Date().getHours();
    if (hour < 5 || hour >= 20) {
        el.innerHTML = "Good Night! Welcome to ACE Museum";
    } else if (hour < 12) {
        el.innerHTML = "Good Morning! Welcome to ACE Museum";
    } else if (hour < 18) {
        el.innerHTML = "Good Afternoon! Welcome to ACE Museum";
    } else {
        el.innerHTML = "Good Evening! Welcome to ACE Museum";
    }
}
greeting();

// ===== Active Navigation =====
function ActiveNav() {
    var navLinks = document.querySelectorAll('.nav_bar a');
    navLinks.forEach(function(link) {
        if (link.classList.contains('hamburger')) return;
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}
ActiveNav();

// ===== Hamburger Toggle =====
function toggleNav() {
    var nav = document.querySelector('.nav_bar');
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    }
}

// ===== Image Slideshow =====
var slideIndex = 0;

function showSlide(n) {
    var slides = document.querySelectorAll('.slideshow-container img');
    if (slides.length === 0) return;
    slideIndex = n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides.forEach(function(slide) {
        slide.classList.remove('slide-active');
    });
    slides[slideIndex].classList.add('slide-active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

if (document.querySelector('.slideshow-container')) {
    showSlide(0);
    setInterval(nextSlide, 4000);
}

// ===== Ticket Price Calculation =====
function updatePrice() {
    var quantity = document.getElementById('ticketQuantity');
    var type = document.getElementById('ticketType');
    var priceDisplay = document.getElementById('priceDisplay');
    if (!quantity || !priceDisplay || !type) return;

    var qty = parseInt(quantity.value) || 0;
    if (qty < 1) qty = 0;
    if (qty > 10) qty = 10;

    var unitPrice = 18;
    if (type.value === 'student') unitPrice = 10;
    if (type.value === 'member') unitPrice = 0;

    var price = qty * unitPrice;
    priceDisplay.innerHTML = "Total: $" + price.toFixed(2);
}

// ===== Checkout Form Validation =====
function validateCheckout() {
    var isValid = true;

    // Clear previous errors
    var errors = document.querySelectorAll('.error-msg');
    errors.forEach(function(err) {
        err.style.display = 'none';
    });

    // Visit date
    var date = document.getElementById('visitDate');
    if (date && !date.value) {
        showError('dateError', 'Please select a visit date.');
        isValid = false;
    }

    // Ticket type
    var type = document.getElementById('ticketType');
    if (type && !type.value) {
        showError('typeError', 'Please select a ticket type.');
        isValid = false;
    }

    // Quantity
    var qty = document.getElementById('ticketQuantity');
    if (qty && (!qty.value || parseInt(qty.value) < 1 || parseInt(qty.value) > 10)) {
        showError('qtyError', 'Please enter a quantity between 1 and 10.');
        isValid = false;
    }

    // Email
    var email = document.getElementById('email');
    if (email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value || !emailPattern.test(email.value)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }
    }

    // Zip code - optional but must be 5 digits if filled
    var zip = document.getElementById('zipCode');
    if (zip && zip.value) {
        var zipPattern = /^\d{5}$/;
        if (!zipPattern.test(zip.value)) {
            showError('zipError', 'Zip code must be exactly 5 digits.');
            isValid = false;
        }
    }

    if (isValid) {
        var total = (parseInt(qty.value) * 18).toFixed(2);
        sessionStorage.setItem('orderTotal', total);
        sessionStorage.setItem('orderQty', qty.value);
        sessionStorage.setItem('orderEmail', email.value);
        window.location.href = 'confirmation.html';
    }

    return false;
}

function showError(id, message) {
    var el = document.getElementById(id);
    if (el) {
        el.textContent = message;
        el.style.display = 'block';
    }
}

// ===== Confirmation Page =====
function loadConfirmation() {
    var totalEl = document.getElementById('confirmTotal');
    var qtyEl = document.getElementById('confirmQty');
    var emailEl = document.getElementById('confirmEmail');
    if (!totalEl) return;

    var total = sessionStorage.getItem('orderTotal') || '0.00';
    var qty = sessionStorage.getItem('orderQty') || '0';
    var email = sessionStorage.getItem('orderEmail') || '';

    totalEl.textContent = '$' + total;
    if (qtyEl) qtyEl.textContent = qty;
    if (emailEl) emailEl.textContent = email;

    sessionStorage.removeItem('orderTotal');
    sessionStorage.removeItem('orderQty');
    sessionStorage.removeItem('orderEmail');
}
loadConfirmation();

// ===== Leaflet Map =====
var mapEl = document.getElementById('map');
if (mapEl) {
    var map = L.map('map').setView([40.4433, -79.9436], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup('<strong>ACE Museum</strong><br>5000 Forbes Ave<br>Pittsburgh, PA 15213')
        .openPopup();
}

// ===== jQuery Features =====
if (typeof $ !== 'undefined') {

    // Read More / Read Less
    $("#readMore").click(function() {
        $("#longIntro").slideDown();
        $("#readLess").show();
        $("#readMore").hide();
    });

    $("#readLess").click(function() {
        $("#longIntro").slideUp();
        $("#readLess").hide();
        $("#readMore").show();
    });

    // Accordion
    $(".accordion-header").click(function() {
        var content = $(this).next(".accordion-content");
        var arrow = $(this).find(".accordion-arrow");
        $(".accordion-content").not(content).slideUp();
        $(".accordion-arrow").not(arrow).removeClass("open");
        content.slideToggle();
        arrow.toggleClass("open");
    });
}