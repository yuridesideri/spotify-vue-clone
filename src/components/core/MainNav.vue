<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useRoute, type RouteRecordName } from 'vue-router'

const route = useRoute()

function checkActiveNav(routeName: RouteRecordName) {
  return route.name === routeName ? '' : ''
}
</script>

<template>
  <div class="flex h-full w-full flex-col justify-around">
    <RouterLink to="/" id="home-link" class="flex gap-5 p-2 font-bold hover:text-[#fff]">
      <HomeIcon />
      <h2 :class="[checkActiveNav('home')]" class="text-[#cecece]">Home</h2>
    </RouterLink>
    <RouterLink
      to="/search"
      id="search-link"
      class="flex gap-5 p-2 font-semibold hover:text-[#fff]"
    >
      <SearchIcon />
      <h2 :class="[checkActiveNav('search')]">Search</h2>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
