<script setup lang="ts">
import WelcomeCard from '@/components/MainContent/WelcomeCard.vue'
</script>

<template>
    <div class="flex flex-col gap-4 p-4 pt-0">
        <h1 class="text-3xl font-bold text-white">Good Evening</h1>
        <div class="grid h-48 grid-cols-2 gap-x-5 gap-y-2 xl:grid-cols-3">
            <WelcomeCard
                title="Liked Songs"
                image="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            />
            <WelcomeCard
                title="Your Episodes"
                image="https://misc.scdn.co/your-episodes/SE-64.png"
            />
            <WelcomeCard
                title="Coding Mode"
                image="https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696"
            />
            <WelcomeCard
                title="Primocast"
                image="https://i.scdn.co/image/ab6765630000955fa7b5d2464365bf9cfa5ce5ee"
            />
            <WelcomeCard
                title="Filosofia Vermelha"
                image="https://i.scdn.co/image/ab6765630000955fefdee5be115e3481ee01525a"
            />
            <WelcomeCard
                title="Morning Call - BTG Pactual"
                image="https://i.scdn.co/image/ab6765630000ba8a86ff8b5a7fbc876ce2146f20"
            />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
