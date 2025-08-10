let box=document.getElementById('box');

box.addEventListener("keydown",event=>{
    box.textContent='🥹';
    box.style.backgroundColor="tomato";
})

box.addEventListener("keyup",event=>{
    box.textContent='😃';
    box.style.backgroundColor='lightblue';
})
