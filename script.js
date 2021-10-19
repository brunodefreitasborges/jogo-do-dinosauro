const dino = document.getElementById("dino");
const background = document.querySelector(".background");
let dinoPosition = 0;
let isJumping = false;

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
        
    }
}

function jump() {
    
    isJumping= true;

    let upInterval = setInterval( () => {
        if (dinoPosition >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval( () => {
                if(dinoPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else {
                    dinoPosition -=10;
                dino.style.bottom = dinoPosition + "px";
                }
            }, 16.66)
            
        } else {
            dinoPosition += 10;
            dino.style.bottom = dinoPosition + "px";
        }
        
    }, 16.66);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 2000;
    let randomTimer = Math.random() * 5000;

    cactus.classList.add('cactus');
    cactus.style.left = 2000 + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactus.style.left < 60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition >= 70 && cactusPosition <= 100 && dinoPosition < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 id="game-over">GAME OVER</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 16.66)

    setTimeout(createCactus, randomTimer);
    
}

createCactus();
document.addEventListener('keyup',handleKeyUp)