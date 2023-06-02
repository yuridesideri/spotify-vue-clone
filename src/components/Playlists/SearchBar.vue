<script setup lang="ts">
import SearchIcon from '@/assets/icons/SimpleSearchIcon.vue';
</script>

<template>
    <div class="flex">
        <button
            class="flex aspect-square w-8 items-center justify-center rounded-full fill-sptext hover:bg-[var(--color-background-highlight)] hover:fill-white hover:brightness-150"
        >
            <SearchIcon class="ml-[2px] mt-[2px] w-5" />
        </button>
        <!-- Drop Down in Vue ? -->
    </div>
</template>

<style scoped lang="scss"></style>
