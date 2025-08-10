
async function fetchdata(){
    try{
        let pokemon =document.getElementById('search').value.toLowerCase();
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(!response.ok){
            throw new Error("Could not find Pokemon");
        }
        const data=await response.json();
        const sprite = data.sprites.front_default;
        const img=document.getElementById('sprite');
        img.src=sprite
        img.style.display='block';

    }
    catch(error){
        console.error(error);
    }
}