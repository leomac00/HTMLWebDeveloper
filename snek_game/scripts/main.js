const canvas = document.getElementById("snake"); //associa o canvas à variável canvas
const context = canvas.getContext("2d"); //associa o contexto do canvas à variável 'context'
let box = 32; //tamanho do pixel
let snake = []; //Array responsável por manter elementos do corpo da cobrinha
let direction = "right"; //Guarda a atual direção de movimento da cobrinha

snake[0] = {
	x: 8 * box,
	y: 8 * box,
}; //Primeiro elemento da cobrinha

function renderBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
} //renderiza o background do jogo

function renderSnake() {
	for (i = 0; i < snake.length; i++) {
		context.fillStyle = "green";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
} //Renderiza a cobrinha

document.addEventListener("keydown", cd); //esta função 'escuta' um evento na página, no caso o pressionar de uma tecla (keydown)

function cd(event) {
	if (event.keyCode == 37 && direction != "right") direction = "left";
	if (event.keyCode == 38 && direction != "down") direction = "up";
	if (event.keyCode == 39 && direction != "left") direction = "right";
	if (event.keyCode == 40 && direction != "up") direction = "down";
} //muda a direçao da cobrinha

function playGame() {
	if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

	renderBG();
	renderSnake();

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (direction == "right") snakeX += box;
	if (direction == "left") snakeX -= box;
	if (direction == "up") snakeY -= box;
	if (direction == "down") snakeY += box;

	snake.pop();

	let newHead = {
		x: snakeX,
		y: snakeY,
	};

	snake.unshift(newHead);

	console.log("aqui passou");
}

let game = setInterval(playGame, 200);
