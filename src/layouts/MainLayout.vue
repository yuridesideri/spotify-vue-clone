<script setup lang="ts">
import LibraryNav from '@/components/core/LibraryNav.vue'
import MainContent from '@/components/core/MainContent.vue'
import MainNav from '@/components/core/MainNav.vue'
</script>

<template>
  <div id="grid" class="flex h-full w-full flex-col">
    <div id="main-layout" class="flex h-full flex-grow">
      <div id="navigation" class="flex h-full w-80 flex-col p-2">
        <nav id="main-navigation" class="h-20 bg-spcell 2-full mb-2 rounded-lg">
          <MainNav />
        </nav>
        <nav id="library-navigation" class="w-full flex-grow bg-spcell rounded-lg">
          <LibraryNav />
        </nav>
      </div>
      <main id="content" class="bg-red">
        <MainContent />
      </main>
    </div>
    <footer class="h-20 w-full bg-spcell"></footer>
  </div>
</template>

<style scoped></style>
