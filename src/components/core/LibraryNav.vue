<script setup lang="ts">
import LibraryIcon from '@/assets/icons/LibraryIcon.vue'
import PlusIconVue from '@/assets/icons/PlusIcon.vue'
import RightArrowIconVue from '@/assets/icons/RightArrowIcon.vue'
import { RouterLink } from 'vue-router'
import TagFilter from '@/components/TagFilters/TagFilter.vue';  
</script>

<template>
    <div class="h-full w-full p-3 pl-5 pr-5">
        <header to="" class="flex items-center justify-between fill-sptext">
            <RouterLink
                to=""
                class="flex items-center gap-3 fill-sptext transition-all duration-200 ease-in-out hover:brightness-150"
            >
                <LibraryIcon class="w-5" />
                <h1>Your Library</h1>
            </RouterLink>
            <div class="flex gap-4">
                <button
                    class="flex aspect-square h-6 items-center justify-center rounded-full hover:bg-[var(--color-background-highlight)] hover:brightness-125"
                >
                    <PlusIconVue class="h-4 justify-self-end fill-sptext" />
                </button>
                <button>
                    <RightArrowIconVue
                        class="flex aspect-square h-6 items-center justify-center rounded-full hover:bg-[var(--color-background-highlight)] hover:brightness-125"
                    />
                </button>
            </div>
        </header>
          <TagFilter />
          <div class="playlists">
            
          </div>
        <div class="search">
            <!--Search & Group-->
        </div>
        <div class="library">
            <!--Shows/Playlists-->
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
