<script setup>
import { RouterLink} from 'vue-router'
import Img from '@/assets/image/vittonesa.jpeg'

function dw(){
    let nc = document.createElement('a');
    nc.href = Img
    nc.download = 'vittonessa.jpeg'
    nc.target = '_blank'
    nc.click()
    console.log('se descargo')
}
</script>
<template>
    <nav>
        <h1 class="kanit-medium">Mini Notes<span>.Beta</span></h1>
        <ul class="kanit-medium">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/support">Support</router-link>
            <router-link class="download" to="/" @click="dw">Download</router-link>
        </ul>
    </nav>
</template>
<style scoped>
.kanit-medium {
    font-family: "kanit", sans-serif;
    font-weight: 500;
    font-style: normal;
}
nav{
    height: 10vh;
    background: var(--color-background);
    color: var(--color-heading);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    box-shadow:0 0 5px var(--color-border);
    align-items: center;
    padding: 0 3.5rem;
}
h1{
    margin: 0;
    font-size: 2.5rem;
}
span{
    font-size: .9rem;
}
ul{
    width: 50%;
    display: flex;
    height: 100%;
    text-align: center;
    justify-content: space-between;
}
ul a{
    font-size: 1.3rem;
    height: 100%;
    width: 100%;
    line-height: 9vh;
    color: var(--color-text);
    transition: all ease .4s;
}
ul a:hover{
    background-color: var(--color-bc-text);
}
.download{
    font-family: sans-serif;
    font-size: 1.2rem;
    background-color: var(--color-bc-text);
    margin: .5rem .8rem;
    border-radius: .8rem;
    height: 80%;
    padding: 0 2rem;
    line-height: 8vh;
    font-weight: bold;
    color: var(--color-heading);
    width: min-content;
    transition: all ease .4s;
    cursor: pointer;
}
.download:hover{
    background-color: var(--color-heading);
    color: var(--color-bc-text);
}
</style>