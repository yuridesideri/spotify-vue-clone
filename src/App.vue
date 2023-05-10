<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="sticky left-0 top-0 h-screen w-48">
    <RouterLink to="/">
      <img src="@/components/icons/Spotify_Logo_RGB_White.png" class="w-32" />
    </RouterLink>

    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main></main>
  <RouterView />
</template>

<style scoped></style>
