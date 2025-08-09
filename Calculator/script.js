const disp=document.getElementById('text');

function display(input){
    disp.value+=input;
}

function cleard(){
    disp.value="";
}

function result(){
    try{
        disp.value=eval(disp.value);
    }
    catch(error){
        disp.value="Error";
    }

}