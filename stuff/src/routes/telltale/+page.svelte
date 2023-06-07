<script>
  import { story_id_store } from "$lib/stores";
  import { stories } from "$lib/stories";

  /* https://svelte.dev/tutorial/in-and-out */
  import { fly } from "svelte/transition";

  /* https://svelte.dev/tutorial/reactive-statements */
  $: story_id = $story_id_store;
  $: story = stories.find((story) => story.id == story_id);


</script>

<div class="book"> 
  <main>
  
  <div class="grid">
    <!-- https://svelte.dev/tutorial/key-blocks -->
    {#key story_id}
      <!-- https://svelte.dev/tutorial/in-and-out -->
      <div
        class="container"
        in:fly|local={{ x: 800, duration: 750 }}
        out:fly|local={{ x: -800, duration: 750 }}
      >
        <!-- https://svelte.dev/tutorial/if-blocks -->
        {#if story}
        
          {#if story.html}
            <!-- https://svelte.dev/tutorial/html-tags -->
            {@html story.html}
          {/if}
          <h1>{story.message}</h1>     <!-- här är saken som visar texten -->
          <div class="row">
            <!-- https://svelte.dev/tutorial/each-blocks -->
            {#each story.choices as choice}
           
              <button class="knapp" on:click={() => {$story_id_store = choice.id;}}>{choice.text}</button>
            {/each}
          </div>
          <!-- https://svelte.dev/tutorial/else-blocks -->
        {:else}
          <p>choice{story_id} fins inte jao kolla scriptet else if inte owner stick här ifrån</p>
        {/if}
      </div>
    {/key}
  </div>
</main>
</div>




<style>
  .grid {
    margin: 10%;
    display: grid;
    align-items: center;
    place-items: center;
    justify-content: center;
  }

  /* force the container to stay in the same position of the grid */
  /* we need this to ensure that the container div does not move weirdly
     when two divs coexist which they do while the out and in transition
     is playing simultaneously. Try removing the grid-column placement stuff
     and you might notice some weird behaviour.
  */
  .container {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  
    filter: blur(0px);
  }

  .knapp{
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 15px;
    background-color: aliceblue;
    filter: blur(0px);
  }


  .row {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    border: 4px black solid;
   
    filter: blur(0px);
  }
  .book{
    
    background-position: 50%;
    padding-bottom: 100px;
    
    margin-top: 50px;
    padding: 200px;
    background-repeat: no-repeat;
    background-size: 60%;
    
    filter: blur(0px);
    
    
    
    
    
  }
 



 



</style>
