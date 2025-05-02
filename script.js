// Button Event Handling
const magicButton = document.getElementById('magicButton');
const buttonStatus = document.getElementById('buttonStatus');

magicButton.addEventListener('click', () => {
    magicButton.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    buttonStatus.textContent = 'Button Clicked! Color Changed!';
});

magicButton.addEventListener('mouseover', () => {
    buttonStatus.textContent = 'Hovering over button...';
});

magicButton.addEventListener('mouseout', () => {
    buttonStatus.textContent = 'Waiting for action...';
});

magicButton.addEventListener('dblclick', () => {
    buttonStatus.textContent = 'Secret Double Click! Button Reset!';
    magicButton.style.backgroundColor = '#4CAF50';
});

// Slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

prev.addEventListener('click', () => {
    showSlides(--slideIndex);
});

next.addEventListener('click', () => {
    showSlides(++slideIndex);
});

showSlides(slideIndex);

// Tabs
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Form Validation
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    let isValid = true;
    
    // Name validation
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    return isValid;
}

// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Name is required';
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Invalid email format';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 8) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must be at least 8 characters';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Keypress detection
document.addEventListener('keypress', (e) => {
    buttonStatus.textContent = `Key pressed: ${e.key}`;
});
