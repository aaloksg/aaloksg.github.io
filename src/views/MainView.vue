<template>
    <div class="flex h-full w-full flex-col overflow-hidden">
        <nav
            v-if="isLargeScreen"
            class="sticky top-0 flex w-full items-center justify-stretch bg-primary text-lg"
        >
            <RouterLink
                v-for="button in navMenuButtons"
                :key="`nave-menu-button-${button.text}`"
                :to="button.path"
                class="grow"
            >
                <ButtonItem
                    variant="simple"
                    class="relative h-full w-full whitespace-nowrap p-4 text-center"
                    :class="[button.path === path ? 'text-xl font-bold' : 'font-light']"
                    :disabled="button.path === path"
                >
                    {{ button.text }}
                    <div
                        v-if="button.path === path"
                        class="absolute left-0 top-0 h-2 w-full rounded-b-lg bg-white transition duration-500"
                    />
                </ButtonItem>
            </RouterLink>
        </nav>
        <MenuSidebar
            v-else
            :collapsed="menuCollapsed"
            side="left"
            class="pointer-events-auto absolute left-0 top-0 z-50 max-h-full transition"
            :class="[menuCollapsed ? 'w-0' : 'w-40']"
            @toggle-collapsed="menuCollapsed = !menuCollapsed"
            @close="menuCollapsed = true"
        >
            <nav class="mt-12 flex flex-col items-center text-base transition">
                <RouterLink
                    class="w-full"
                    v-for="button in navMenuButtons"
                    :key="`nave-menu-button-${button.text}`"
                    :to="button.path"
                >
                    <ButtonItem
                        variant="simple"
                        class="relative w-full p-4 text-center"
                        :disabled="button.path === path"
                        @click="menuCollapsed = true"
                    >
                        {{ button.text }}
                        <div
                            v-if="button.path === path"
                            class="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
                        />
                    </ButtonItem>
                </RouterLink>
            </nav>
        </MenuSidebar>
        <RouterView class="h-full pl-4 sm:h-auto sm:grow sm:overflow-y-auto" />
    </div>
</template>

<script setup lang="ts">
import MenuSidebar from '@/components/MenuSidebar.vue';
import { ref, toRefs } from 'vue';
import ButtonItem from '@/components/ButtonItem.vue';
import { useRoute } from 'vue-router';
import useIsLargeScreen from '@/composables/useIsLargeScreen';

const { isLargeScreen } = useIsLargeScreen();

const { path } = toRefs(useRoute());

const menuCollapsed = ref(true);

const navMenuButtons = [
    {
        text: 'Bio',
        path: '/',
    },
    {
        text: 'Publication',
        path: '/publication',
    },
    {
        text: 'Projects',
        path: '/my-projects',
    },
    {
        text: 'Projects for fun',
        path: '/fun-projects',
    },
];
</script>
