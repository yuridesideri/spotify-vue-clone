<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { reactive, ref } from 'vue'
import TopicCard from './TopicCard.vue'

const topicCards = reactive([
    {
        title: 'Daily Mix 1',
        description: 'Mc Livinho, Felipe Amorim, MC Kevinho and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb212ae1faf409e4c92989e243/1/en/default'
    },
    {
        title: 'Daily Mix 2',
        description: 'Alec Benhjamin, Metro Boomin, Rachel Grae and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb72c4ca30476ce87954961a10/2/en/default'
    },
    {
        title: 'Daily Mix 3',
        description: 'Yo-Yo Ma, Daniel Barenboim, Martin Jones and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebfb0fcd51414e7bbe85e00b6f/3/en/default'
    },
    {
        title: 'Daily Mix 4',
        description: 'Rammor, vowl., Jonas Blue and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5f9686af021409bc22b2010b/4/en/default'
    },
    {
        title: 'Daily Mix 5',
        description: 'Costa Gold, UCLÃ, Pineapple StormTv and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb25686998dc0297f17084b9b0/5/en/default'
    },
    {
        title: 'Daily Mix 6',
        description: 'The Chainsmokers, Billie Eilish, Halsey and more',
        image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/6/en/default'
    }
])

const topicSectionElement = ref<HTMLDivElement>()

const topicSectionColumns = ref<number>()

useResizeObserver(topicSectionElement, () => {
    const topicSectionElementWidth = topicSectionElement.value?.offsetWidth
    if (topicSectionElementWidth) {
        const topicCardWidth = 150 // px
        const topicCardGap = 24 // px
        const topicCardCount = Math.floor(
            topicSectionElementWidth / (topicCardWidth + topicCardGap)
        )

        topicSectionColumns.value = topicCardCount
    }
})
</script>

<template>
    <section class="flex max-h-[380px] min-h-max flex-col">
        <div class="mb-4 flex justify-between">
            <h1 class="text-2xl text-white">Made for You</h1>
            <p class="font-bold hover:cursor-pointer hover:underline">Show all</p>
        </div>
        <div
            class="h-max w-full grid-flow-col grid-rows-1 gap-6 overflow-hidden"
            ref="topicSectionElement"
            :class="`${(topicSectionColumns! > topicCards.length) || (topicSectionColumns! <= 2) ? 'flex' : 'grid'} grid-cols-${topicSectionColumns}`"
        >
            <template v-for="(topicCard, index) in topicCards">
                <TopicCard
                    v-if="index < topicSectionColumns! || index < 2"
                    :topicCard="topicCard"
                />
            </template>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
