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
        class="flex aspect-[2/3] h-full min-w-[150px] max-w-[220px] flex-col rounded-md bg-[#191919] p-4"
    >
        <div class="flex-grow">
            <div class="relative aspect-square h-max">
                <img :src="topicCard.image" alt="" class="absolute" />
            </div>
        </div>
        <div class="flex h-full flex-col justify-center gap-1">
            <h1 class="font-bold">{{ topicCard.title }}</h1>
            <p class="h-9 overflow-hidden text-ellipsis text-xs line-clamp-2">
                {{ topicCard.description }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
