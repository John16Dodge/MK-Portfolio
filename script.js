// Function to handle form submission
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

// Function for smooth scrolling
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

// Smooth scrolling for buttons and navbar links
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

// Greetings and name animation
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
    // Skip long greetings/names on mobile
    if (window.innerWidth <= 768 && (greetings[currentIndex].length > 10 || names[currentIndex].length > 20)) {
        currentIndex = (currentIndex + 1) % greetings.length;
    }
    greetingElement.textContent = greetings[currentIndex];
    nameElement.textContent = names[currentIndex];
    currentIndex = (currentIndex + 1) % greetings.length;
}

setInterval(updateGreeting, 1300);
updateGreeting();

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

function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    quoteElement.textContent = motivationalQuotes[randomIndex];
}

window.onload = () => {
    displayRandomQuote();
    showNotification();
};

function showNotification() {
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notifications.");
    } else if (Notification.permission === "granted") {
        const notification = new Notification("Welcome to Magesh's Portfolio!", {
            body: "Explore my skills, projects, and services. Let's connect!",
            icon: "MKJ.png",
        });

        notification.onclick = () => {
            window.focus();
        };
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                const notification = new Notification("Welcome to Magesh's Portfolio!", {
                    body: "Explore my skills, projects, and services. Let's connect!",
                    icon: "MKJ.png",
                });

                notification.onclick = () => {
                    window.focus();
                };
            }
        });
    }
}