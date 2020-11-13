const canvas = document.getElementById("snake"); //associa o canvas à variável canvas
const context = canvas.getContext("2d"); //associa o contexto do canvas à variável 'context'
let box = 32; //tamanho do pixel
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};

function renderBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}; //renderiza o background do jogo

function renderSnake() {
    for (i = 0; snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    };
}

renderBG();
renderSnake();