<script setup>
import { onMounted, onBeforeUnmount, ref, defineEmits } from 'vue';
import Apk from '@/assets/app-release.apk'
const prop = defineProps(['view'])
const emit = defineEmits(['view2'])
const view2 = ref(null)
const dw = () =>{
    let nc = document.createElement('a');
    nc.href = Apk
    nc.download = 'MiniNotes.apk'
    nc.target = '_blank'
    nc.click()
    console.log('se descargo')
}

const blockScroll = () =>{
    view2.value = prop.view
    if(view2.value === true){
        document.body.classList.add('scroll-lock')
    }
    else{
        document.body.classList.remove('scroll-lock')
    }
}
const showDinamic = () => {
    view2.value = false
    emit('view2', view2)

    const sect = window.document.getElementById('sect')
    sect.classList.remove('down')
    sect.classList.add('up')
}
onMounted(()=>{
    window.addEventListener('click', blockScroll)
})
onBeforeUnmount(()=>{
    window.removeEventListener('click', blockScroll)
})
</script>
<template>
    <section id="sect" :class="view2 ? 'down' : 'up'">
        <ul @click="showDinamic" class="kanit-medium">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/support">Support</router-link>
            <router-link class="download" to="/" @click="dw">Download</router-link>
        </ul>
    </section>
</template>
<style scoped>

section{
    position: absolute;
    z-index: 100;
    width: 100%;
    transition: all 1s ease;
    background-color: var(--color-background);
}
ul{
    height: 60vh;
    padding: 0;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2rem 0;
}
ul a{
    color: var(--color-text);
    font-size: 1.7rem;
    font-weight: bold;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 15vh;
}
ul a:hover{
    background-color: var(--color-bc-text);
    color:var(--color-heading);
}
.up{
    transform: translateY(-100vh);
    height: 0;
    overflow: hidden;
}
.down{
    transform:  translateY(0);
    height: 100vh;
    opacity: 1;
}
</style>, onUnmounted, onUnmounted