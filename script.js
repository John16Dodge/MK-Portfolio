function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');
    
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const userMessage = form.querySelector('textarea[name="message"]').value;

    const whatsappNumber = "+918148916824"; 
    const whatsappMessage = `Hi Magesh, I’m ${name}. Subject: ${subject}. Message: ${userMessage}. My email: ${email}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    message.textContent = "Boom! Message sent. Connecting you to WhatsApp!";
    message.style.opacity = "1";
    form.reset();

    setTimeout(() => {
        message.style.opacity = "0";
        window.open(whatsappURL, '_blank');
    }, 2000);
}

function smoothScroll(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.querySelector(`#${targetId}`);
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        smoothScroll(targetPosition, 300);
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.querySelector(`#${targetId}`);
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        smoothScroll(targetPosition, 300);
    });
});

const greetings = [
    "Hello",      // English
    "வணக்கம்", // Tamil (Vanakkam)
    "नमस्ते",     // Hindi (Namaste)
    "مرحبا",      // Arabic (Marhaban)
    "Hallo",      // German
    "Hola",       // Spanish
    "Bonjour",    // French
    "Ciao",       // Italian
    "Olá",        // Portuguese
    "こんにちは",  // Japanese (Konnichiwa)
    "안녕하세요",  // Korean (Annyeonghaseyo)
];

const names = [
    "Magesh Kumar Jayavel",           // English
    "மகேஷ் குமார் ஜெயவேல்",      // Tamil
    "मगेश कुमार जयवेल",           // Hindi
    "ماجيش كومار جايافيل",       // Arabic
    "Magesh Kumar Jayavel",           // German
    "Magesh Kumar Jayavel",           // Spanish
    "Magesh Kumar Jayavel",           // French
    "Magesh Kumar Jayavel",           // Italian
    "Magesh Kumar Jayavel",           // Portuguese
    "マゲシュ・クマール・ジャヤヴェル", // Japanese
    "마게시 쿠마르 자야벨",         // Korean
];

let currentIndex = 0;
const greetingElement = document.getElementById('greeting');
const nameElement = document.getElementById('name');

function updateGreeting() {
    greetingElement.textContent = greetings[currentIndex];
    nameElement.textContent = names[currentIndex];
    currentIndex = (currentIndex + 1) % greetings.length;
}

setInterval(updateGreeting, 1300); // Change every 1.3 seconds
updateGreeting(); // Initial call to set the first greeting and name

// Motivational Quotes Array
const motivationalQuotes = [
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Success doesn’t come from what you do occasionally, but from what you do consistently. – Marie Forleo",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Dream big, work hard, stay focused, and surround yourself with good people. – Unknown"
];

// Function to Display a Random Quote on Page Load
function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quoteElement.textContent = motivationalQuotes[randomIndex];
}

// Call the function on page load
window.onload = displayRandomQuote;