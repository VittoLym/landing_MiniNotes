<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import MyAboutResponsive from '@/components/MyAboutResponsive.vue'
const res = ref(null)
function sizing(){
    const width =ref(window.innerWidth)
    if(width.value <= 800){
        res.value = true
    }
    else{
        res.value = false
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
      <img id="img" src="../assets/image/mockup2.png" alt="">
      <article id="article">
        <h1 class="kanit-medium">About Us</h1>
        <p>
            Mini Notes was born from the idea of offering a minimalist notes app that is easy to use, yet powerful in its functionality.        
        </p>
        <p>
            Staff Lym is a passionate team of designers and developers committed to creating simple and effective tools to improve your productivity.
        </p>
        <p>
            We strive to provide you with intuitive solutions that integrate seamlessly into your everyday life.        
        </p>
    </article>
    </main>
    <MyAboutResponsive if="res"/>
</template>
<style scoped>
main{
  display: flex;
  flex-direction: row-reverse;
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
  margin: .2rem 0;
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
    background-image: url(../assets/image/mockup2res.png);
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: 60vh;
    margin: 2rem 0;
  }
  img{
    display: none;
  }
  h1{
    display: none
  }
  article{
    height: 75vh;
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
</style>import MyAboutResponsiveVue from '@/components/MyAboutResponsive.vue';
