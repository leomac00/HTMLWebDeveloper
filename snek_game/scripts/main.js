const canvas = document.getElementById("snake"); //associa o canvas à variável canvas
const context = canvas.getContext("2d"); //associa o contexto do canvas à variável 'context'
let box = 32; //tamanho do pixel
let snake = []; //Array responsável por manter elementos do corpo da cobrinha
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box,
};
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

function renderFood() {
	context.fillStyle = "red";
	context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", cd); //esta função 'escuta' um evento na página, no caso o pressionar de uma tecla (keydown)

function cd(event) {
	if (event.keyCode == 37 && direction != "right") direction = "left";
	if (event.keyCode == 38 && direction != "down") direction = "up";
	if (event.keyCode == 39 && direction != "left") direction = "right";
	if (event.keyCode == 40 && direction != "up") direction = "down";
} //muda a direçao da cobrinha

function playGame() {
	//faz com que a cobrinha fique dentro do canvas
	if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

	//termina o game
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over! :(\n Score: ' + (snake.length - 1));
        }
    }
	//renderizações
	renderBG();
	renderSnake();
	renderFood();

	//movimento
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	if (direction == "right") snakeX += box;
	if (direction == "left") snakeX -= box;
	if (direction == "up") snakeY -= box;
	if (direction == "down") snakeY += box;

	//reação da comida
	if (snakeX != food.x || snakeY != food.y) {
		snake.pop();
	} else {
		food.x = Math.floor(Math.random() * 15 + 1) * box;
		food.y = Math.floor(Math.random() * 15 + 1) * box;
	}
	let newHead = {
		x: snakeX,
		y: snakeY,
	};
	snake.unshift(newHead);
}

let game = setInterval(playGame, 200);
