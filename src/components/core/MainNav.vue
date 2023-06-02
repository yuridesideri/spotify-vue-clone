<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue'
import SearchIcon from '@/assets/icons/SearchIconLogic.vue'
import { useRoute, type RouteRecordName } from 'vue-router'

const route = useRoute()
function checkActiveNav(routeName: RouteRecordName) {
    return route.name === routeName ? 'text-white fill-white' : ''
}
</script>

<template>
    <div class="flex h-full w-full flex-col justify-center gap-5 p-2 pl-5 pr-5">
        <RouterLink
            to="/"
            id="home-link"
            class="flex items-center gap-5 fill-sptext font-bold text-sptext transition duration-300 ease-in-out hover:fill-white hover:text-white"
            :class="[checkActiveNav('home')]"
        >
            <HomeIcon class="aspect-square w-5" />
            <h1 class="font-bold text-inherit">Home</h1>
        </RouterLink>
        <RouterLink
            to="/search"
            id="search-link"
            class="flex items-center gap-5 fill-sptext font-semibold text-sptext transition duration-300 ease-in-out hover:fill-white hover:text-white"
            :class="[checkActiveNav('search')]"
        >
            <SearchIcon class="aspect-square w-5 hover:fill-white" :route-name="route.name"/>
            <h1 class="font-bold text-inherit">Search</h1>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss"></style>
