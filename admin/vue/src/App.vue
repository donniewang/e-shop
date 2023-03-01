<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { authStore } from './stores';
const auth = authStore();
</script>

<template>
  <header>
    <div>
      <nav v-show="auth.user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a @click="auth.logout()">Logout</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  width: inherit;
  height: inherit;
  display: flex;
  position: relative;
}

header {
  position: absolute;
  width: inherit;
  display: flex;
}

main {
  width: inherit;
  height: inherit;
  display: flex;
}

</style>
