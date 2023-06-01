<script setup lang="ts">
defineProps<{
    tagName: string
}>()
</script>

<template>
    <button class="box-content flex h-4 items-center bg-[#2A2A2A] p-2 px-4 text-white min-w-fit">
        {{ tagName }}
    </button>
</template>

<style scoped lang="scss"></style>
