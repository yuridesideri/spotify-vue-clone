<script setup lang="ts">
import type LibraryNav from '@/components/core/LibraryNav.vue'
import MainContent from '@/components/core/MainContent.vue'
import MainNav from '@/components/core/MainNav.vue'
</script>

<template>
  <div id="main-layout">
    <div id="navigation">
      <nav id="main-navigation" class="bg-">
        <MainNav />
      </nav>
      <nav id="library-navigation" class="bg-red">
        <LibraryNav />
      </nav>
    </div>
    <main id="content" class="bg-red">
      <MainContent />
    </main>
  </div>
  <footer></footer>
</template>

<style scoped></style>
