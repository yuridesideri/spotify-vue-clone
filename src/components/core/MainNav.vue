<script setup lang="ts">
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
</script>

<template>
  <div class="flex flex-col justify-around h-full w-full">
    <div id="home-icon" class="flex">
        <HomeIcon class="fill-white"/>
        <h2>Home</h2>
    </div>
    <div id="search-icon" class="flex">
        <SearchIcon class="fill-white"/>
        <h2>Search</h2>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
