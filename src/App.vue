<script setup>
import {  RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';

</script>

<template>
  <MyHeader />
  <RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


</style>
