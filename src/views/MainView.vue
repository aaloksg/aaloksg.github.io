<template>
    <div class="flex h-full w-full flex-col overflow-hidden bg-white dark:bg-muted">
        <div
            v-if="isLargeScreen"
            class="sticky top-0 flex w-full items-center justify-stretch bg-primary text-lg"
        >
            <nav class="flex w-full items-center justify-stretch">
                <RouterLink
                    v-for="button in navMenuButtons"
                    :key="`nave-menu-button-${button.text}`"
                    :to="button.path"
                    class="grow"
                >
                    <ButtonItem
                        :variant="button.path === path ? 'simple' : 'none'"
                        class="group relative h-full w-full whitespace-nowrap p-4 text-center"
                        :class="[
                            button.path === path
                                ? 'rounded-t-2xl text-xl font-bold'
                                : 'bg-primary font-light text-white',
                        ]"
                        :disabled="button.path === path"
                    >
                        {{ button.text }}
                        <div
                            class="invisible absolute bottom-0 left-1/2 h-2 w-4/5 -translate-x-1/2 rounded-t-lg bg-white transition duration-500 group-enabled:group-hover:visible dark:bg-muted"
                        />
                    </ButtonItem>
                </RouterLink>
            </nav>
            <DarkModeToggle class="mx-4" />
        </div>

        <MenuSidebar
            v-else
            :collapsed="menuCollapsed"
            side="left"
            class="pointer-events-auto absolute left-0 top-0 z-50 max-h-dvh transition"
            :class="[menuCollapsed ? 'w-0' : 'w-40']"
            @toggle-collapsed="menuCollapsed = !menuCollapsed"
            @close="menuCollapsed = true"
        >
            <nav class="flex flex-col items-center text-base transition">
                <RouterLink
                    class="w-full"
                    v-for="button in navMenuButtons"
                    :key="`nave-menu-button-${button.text}`"
                    :to="button.path"
                >
                    <ButtonItem
                        variant="none"
                        class="relative w-full p-4 text-center text-white enabled:hover:bg-white enabled:hover:text-primary dark:enabled:hover:bg-muted"
                        :disabled="button.path === path"
                        @click="menuCollapsed = true"
                    >
                        {{ button.text }}
                        <div
                            v-if="button.path === path"
                            class="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-white"
                        />
                    </ButtonItem>
                </RouterLink>
            </nav>
            <template #top-right-fixed>
                <DarkModeToggle />
            </template>
        </MenuSidebar>
        <RouterView class="h-full sm:h-auto sm:grow sm:overflow-y-auto" />
    </div>
</template>

<script setup lang="ts">
import MenuSidebar from '@/components/MenuSidebar.vue';
import { ref, toRefs } from 'vue';
import ButtonItem from '@/components/ButtonItem.vue';
import { useRoute } from 'vue-router';
import useIsLargeScreen from '@/composables/useIsLargeScreen';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

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
