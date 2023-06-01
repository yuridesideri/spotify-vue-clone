<script setup lang="ts">
import TagButton from '@/components/TagFilters/TagButton.vue'
</script>

<template>
    <div class="flex w-full overflow-auto no-scrollbar gap-2">
        <TagButton tagName="Playlists" />
        <TagButton tagName="Artists" />
        <TagButton tagName="Albums" />
        <TagButton tagName="Podcasts & Shows" />
    </div>
</template>

<style scoped lang="scss"></style>