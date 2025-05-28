const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Paddle {
    constructor(x, isPlayer) {
        this.width = 20;
        this.height = 100;
        this.x = x;
        this.y = canvas.height / 2 - this.height / 2;
        this.speed = 7;
        this.dy = 0;
        this.isPlayer = isPlayer;
    }

    move() {
        this.y += this.dy;

        // Stay within canvas
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
    }

    update(ball) {
        if (this.isPlayer) {
            this.move();
        } else {
            // Simple AI to follow ball
            if (ball.y < this.y + this.height / 2) this.y -= 5;
            else if (ball.y > this.y + this.height / 2) this.y += 5;

            // Stay in bounds
            if (this.y < 0) this.y = 0;
            if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
        }
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Ball {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.size = 15;
        this.vx = Math.random() > 0.5 ? 5 : -5;
        this.vy = (Math.random() - 0.5) * 8;
    }

    update(p1, p2) {
        this.x += this.vx;
        this.y += this.vy;

        // Top and bottom wall bounce
        if (this.y < 0 || this.y + this.size > canvas.height) this.vy *= -1;

        // Paddle collisions
        if (this.collides(p1)) this.vx *= -1;
        if (this.collides(p2)) this.vx *= -1;

        // Score logic
        if (this.x < 0) {
            game.aiScore++;
            this.reset();
        } else if (this.x + this.size > canvas.width) {
            game.playerScore++;
            this.reset();
        }
    }

    collides(paddle) {
        return (
            this.x < paddle.x + paddle.width &&
            this.x + this.size > paddle.x &&
            this.y < paddle.y + paddle.height &&
            this.y + this.size > paddle.y
        );
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Game {
    constructor() {
        this.player = new Paddle(30, true);
        this.ai = new Paddle(canvas.width - 50, false);
        this.ball = new Ball();
        this.playerScore = 0;
        this.aiScore = 0;

        this.bindControls();
        this.loop();
    }

    bindControls() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") this.player.dy = -this.player.speed;
            if (e.key === "ArrowDown") this.player.dy = this.player.speed;
        });
        window.addEventListener("keyup", (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") this.player.dy = 0;
        });
    }

    drawScore() {
        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText
    }
} 