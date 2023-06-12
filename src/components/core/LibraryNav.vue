<script setup lang="ts">
import LibraryIcon from '@/assets/icons/LibraryIcon.vue'
import PlusIconVue from '@/assets/icons/PlusIcon.vue'
import RightArrowIconVue from '@/assets/icons/RightArrowIcon.vue'
import Playlist from '@/components/Playlists/Playlist.vue'
import SearchBar from '@/components/Playlists/SearchBar.vue'
import TagFilter from '@/components/TagFilters/TagFilter.vue'
import { RouterLink } from 'vue-router'
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon.vue';
</script>

<template>
    <div class="h-full w-full p-3 px-0">
        <header class="flex flex-col h-20 justify-between px-3">
            <section class="flex items-center justify-between fill-sptext px-2 pr-0">
                <RouterLink to=""
                    class="flex items-center gap-3 fill-sptext transition-all duration-200 ease-in-out hover:brightness-150">
                    <LibraryIcon class="w-5" />
                    <h1>Your Library</h1>
                </RouterLink>
                <div class="flex gap-2">
                    <button
                        class="flex aspect-square h-8 items-center justify-center rounded-full hover:bg-[var(--color-background-highlight)] hover:brightness-150">
                        <PlusIconVue class="h-4 justify-self-end fill-sptext" />
                    </button>
                    <button class="hidden lg:block">
                        <RightArrowIconVue
                            class="flex aspect-square h-8 items-center justify-center rounded-full hover:bg-[var(--color-background-highlight)] hover:brightness-125" />
                    </button>
                </div>
            </section>
            <section class="pr-3 relative w-full">
                <div
                style="box-shadow: -20px 0px 70px 13px #000000;"
                    class="absolute right-0 h-8 aspect-square rounded-full bg-[#202020] hover:brightness-105 hover:cursor-pointer flex justify-center items-center drop-shadow-[-0px_0_20px_rgba(0,0,0,1)] shadow-black z-10">
                    <LeftArrowIcon class="h-4 fill-sptext rotate-180" />
                </div>
                <TagFilter />
            </section>
        </header>
        <div class="playlists">
            <SearchBar />
            <main>
                <Playlist title="Liked Songs" type="Playlist" creator="586 songs"
                    icon="https://misc.scdn.co/liked-songs/liked-songs-300.png" />
                <Playlist title="Your Episodes" type="Saved & downloaded episodes"
                    icon="https://misc.scdn.co/your-episodes/SE-64.png" />
                <Playlist title="Primocast" type="Podcast" creator="Grupo Primo"
                    icon="https://i.scdn.co/image/ab6765630000955fa7b5d2464365bf9cfa5ce5ee" />
                <Playlist title="Coding Mode" type="Playlist" creator="Spotify"
                    icon="https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696" />
                <Playlist title="B-SIDE com Carlos Busch" type="Podcast" creator="Carlos Busch"
                    icon="https://i.scdn.co/image/ab6765630000955f9ae60f6e5ea1b3cfe445d8c0" />
                <Playlist title="Workout Music" type="Album" creator="Chris Heria"
                    icon="https://i.scdn.co/image/ab67616d000011ebe452d6f03675585a12a90456" />
            </main>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
