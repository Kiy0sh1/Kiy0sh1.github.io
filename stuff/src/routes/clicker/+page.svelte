<!--
Copyright Nemo Eriksso 2023
-->

<script>
import { onDestroy, onMount } from "svelte";

let start = true;
let fact = 0;
let fact2 = 0;
let wokertimeminuslinusbinus = 10;
let workerbaby = false;
let clicks = 0;
let price = 20;
let idktimer = 500;
let price2 = 100;
let färg = "background-color: red;"
let färg2 = "background-color: red;"
let randomnumbers = 12315;
let i = 1;
let interval;
let obj;

const letters= ["uջgrades", "upgradeз", "цpgrades", "upъradзs", "upgrades", "upgrдdes", "upgradзs", "upgrades","upѣrades","upgгades","upgraԃes","upgradeз", ]

onMount(()=>{
    interval  = setInterval(randommizer,40)
    obj = document.getElementById("orb");
    obj.addEventListener('click', getCoordinates);
});

onDestroy(()=>{
    clearInterval(interval)
});

setInterval(()=>{
    if(clicks >= price){
        färg="background-color: green;"
    }
    if(clicks >= price2){
        färg2="background-color: green;"
    }
    if(clicks < price){
        färg="background-color: red;"
    }
    if(clicks < price2){
        färg2="background-color: red;"
    }
},1);

function dosometing(){
    clicks += 1 + fact;
    console.log("clicks");
}


function factory(){
    if(clicks >= price){
        fact++;
        clicks -= price;
        price *= 2;	
    }

    if(clicks < price){
        färg="background-color: red;"
    }
}

function worker() {
    if(clicks >= price2){
        workerbaby = true;
        fact2++;
        clicks -= price2;
        price2 *= 2;
    
        if(workerbaby == true){
            setInterval(function(){
            clicks+=fact2;
        
            if(clicks >= price){
                färg="background-color: green;"
                
                if(clicks >= price2){
                    färg2="background-color: green;"
        
                    if(clicks <= price){
                        färg="background-color: red;"
                    }
                    
                    if(clicks <= price2){
                        färg2="background-color: red;"
                    }
                }
            }}, idktimer)
        }
    
    
        idktimer -wokertimeminuslinusbinus;
        if(idktimer <= 0){
            wokertimeminuslinusbinus = 0
        }
    }
}

function randommizer(){
    randomnumbers = letters[Math.floor(Math.random() * 11)]; 
}


function getCoordinates(){
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    obj.style.top = `min(${x}%, calc(100% - 200px))`;
    obj.style.left = `min(${y}%, calc(100% - 200px))`;
}    






</script>
<audio src="/audio/arabic.mp3"></audio>    
<body>
    <audio controls>
        <source src="qont.ogg" type="/audio/ogg">
    </audio>            
    <div class="container">
        <button on:click={dosometing} class="MainClick" id="orb"></button>
    </div>
    <h1 class="points">{clicks}</h1> 
    
    <div id="upgradeses2">
        <h1 class="uppgrades">{randomnumbers}</h1>
    </div>
    <button on:click={factory} class="upgrade1" style={färg}>{price} double clicks 
        <div class="facter">
            {fact}
        </div>
    </button>

    <button on:click={worker} class="upgrade2" style={färg2}>{price2} autoclikcers
        <div class="facter2">
            {fact2}
        </div>
    </button>          
</body>
    
<style>   
:global(body){
    background-image: url(https://necessarydisorder.files.wordpress.com/2018/01/agif8.gif?w=982);
    background-size: 20%;    
    animation: bluring;
    animation-duration: 2s;
    height: 100vmax;
    overflow: hidden;
}

@keyframes bluring{
    0% {filter: blur(100px);}
    100% {filter: blur(0px);}
}

.MainClick{
    background-image: url(orb.gif);
    border-radius: 50%;
    border: white;
    cursor: pointer;
    width: 200px;
    aspect-ratio: 1;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 114%;
}

#orb{
    position: relative;
    top: 0px;
    left: auto;
}

.container{
    width: 500px;
    height: 500px;
    background-image: url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&w=1000&q=80);
    background-size: 70%;
    border: 3px white solid;
    
}
    
.points{
    color: white;
    font-size: 5rem;
    font-family: monospace;
}

.uppgrades{
    color: white;
    font-size: 4rem;
    font-family: monospace;
}

.facter{
    margin-left: 105%;
    margin-top: -5%;
    font-size: 2em;
    color: white;
}
.facter2{
    margin-left: 105%;
    margin-top: -5%;
    font-size: 2em;
    color: white;
}
</style>
