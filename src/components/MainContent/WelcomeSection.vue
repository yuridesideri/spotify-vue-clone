<script setup lang="ts">
import WelcomeCard from '@/components/MainContent/WelcomeCard.vue'
</script>

<template>
    <div class="flex flex-col gap-4 p-4 pt-0">
        <h1 class="text-3xl font-bold text-white">Good Evening</h1>
        <div
            class="grid h-56 xl:h-48 grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(3,_1fr)] gap-x-5 gap-y-3 xl:grid-cols-[repeat(3,_1fr)] xl:grid-rows-[repeat(2,_1fr)]"
        >
            <WelcomeCard
                title="Liked Songs"
                image="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
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
                image="https://i.scdn.co/image/ab6765630000ba8aa7b5d2464365bf9cfa5ce5ee"
            />
            <WelcomeCard
                title="Filosofia Vermelha"
                image="https://i.scdn.co/image/ab6765630000ba8aefdee5be115e3481ee01525a"
            />
            <WelcomeCard
                title="Morning Call - BTG Pactual"
                image="https://i.scdn.co/image/ab6765630000ba8a86ff8b5a7fbc876ce2146f20"
            />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
