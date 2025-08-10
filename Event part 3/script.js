let box=document.getElementById('box');
let movement=10;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    box.textContent='🥹';
    box.style.backgroundColor="tomato";
})

document.addEventListener("keyup",event=>{
    box.textContent='😃';
    box.style.backgroundColor='lightblue';
})

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case 'ArrowDown':
                y+=movement;
                break;
            case 'ArrowUp':
                y-=movement;
                break;
            case 'ArrowLeft':
                x-=movement;
                break;
            case 'ArrowRight':
                x+=movement;
                break;    
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;


    }
})