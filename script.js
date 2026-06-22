// Typing Animation
const text = "I Love You Rana ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

// Fade Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

// Relationship Counter
const startDate = new Date("2025-01-01");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const mins = Math.floor(diff / (1000 * 60)) % 60;

    document.getElementById("relationship-counter").innerHTML = 
        ${days} Days ❤️<br>
        ${hours} Hours ❤️<br>
        ${mins} Minutes ❤️
    ;
}

setInterval(updateCounter, 1000);
updateCounter();

// Surprise Button
document.getElementById("surpriseBtn").addEventListener("click", () => {

    document.getElementById("surpriseMessage").style.display = "block";

    heartExplosion();

    const music = document.getElementById("loveMusic");
    music.play().catch(() => {});

});

function heartExplosion() {
    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.classList.add("explosion");
        heart.innerHTML = "❤️";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty("--x", (Math.random() * 800 - 400) + "px");
        heart.style.setProperty("--y", (Math.random() * 800 - 400) + "px");

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
