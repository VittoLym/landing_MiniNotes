<script setup>
</script>
<template>
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
</template>
<style scoped>

.kanit-medium {
    font-family: "kanit", sans-serif;
    font-weight: 500;
    font-style: normal;
}

article{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 70vh;
    margin-bottom: 15vh;
}
h1{
    width: 80%;
    color: var(--color-heading);
    font-size: 2.2rem;
}
p{
    width: 80%;
    font-size: 1rem;
    font-weight: bold;
    word-spacing: 2px;
    margin-bottom: 1rem;
}
span{
    font-size: .9rem;
}

</style>