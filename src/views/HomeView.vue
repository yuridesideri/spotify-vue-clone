<script setup lang="ts">
import TopicSection from '@/components/MainContent/TopicSection.vue';
import WelcomeSection from '@/components/MainContent/WelcomeSection.vue'
</script>

<template>
    <main class="flex flex-col p-5 gap-6 overflow-y-auto h-full">
        <WelcomeSection />
        <TopicSection />
        <TopicSection />

    </main>
</template>
