<script setup lang="ts">
withDefaults(
    defineProps<{
        icon: string
        title: string
        type: string
        id?: string
        creator?: string
    }>(),
    {
        icon: '',
        title: '',
        type: ''
    }
)
</script>

<template>
    <div class="flex h-16 w-full rounded-lg bg-spcell p-1 hover:bg-lighthightlight">
        <img srcset="https://misc.scdn.co/liked-songs/liked-songs-64.png 32w,
        https://misc.scdn.co/liked-songs/liked-songs-64.png 64w,
        https://misc.scdn.co/liked-songs/liked-songs-300.png 150w,
        https://misc.scdn.co/liked-songs/liked-songs-300.png 300w,
        https://misc.scdn.co/liked-songs/liked-songs-640.png 320w,
        https://misc.scdn.co/liked-songs/liked-songs-640.png 640w" alt="Playlist icon"
        class="aspect-square rounded-lg">
        <div class="flex flex-col p-1">
            <h1 class="font-semibold text-spwhite hover:brightness-100">{{ title }}</h1>
            <div class="flex text-sptext">
                <p>{{ type }}</p>
                <p>{{ creator ? ' • ' + creator : '' }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
