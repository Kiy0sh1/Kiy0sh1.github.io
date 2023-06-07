<script>
  
let coolimgages = ["/necosad.png", "/coockie.PNG","/lal.png", "/todo.PNG", "/orb.gif", "/sultan.PNG"]
let startcardlength = coolimgages.length;
let flipperdippernippler = 0;
let flipperdippernippler2 = 0;


for (let index=0; index < startcardlength; index++) {
    
    coolimgages.push(coolimgages[index]);
  }

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

   while (currentIndex != 0) {

     randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

     [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

   return array;
}

shuffle(coolimgages);

  
  let cards = [];
  for (let index = 0; index < coolimgages.length; index++) {
  
    cards.push({
      id: index, // TODO: unique ids per card card
      img: coolimgages[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false, 
      
    });
   
  }
  
  
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
  
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped = true;
      flipcount++;

      if(flipcount == 1){
        flipperdippernippler = card
      }
      if(flipcount == 2){
        flipperdippernippler2 = card
      }
      if(flipperdippernippler.img==flipperdippernippler2.img){
              card.completed = true;
              flipperdippernippler.completed = true;
            }
      
      
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
          
            card.flipped = card.completed;
            if(card.completed){
              card.flipped = true;
            }
           
          });
          flipcount = 0;
          cards = cards;
        }, 2000);
      }
      cards = cards;
    } 
  }
  function redo(){
    shuffle(coolimgages);
    cards.forEach(card => {
      card.completed = false
      card.flipped = false
      cards = cards;
    });
    flipcount =0;
  }
</script>

<body> 
  
  <main>

  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="/nomai.webp" alt="" />
      </div>
    {/each}
  </div>
  <button class="restard" on:click={()=> {redo()} }></button>  
</main>
</body>

<style>
  .restard{
    size: 100px;
    padding: 100px;
    margin: 20%;
    margin-top: 50%;
    margin-right: 100%;
    position: absolute;
    background-size: 100%;
    background-color: black;
    border-radius: 50%;
    background-image: url(https://preview.redd.it/meecyqvd1ik91.png?width=640&crop=smart&auto=webp&s=d1783def100c8ae4a1b4516aee6cadda72941297);
  }
  .restard:hover(){
    transition: background-color 0.5s ease-in-out; 
    background-color: rgb(238, 165, 7);
  }
  main {
    padding-top: 10%;
    display: flex;
    place-content: center;
    place-items: center;
    
  }
  body{
    background-image: url(https://necessarydisorder.files.wordpress.com/2018/01/agif161.gif);
    background-size: 2%;
    margin:0;
  }

  .row {
    align-items: center;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(3, 150px);
    
  }

  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
</style>
