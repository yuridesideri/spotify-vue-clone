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
        class="flex items-center gap-4 rounded-md bg-[#302F35] hover:bg-[#454447] hover:brightness-100"
    >
        <div class="relative flex aspect-square h-full">
            <img :src="image" alt="" class="absolute aspect-square h-full w-full rounded-l-md" />
        </div>
        <div>
            <h1 class="text-white">{{ title }}</h1>
        </div>
    </button>
</template>

<style scoped lang="scss"></style>
