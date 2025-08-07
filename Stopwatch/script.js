const display=document.getElementById('time');
let isrunning=false;
let startime=0;
let elapsed=0;
let timer=null;

function start(){
    if(!isrunning){
        startime=Date.now()-elapsed;
        timer=setInterval(update,10)
        isrunning=true
    }
    
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsed=Date.now()-startime;
        isrunning=false;
    }
}

function reset(){
    clearInterval(timer);
    display.textContent=`00:00:00`;
    isrunning=false;
}

function update(){
    const now=Date.now();
    elapsed=now-startime;
    let hours=Math.floor(elapsed/(1000*60*60));
    let min=Math.floor((elapsed/(1000*60))%60);
    let sec=Math.floor(((elapsed/1000)%60));
    let mm=Math.floor((elapsed%1000)/10)
    display.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;

}
