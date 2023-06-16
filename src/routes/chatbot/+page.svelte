<script>
    import { enhance } from "$app/forms";
    import "elizabot";
    import ElizaBot from "elizabot";
    import { each, object_without_properties, onMount } from "svelte/internal";
  
    let eliza = new ElizaBot();
    let chat = [];
    onMount(() => {
      chat =
      localStorage.getItem("chat") !== null
        ? JSON.parse(localStorage.getItem("chat") || [])
        : [{ user: "eliza", text: eliza.getInitial() }];
  
      console.log(chat)
    });
  
    const resette = () => {
      localStorage.clear()
      chat = [{ user: "eliza", text: eliza.getInitial() }]
    }
  
    async function write(message) {
      const quitPhrases = ["bye", "goodbye"]
      if (quitPhrases.indexOf(message.toLowerCase()) > -1) {
  
        console.log('save chat', chat)
  
        localStorage.setItem("chat", JSON.stringify(chat));
      }
  
      // TODO: yeet in the new message
      chat.push({ user: "user", text: message });
  
      // random delay for writing
      await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
      // TODO: write the text
  
      chat.push({ user: "eliza", text: eliza.transform(message) });
  
      console.log(chat)
      chat = chat;
    }
  </script>
  <button onclick="location.href='/';">go to home</button>
  <svelte:head>
    
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
  <body>
    <div class="container">
      <h1>ChatCBT</h1>
      <hr />
      <div class="scrollable">
        <!-- TODO: loop over the messages and display them -->
        {#each chat as message}
          <article class="{message.user === "user" ? 'user' : 'eliza'}">
            <span class="whois">{message.user}: </span>
            <span>
              {message.text}
            </span>
          </article>
        {/each}
      </div>
      <hr />
      <form
        method="post"
        use:enhance={({ form, data, action, cancel }) => {
          /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
          cancel(); //don't post anything to server
          const text = data.get("text");
          write(text);
  
          // TODO: reset the form using form.reset()
          form.reset();
        }}
      >
        <input type="text" name="text" class="inputf" placeholder="message to send eliza"/>
      </form>
    </div>
    <button on:click={resette}> kill it</button>
  </body>
  
  <style>
    body {
      text-align: center;
    }
    :root {
      color-scheme: light;
    }
    .scrollable{
      width: 25%;
      margin: auto;
    }
    .user{
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding: 5px;
      background-color: rgb(239, 238, 238);
    }
  
    .eliza{
      padding: 5px;
    }
    .whois{
      font-weight: 800;
      float: left;
    }
    button{
      margin-top: 10px;
      background: none;
      border: 2px solid black;
      padding: 5px 10px 5px 10px;
      border-radius: 30px;
      font-size: large;
    }
  
    .inputf{
      border: 2px solid black;
      padding: 8px;
      border-radius: 20px;
      width: 16%;
      margin-top: 35px;
    }
  </style>