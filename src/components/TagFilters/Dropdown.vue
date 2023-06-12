<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-sptext hover:text-spwhite shadow-sm ">
        Recents
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute left-0 z-10 mt-2 w-36 origin-top-right rounded-md shadow-lg focus:outline-none bg-[#282828]">
        <div class="py-1 px-1">
          <p class="text-xs mb-3 mt-2 px-2 font-bold">Sort by</p>
          <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-[#3E3E3E] ' : '', 'block py-2.5 text-sm', 'text-white', 'px-2 rounded-sm']">Recents</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-[#3E3E3E] ' : '', 'block py-2.5 text-sm', 'text-white', 'px-2 rounded-sm']">Recently
            Added</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a href="#"
            :class="[active ? 'bg-[#3E3E3E] ' : '', 'block py-2.5 text-sm', 'text-white', 'px-2 rounded-sm']">Alphabetical</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-[#3E3E3E] ' : '', 'block py-2.5 text-sm', 'text-white', 'px-2 rounded-sm']">Creator</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
  
