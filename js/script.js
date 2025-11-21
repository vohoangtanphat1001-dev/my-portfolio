document.addEventListener('DOMContentLoaded', () => {
    console.log(">>> SYSTEM ONLINE");
    console.log(">>> MATRIX RAIN INITIALIZED...");

    alert("🟢 Chào mừng bạn đến với Portolio của tớ!");

    // ====== MATRIX RAIN EFFECT ======

    const canvas = document.getElementById("matrixRain");
    const ctx = canvas.getContext("2d");

    // Fullscreen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEFghijklm$#@*&%+=-";
    const matrix = letters.split("");

    const fontSize = 18;
    const columns = canvas.width / fontSize;

    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff9f";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 40);

    // Resize responsive
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
