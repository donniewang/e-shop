<script setup lang="ts">
import { authStore } from '@/stores';
import { RouterLink, RouterView } from 'vue-router'
const auth = authStore();

console.log(auth.user);
</script>

<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: fit-content;
    display: flex;
    align-items: start;
    padding-top: 20px;
  }
}
</style>
