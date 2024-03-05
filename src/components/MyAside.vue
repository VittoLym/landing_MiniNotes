<script setup>

</script>
<template>
    <article>
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
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;
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
}
span{
    font-size: .9rem;
}

</style>