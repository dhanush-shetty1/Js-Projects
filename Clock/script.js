function updateclock(){
    const now= new Date();
    const hour=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();
    let time=`${hour}:${min}:${sec}`;
    document.getElementById('clock').textContent=time;
}

updateclock();

setInterval(updateclock,1000);