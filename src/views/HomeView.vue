<script setup>
import { onBeforeMount,onMounted, ref } from 'vue';
import MyAside from '@/components/MyAside.vue';
const mobile = ref(null)

function donwloadApk(){
    let nc = document.createElement('a');
    nc.href = '@/assets/app-release.apk'
    nc.download = 'MiniNotes.apk'
    nc.target = '_blank'
    nc.click()
    console.log('se descargo')
}
function sizing(){
  const width =ref(window.innerWidth)
  if(width.value <= 800){
    mobile.value = true
  }
  else{
    mobile.value = false
  }
}
onBeforeMount(()=>{
  sizing()
})
onMounted(()=>{
  window.addEventListener('resize', sizing)
})
</script>

<template>
  <main>
    <img id="img" src="../assets/image/mockup_mininote.png" alt="">
    <article id="article">
      <h1 class="kanit-medium">Mini Notes<span>.Beta</span></h1>
      <p>
        The minimalist notes app offers a simple and elegant note-taking experience, with a distraction-free interface.
      </p>
      <p>
        It is perfectly suited for those looking for a hassle-free tool to manage their thoughts effectively.
      </p>
      <p>
        It allows users to quickly capture ideas and organize them intuitively with tags and categories.
      </p>
      <button class="kanit-medium" @click="donwloadApk">Download</button>
    </article>
  </main>
  <MyAside v-if="mobile"/>
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
span{
    font-size: .9rem;
}
#img{
  height: 80vh;
  width: 50vw;
}
article{
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

@media screen and (max-width: 700px) { 
  main{
    background-image: url(../assets/image/mockup_mininote.png);
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: max-content;
  }
  img{
    display: none;
  }
  h1{
    display: none
  }
  article{
    height: 80vh;
    justify-content: end;
  }
  article p{
    color: var(--color-heading);
  }
  p{
    display: none;
  }
  button{
    width: min-content;
    padding: 0 1rem;
  }
}
</style>
