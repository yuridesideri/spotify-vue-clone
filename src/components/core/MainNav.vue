<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import { useRoute, type RouteRecordName } from 'vue-router'

const route = useRoute()

function checkActiveNav(routeName: RouteRecordName) {
  return route.name === routeName ? 'text-white fill-white' : ''
}
</script>

<template>
  <div class="flex h-full w-full flex-col justify-center gap-5 pl-5 pr-5">
    <RouterLink
      to="/"
      id="home-link"
      class="flex items-center gap-5 fill-sptext font-semibold text-sptext transition duration-400 ease-in-out hover:fill-white hover:text-white"
      :class="[checkActiveNav('home')]"
    >
      <HomeIcon class="aspect-square w-[21px]" />
      <h2 class="text-sm font-bold text-inherit">Home</h2>
    </RouterLink>
    <RouterLink
      to="/search"
      id="search-link"
      class="flex items-center gap-5 fill-sptext font-semibold text-sptext transition duration-400 ease-in-out hover:fill-white hover:text-white"
      :class="[checkActiveNav('search')]"
    >
      <SearchIcon class="aspect-square w-[21px]" />
      <h2 class="text-sm font-bold text-inherit">Search</h2>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
