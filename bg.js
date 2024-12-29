const canvas = document.getElementById('squaresCanvas');
const ctx = canvas.getContext('2d');
const squareSize = 50; // Square size set to 50px
const speed = 0.5; // Speed of the movement
const borderColor = '#999'; // Border color of squares
const hoverFillColor = '#222'; // Default hover color set to semi-transparent red

let numSquaresX, numSquaresY;
let gridOffset = { x: 0, y: 0 };
let hoveredSquare = null;

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    numSquaresX = Math.ceil(canvas.width / squareSize) + 1;
    numSquaresY = Math.ceil(canvas.height / squareSize) + 1;
};

const drawGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < numSquaresX; x++) {
        for (let y = 0; y < numSquaresY; y++) {
            const squareX = (x * squareSize) + (gridOffset.x % squareSize);
            const squareY = (y * squareSize) + (gridOffset.y % squareSize);

            // Fill square if hovered
            if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
                ctx.fillStyle = hoverFillColor;
                ctx.fillRect(squareX, squareY, squareSize, squareSize);
            }

            // Set the border color
            ctx.strokeStyle = borderColor;
            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
    }

    // Draw radial gradient overlay
    const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
    );
    gradient.addColorStop(0, 'rgba(3, 3, 3, 0)'); // Transparent center
    gradient.addColorStop(1, '#000'); // Black edge

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const updateAnimation = () => {
    gridOffset.x -= speed; // Movement direction

    if (Math.abs(gridOffset.x) > squareSize) gridOffset.x = 0;

    drawGrid();
    requestAnimationFrame(updateAnimation);
};

// Track mouse hover
const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate which square is being hovered over
    const hoveredSquareX = Math.floor(
        (mouseX - (gridOffset.x % squareSize)) / squareSize
    );
    const hoveredSquareY = Math.floor(
        (mouseY - (gridOffset.y % squareSize)) / squareSize
    );

    hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
};

const handleMouseLeave = () => {
    hoveredSquare = null;
};

// Set up the canvas
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseleave', handleMouseLeave);

// Start the animation
updateAnimation();
