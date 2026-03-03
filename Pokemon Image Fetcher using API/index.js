const myButton= document.getElementById("button");
const myImg=document.createElement("img");
document.body.appendChild(myImg);



async function pokeapi(name){
    const fetcher=fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    try{
    const res= await fetcher;
    if (res.ok!=true){
        throw new Error("This pokemon not found bro");
    }
    const data= await res.json();
    imager(data);
    
    }
    catch(error){
        console.error(error);
    }
    
}

myButton.onclick = function(){
    const myPoke= document.getElementById("pokemon").value.toLowerCase();
    pokeapi(myPoke);
}

function imager(data){
    
    myImg.src=data.sprites.front_default;
    myImg.classList.add("imgs");
    

}