<script setup>
/* import appReleaseApk from '!!file-loader!../assets/app-release.apk'; */
import { ref } from 'vue';
import { RouterLink} from 'vue-router'
import Apk from '@/assets/app-release.apk'
import MyNav from './MyNav.vue';

const view = ref(false)

function dw(){
    let nc = document.createElement('a');
    nc.href = Apk
    nc.download = 'MiniNotes.apk'
    nc.target = '_blank'
    nc.click()
    console.log('se descargo')
}
function showNav(){
    if(view.value === true){
        view.value = false
    }
    else{
        view.value = true
    }
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
        <svg @click="showNav" fill="#fff" width="40px" height="40px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fill-rule="evenodd"></path> </g></svg>
    </nav>
        <MyNav  :view="view"/>
</template>
<style scoped>
.kanit-medium {
    font-family: "kanit", sans-serif;
    font-weight: 500;
    font-style: normal;
}
svg{
    display: none;
}
nav{
    position: relative;
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
    z-index: 300;
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


@media screen and (max-width: 700px) {
    nav{
        padding: 1rem 0;
        justify-content: end;
    }
    h1{
        margin-right: 3.5rem;
    }
    ul{
        display: none;
    }
    svg{
        display: block;
        margin-right: 1.3rem;
    }
}
</style>