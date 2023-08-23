const canvas = document.getElementById('gamecanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundlayer1 = new Image();
backgroundlayer1.src = 'layer1.jpg';
const backgroundlayer2 = new Image();
backgroundlayer2.src = 'layer2.png';
const backgroundlayer3 = new Image();
backgroundlayer3.src = 'layer3.png';
const backgroundlayer4 = new Image();
backgroundlayer4.src = 'layer4.png';
const backgroundlayer5 = new Image();
backgroundlayer5.src = 'layer5.png';

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const speed = document.getElementById('speed');
speed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
    gameSpeed = e.target.value;
    speed.innerHTML = e.target.value;
});

class Layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1400;
        this.height = 720;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= - this.width){
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);

    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundlayer1, 0.5); 
const layer2 = new Layer(backgroundlayer2, 0.8); 
const layer3 = new Layer(backgroundlayer3, 1.2); 
const layer4 = new Layer(backgroundlayer4, 1.4); 
const layer5 = new Layer(backgroundlayer5, 1.6); 

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    layer1.update();
    layer1.draw();
    layer2.update();
    layer2.draw();
    layer3.update();
    layer3.draw();
    layer4.update();
    layer4.draw();
    layer5.update();
    layer5.draw();
    requestAnimationFrame(animate);
};
animate();