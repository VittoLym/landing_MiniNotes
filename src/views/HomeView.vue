<script setup>
</script>

<template>
  <main>
    <img id="img" src="../assets/image/mockup_mininote.png" alt="">
    <article >
      <h1 class="kanit-medium">Mini Notes</h1>
      <p>
        The minimalist notes app offers a simple and elegant note-taking experience, with a distraction-free interface.
      </p>
      <p>
        It is perfectly suited for those looking for a hassle-free tool to manage their thoughts effectively.
      </p>
      <p>
        It allows users to quickly capture ideas and organize them intuitively with tags and categories.
      </p>
      <button class="kanit-medium">Download</button>
    </article>
  </main>
</template>
<style scoped>
main{
  display: flex;
  height: 90vh;
}
.kanit-medium {
    font-family: "kanit", sans-serif;
    font-weight: 500;
    font-style: normal;
}
#img{
  height: 80vh;
  width: 50vw;
}
article{
  background-color: var(--bg-t);
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-wrap: pretty;
}
h1{
  margin: 0;
  font-size: 3rem;
  color: var(--color-heading);
  width: 80%;
  text-align: start;
  margin-bottom: 2rem;
  margin-left: .1rem;
}
article p{
  width: 80%;
  font-size: 1.2rem;
}
button{
  margin-top: 2rem;
  height: 10vh;
  width: 15vw;
  font-size: 1.7rem;
  border-radius: .8rem;
  border: none;
  color: var(--color-heading);
  background-color: var(--color-bc-text);
  transition: all ease .3s;
  cursor: pointer;
  box-shadow: 4px 4px 2px var(--color-heading);
}
button:hover{
  box-shadow: 4px 4px 2px #0c0c0c50;
  background-color: var(--color-heading);
  color: var(--color-bc-text);
  scale: 1.1;
}
button:active{
  scale: 1;
}
</style>
