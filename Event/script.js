let box=document.getElementById('box');
let btn=document.getElementById('btn');

btn.addEventListener("click",event=>{
    box.style.backgroundColor='red';
    box.textContent='OUCH!!🤕';
})

btn.addEventListener("mouseover",event=>{
    box.style.backgroundColor='yellow';
    box.textContent='Dont do it🥹';
})

btn.addEventListener("mouseout",evenet=>{
    box.style.backgroundColor='lightgreen'
    box.textContent='Dont Click Me 😃';
})