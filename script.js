const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
const morreu = document.querySelector('.morreu');

const jump = () => {
mario.classList.add('jump');
setTimeout(()=>{
    mario.classList.remove('jump');
}, 500);
}

const loop = setInterval (()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudPosition = cloud.offsetLeft;
    
    if(pipePosition<=120 &&pipePosition>0&& marioPosition<=100){
        pipe.style.animation='none';
        pipe.style.left = `${pipePosition}px`; 
        
        mario.style.animation='none';
        mario.style.bottom = `${marioPosition}px`; 
        
        mario.src = './Imagens/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft = '50px'

        cloud.style.animation='none';
        cloud.style.left = `${cloudPosition}px`; 

        cloud.style.left = '50px';
        cloud.src = './Imagens/dare.gif';
        cloud.style.width = '600px'
        cloud.style.marginLeft = '0px'

        morreu.style.width = '1000px'
       
        

        clearInterval(loop);
    }
},10)
document.addEventListener('keydown', jump);