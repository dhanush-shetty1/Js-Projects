let btn=document.getElementById('btn');
let img=document.getElementById('img');

btn.addEventListener("click",event=>{
    if(img.style.visibility==="hidden"){
        img.style.visibility="visible";
        btn.textContent='Hide';
    }
    else{
        img.style.visibility="hidden";
        btn.textContent='Show';
    }
})