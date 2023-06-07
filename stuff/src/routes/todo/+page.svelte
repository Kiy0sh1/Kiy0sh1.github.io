<script>
let randomlistaxd = []
let newtask =""
let darkmode = false;


</script>
<h1>Todo äpp</h1>
<div>
    <h2>settingings⚙</h2>
    
     <button on:click={() =>{darkmode = !darkmode}}>Darkmode {darkmode}</button>

   
</div>




<div  class="bajs">
    <h2>what do do:</h2>
    <input bind:value={newtask}> <button class="add" on:click={() => {randomlistaxd = [{don: false, task: newtask}, ...randomlistaxd]}}>add task 📝</button>

    <ul>
        {#each randomlistaxd as task , i}
        {#if !task.don}
        <li class="sak"> 
    
            {task.task + " 📃"} <button class="frfr" on:click={() =>{task.don=true; }} >Done!</button> <button class="tabot" on:click={() =>{
                randomlistaxd.splice(i, 1);
                randomlistaxd = randomlistaxd;
            }}>❌</button>
            
            
            
        
        </li> 
        {/if}
            
        {/each}
       
        <h1>
            Dones ✔:
        </h1>
        {#each randomlistaxd as task , i}
        {#if task.don}
       
        <li class="donee"> 
    
            {task.task + " ✅"} <button class="tabot" on:click={() =>{
                randomlistaxd.splice(i, 1);
                randomlistaxd = randomlistaxd;
            }}>❌</button>
            
            
            
        
        </li> 
        {/if}
            
        {/each}
    </ul>
    
</div>









<style>
    
    :global(body){
        
        background-color: rgb(95, 95, 160);
        
    }


.add{
    border-radius: 20px;
    padding: 10px;
    
}


.add:hover{
    transition: background-color 0.5s ease-in-out; 
    background-color: yellow;
   
}


.add:not(hover){
    transition: background-color 0.5s ease-in-out;
    background-color: white;
    
}
.donee{
    margin:auto;
  width: 50%;
  text-align: left;
  
  padding: 10px;
  background-color:rgba(82, 81, 81, 0.445);
  color: rgb(0, 255, 0);
}
.bajs{
    margin: auto;
  width: 50%;
  border: 1px solid white;
  border-radius: 30px;
 
  text-align: center;
  padding: 10px;
  background-color:rgba(112, 111, 111, 0.247);
}
.sak{
    display: block;
    background-color:rgba(192, 192, 192, 0.685);
    
}
.tabot{
    
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    border: 1px solid black;
    padding-left: 4px;
    padding-right: 4px;
    padding: 5px;
    
    
    
}
.tabot:hover{
    transition: padding 0.2s ease-in-out;
    padding: 8px;
    transition: background-color 0.1s ease-in-out;
    background-color: rgb(255, 0, 0);

}

.frfr{
    color: rgb(27, 216, 27);
}

.frfr:hover{
    transition: background-color 0.1s ease-in-out;
    background-color: rgb(27, 216, 27);
    transition: color 0.2s ease-in-out;
    color: rgb(0, 0, 0);
    
}
</style>

