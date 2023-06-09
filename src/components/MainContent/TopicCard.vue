<script setup lang="ts">
withDefaults(
    defineProps<{
        topicCard: {
            id?: number
            title: string
            description: string
            image: string
        }
    }>(),
    {}
)
</script>

<template>
    <div
        class="flex aspect-[2/3] w-full min-w-[150px] max-w-[220px] flex-grow flex-col rounded-md bg-[#191919] p-4 hover:cursor-pointer hover:bg-[#282828]"
    >
        <div>
            <div class="relative aspect-square h-max overflow-hidden rounded-md">
                <img :src="topicCard.image" alt="" class="absolute" />
            </div>
        </div>
        <div class="flex flex-col justify-center gap-1 my-4">
            <h1 class="font-bold text-white">{{ topicCard.title }}</h1>
            <p class="h-9 overflow-hidden text-ellipsis text-xs line-clamp-2">
                {{ topicCard.description }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
