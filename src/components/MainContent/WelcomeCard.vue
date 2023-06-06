<script setup lang="ts">
withDefaults(
    defineProps<{
        id?: string
        title: string
        image: string
    }>(),
    {
        title: 'Default Title',
        image: 'Default Icon'
    }
)
</script>

<template>
    <button
        class="flex h-full w-auto flex-grow items-center gap-4 rounded-md bg-[#302F35] hover:bg-[#454447] hover:brightness-100"
    >
        <div
            class="aspect-square h-full overflow-hidden rounded-l-md bg-cover"
            :style="`background-image: url(${image})`"
        />
        <h1 class="text-white">{{ title }}</h1>
    </button>
</template>

<style scoped lang="scss"></style>
