<script setup lang="ts">
import LibraryIcon from '@/assets/icons/LibraryIcon.vue'
import PlusIconVue from '@/assets/icons/PlusIcon.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-full w-full p-3 pl-5 pr-5">
    <header to="" class="flex items-center justify-between fill-sptext">
      <RouterLink
        to=""
        class="flex items-center gap-3 fill-sptext transition-all duration-200 ease-in-out hover:brightness-150"
      >
        <LibraryIcon class="w-5" />
        <h1>Your Library</h1>
      </RouterLink>
      <button
        class="flex aspect-square h-6 items-center justify-center rounded-full hover:bg-[var(--color-background-highlight)] hover:brightness-125"
      >
        <PlusIconVue class="h-4 justify-self-end fill-sptext" />
      </button>
    </header>
    <div class="filter">
      <!--Filters / Arrow-->
    </div>
    <div class="search">
      <!--Search & Group-->
    </div>
    <div class="library">
      <!--Shows/Playlists-->
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
