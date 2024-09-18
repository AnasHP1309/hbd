// Adjust autoplay audio volume
document.getElementById('birthday-audio').volume = 0.5;

// Fireworks animation using canvas
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework properties
const fireworks = [];
function Firework() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 2;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random();
    this.hue = Math.random() * 360;

    this.update = function () {
        this.size -= 0.1;
        this.y -= this.speed;
        if (this.size < 0) {
            this.size = Math.random() * 5 + 2;
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.hue = Math.random() * 360;
        }
    }

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 50%, ' + this.opacity + ')';
        ctx.fill();
    }
}

function createFireworks() {
    for (let i = 0; i < 100; i++) {
        fireworks.push(new Firework());
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(firework => {
        firework.update();
        firework.draw();
    });
    requestAnimationFrame(animateFireworks);
}

// Initialize fireworks
createFireworks();
animateFireworks();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
