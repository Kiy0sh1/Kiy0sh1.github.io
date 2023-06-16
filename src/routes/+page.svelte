

    <div class="introthing" >
        
        <h1 class="titlething"><span class="axel">Halal Certified™ <img class="hal" src="https://specialfluids.totalenergies.com/en/system/files/styles/large/private/atoms/image/logo_halal.png?itok=_aj3ZaWs" alt="img"></span></h1> 
        <a class="git" href="https://github.com/Kiy0sh1/Kiy0sh1.github.io"><h2>My githob</h2></a>
    </div>
     
  
   


<body>
    <div class="albin">  
        <button class="julle" id="cock" onclick="location.href='/clicker';"> My cokei clicker game</button>
        <button class="julle" id="todo" onclick="location.href='/todo';"> My todo list</button>
        <button class="julle"  id="tel" onclick="location.href='/telltale';"> My telltale game</button>
        <button class="julle"  id="memo" onclick="location.href='/memory';">memory</button>
        <button class="julle"  id="bot" onclick="location.href='/chatbot';"> Chatbot</button>
        <button class="julle"  id="blog" onclick="location.href='/blog';"> blog ish</button>
        <button class="julle"  id="api" onclick="location.href='/search';"> api ish</button>
    </div>

    <div class="albin">
        <div class="info">
           <h3>You can come back to this main website thing by clicking the "home" button usually found at top left corner in every website!</h3> 
        </div>
    </div>

    <div>
        <div class="card" ></div> 
        <div class="card"></div>
    </div>    
</body>

<style>
:root{
    --blue: rgb(21, 138, 56);
    --bluer: rgb(107, 255, 156);
    --blus: rgb(35, 134, 93);
}

.introthing{
    padding: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin: 0;
    background-color: rgb(36, 36, 46);    
}

.info{
    background-color: white;
    padding: 5%;
    border: 3px solid rgb(46, 43, 43);
}

@keyframes background-pan{
    from{
        background-position: 0% center;
    }
    to{
        background-position: -200% center;
    }
}

body{
   background-color: rgb(20, 20, 22);
   margin: 0;
   
}

.hal{
    
     width: 60px;
     
}

h1 > .axel{    
    animation: background-pan 2s linear infinite;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    background: linear-gradient(
        to right, 
        var(--blue),var(--bluer),var(--blus), var(--blue)
    );
   background-size: 200%;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   white-space: nowrap;
   text-align: center;

}

h1{
    font-family: "rubix", sans-serif;
    
}

.albin{
    display: flex;
    border-radius: 50px;
    margin-left: 20px;
    justify-content: space-around;
    margin-right: 20px;
    margin-top: 20px;
    padding: 10px;
    background-color: rgb(35, 35, 43)
}

.julle{
    background-color: rgb(31, 31, 37);
    border-radius: 10%;
    border: 3px solid rgb(46, 43, 43);
    
    width: 10%;
    font-weight: bold;
    color: rgb(198, 210, 221);
    font-size: 20px;
    
    height: 400px;
    width: 300px;
    margin: 10px;
    font-family: monospace;
}

.julle:not(hover){
    transition: width 0.1s ease-in;    
    width: 300px;
}

#memo:hover{
    background-position-x: 40%;
    background-position-y: 20%;
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: rgb(255, 255, 255);
    background-image: url('/memo.png');
    background-size: 220%;
    background-repeat: no-repeat;
    position: relative;
    transition: width 0.1s ease-in;
    width: 310px;
}

#api:hover{
    background-position-x: 40%;
    background-position-y: 20%;
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: black;
    background-image: url('/api.png');
    background-size: 140%;
    background-repeat: no-repeat;
    position: relative;
    transition: width 0.1s ease-in;
    width: 310px;
}

#blog:hover{
    background-position-x: 0%;
    background-position-y: 20%;
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: black;
    background-image: url('/blog.png');
    background-size: 140%;
    background-repeat: no-repeat;
    position: relative;    
    transition: width 0.1s ease-in;
    width: 310px;
}

#cock:hover{
    background-position-x: 40%;
    background-position-y: 20%;
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: black;
    background-image: url('/coockie.png');
    background-size: 140%;
    background-repeat: no-repeat;
    position: relative;
    transition: width 0.1s ease-in;
    width: 310px;
}

#todo:hover{
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: black;
    background-position-x: 50%;
    background-position-y: 100% ;
    background-image: url('/todo.png');
    background-size: 200%;
    background-repeat: no-repeat;
    transition: width 0.1s ease-in;
    width: 310px;
}


#tel:hover{
    opacity: 0.5;
    border: 100px white;
    background-color: aliceblue;
    color: black;
    background-image: url('/sultan.png');
    background-size: 100%;
    background-repeat: no-repeat;
    transition: width 0.1s ease-in;
    width: 310px;
}

#bot:hover{
    color: rgb(24, 24, 13);
    background-image: url('/chatcbts.png');
    background-repeat: no-repeat;
    background-color: rgba(56, 52, 12, 0.623);
    background-position-x: 50%;
    background-size: 150%;
    background-position-y: 50%;
    transition: width 0.1s ease-in;
    width: 310px;
}

.titlething{
    display: block;
    margin: 10px;
    margin-left: 50px;
    
}

.git{
    display: block;    
    margin-left: 50px;
    margin-right: 88%;
    color: rgb(88, 197, 88);
}
</style>

