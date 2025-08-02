const button=document.getElementById('btn');
let text=document.getElementById('text');
button.onclick=function(){
    const password=randpass(length,includelowercase,includeuppercase,includenumbers,includespecial);
    text.textContent=password;
}
function randpass(length,includelowercase,includeuppercase,includenumbers,includespecial){
    const lowercase='abcdefghijklmnopqrstuvwxyz';
    const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number='1234567890';
    const special='!@#$%^&*';
    
    let allowed="";
    let password="";

    allowed+=includeuppercase?uppercase:"";
    allowed+=includenumbers?number:"";
    allowed+=includespecial?special:"";
    allowed+=includelowercase?lowercase:"";

    if(length<=0){
        return 'Please more than 1';
    }
    for(let i=0;i<length;i++){
        const randidx=Math.floor(Math.random()* allowed.length);
        password+=allowed[randidx];
    }
    return password;

}

const length=12;
const includelowercase=true;
const includeuppercase=true;
const includenumbers=true;
const includespecial=true;




