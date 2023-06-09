<script setup lang="ts">
import MainHeader from '@/components/MainContent/MainHeader.vue'
</script>

<template>
    <section class="flex flex-col h-full">
        <MainHeader />
        <RouterView />
    </section>
</template>
