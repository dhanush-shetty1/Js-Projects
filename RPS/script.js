const game=['rock','paper','scissors'];

const player=document.getElementById('playerres');
const computer=document.getElementById('compres');
const resultd=document.getElementById('result');

function playgame(choice){
    cchoice=game[Math.floor(Math.random()*3)];
    let result="";
    if(choice===cchoice){
        result='Its a Tie';
        resultd.textContent=result;
    }
    else{
        switch(choice){
            case 'rock':
                result=(cchoice==='scissors')?'You Win':'You loose';
                resultd.textContent=result;
            case 'paper':
                result=(cchoice==='rock')?'You Win':'You loose';
                resultd.textContent=result;
            case 'scissors':
                result=(cchoice==='paper')?'You Win':'You loose';
                resultd.textContent=result;
        }
    }
    computer.textContent=`COMPUTER ${cchoice}`;
    player.textContent=`PLAYER:${choice}`;

}