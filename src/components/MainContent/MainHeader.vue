<script setup lang="ts">
import DownloadIcon from '@/assets/icons/DownloadIcon.vue'
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon.vue'
import ProfileIconVue from '@/assets/icons/ProfileIcon.vue'
</script>

<template>
    <div class="flex h-16 w-full justify-between p-5 sticky">
        <div class="flex items-center gap-2">
            <button
                class="flex aspect-square h-8 items-center justify-center rounded-full bg-black"
            >
                <LeftArrowIcon class="" />
            </button>
            <button
                class="hidden aspect-square h-8 rotate-180 items-center justify-center rounded-full bg-black lg:flex"
            >
                <LeftArrowIcon />
            </button>
        </div>
        <div class="flex items-center gap-2">
            <button
                class="flex h-8 items-center gap-2 rounded-full bg-black px-3 duration-0 hover:scale-105"
            >
                <DownloadIcon />
                <p class="font-semibold text-white">Install App</p>
            </button>
            <button
                class="flex aspect-square h-8 items-center justify-center rounded-full bg-black duration-0 hover:scale-105"
            >
                <ProfileIconVue />
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
