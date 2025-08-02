let max=100;
let min=1;
let random=Math.floor(Math.random()*(max-min))+min;
console.log(random);
button=document.getElementById('btn')
text=document.getElementById('text');
text2=document.getElementById('text2');
let guess;
let count=0;
button.onclick=function(){
    guess=document.getElementById('guess').value;
    if(isNaN(guess) || guess==0){
        text.textContent='Enter Something Valid';
    }
    else{
        
        guess=Number(guess);
        if(guess==random){
            text.textContent='Congragulations you got the number';
            count++;
            text2.textContent='It Took you '+count+' Attempts';
        }
        else{
            text.textContent='Incorrect Guess';
            count++
            if(guess>random){
                text2.textContent='Think of a number lower';
            }
            else{
                text2.textContent='Think of a number higher';

            }
        }

    }


}



