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
    <div class="flex h-16 w-full items-center rounded-lg bg-spcell p-2 hover:bg-lighthightlight hover:cursor-pointer">
        <div class="w-12">
            <img
                :src="icon"
                alt="Playlist icon"
                class="aspect-square rounded-md"
            />
        </div>
        <div class="ml-2 flex flex-col p-1">
            <h1 class="font-semibold text-spwhite hover:brightness-100 ">{{ title }}</h1>
            <div class="flex text-sptext text-xs font-semibold">
                <p>{{ type + (creator ? ' • ' + creator : '') }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
