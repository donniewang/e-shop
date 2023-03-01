<script setup lang="ts">
import { authStore } from '@/stores';
import { RouterLink, RouterView } from 'vue-router'
const auth = authStore();

console.log(auth.user);
</script>

<template>
  <main>
    <div class="home">
      <h1>This is an home page</h1>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: start;
    padding-top: 20px;
  }
}
</style>