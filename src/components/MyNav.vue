<script setup>
    const prop = defineProps(['view'])
    console.log(prop.view)
</script>
<template>
    <section :class="prop.view ? 'down' : 'up'">
        <ul class="kanit-medium">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/support">Support</router-link>
            <router-link class="download" to="/" @click="dw">Download</router-link>
        </ul>
    </section>
</template>
<style scoped>
section{
    position: relative;
    z-index: 100;
    width: 100%;
    transition: all 1s ease;
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
</style>