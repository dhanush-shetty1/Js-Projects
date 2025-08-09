let box=document.getElementById('box');

box.addEventListener("click",event=>{
    event.target.style.backgroundColor='red';
    event.target.textContent='OUCH!!🤕';
})

box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor='yellow';
    event.target.textContent='Dont do it🥹';
})

box.addEventListener("mouseout",evenet=>{
    event.target.style.backgroundColor='lightgreen'
    event.target.textContent='Dont Click Me 😃';
})