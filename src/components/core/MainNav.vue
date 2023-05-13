<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useRoute, type RouteRecordName } from 'vue-router'

const route = useRoute()

function checkActiveNav(routeName: RouteRecordName) {
  return route.name === routeName ? 'font-bold' : 'font-normal'
}
</script>

<template>
  <div class="flex h-full w-full flex-col justify-around">
    <RouterLink to="/" id="home-link" class="flex">
      <HomeIcon />
      <h2 :class="[checkActiveNav('home')]">Home</h2>
    </RouterLink>
    <RouterLink to="/search" id="search-link" class="flex">
      <SearchIcon />
      <h2 :class="[checkActiveNav('search')]">Search</h2>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
