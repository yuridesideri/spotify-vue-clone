<script setup lang="ts">
import LibraryNav from '@/components/core/LibraryNav.vue'
import MainContent from '@/components/core/MainContent.vue'
import MainNav from '@/components/core/MainNav.vue'
</script>

<template>
  <div id="grid" class="flex h-full w-full flex-col">
    <div id="main-layout" class="flex h-full flex-grow gap-2 p-2">
      <div id="navigation" class="flex h-full w-80 flex-col gap-2">
        <nav id="main-navigation" class="h-[100px] rounded-lg bg-spcell">
          <MainNav />
        </nav>
        <nav id="library-navigation" class="w-full flex-grow rounded-lg bg-spcell">
          <LibraryNav />
        </nav>
      </div>
      <main id="content" class="flex-grow rounded-lg bg-spcell">
        <MainContent />
      </main>
    </div>
    <footer class="h-20 w-full"></footer>
  </div>
</template>

<style scoped></style>
