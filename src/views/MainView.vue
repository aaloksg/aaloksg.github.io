<template>
    <div class="dark:bg-muted flex h-full w-full flex-col overflow-hidden bg-white">
        <div
            v-if="isLargeScreen"
            class="bg-primary sticky top-0 flex w-full items-center justify-stretch text-lg"
        >
            <nav class="flex w-full items-center justify-stretch">
                <RouterLink
                    v-for="button in navMenuButtons"
                    :key="`nav-menu-button-${button.text}`"
                    :to="button.path"
                    class="grow"
                >
                    <ButtonItem
                        :variant="button.path === path ? 'none' : 'none'"
                        class="group relative h-full w-full p-3 text-center whitespace-nowrap"
                        :class="[
                            button.path === path
                                ? clsx(
                                      'text-primary rounded-t-2xl pt-4 pb-2 text-xl font-bold',
                                      'border-t-primary border-t-8',
                                      'bg-white',
                                      'dark:bg-muted'
                                  )
                                : clsx(
                                      'font-light text-white',
                                      'enabled:hover:border-t-8',
                                      'dark:border-t-muted border-t-white'
                                  ),
                        ]"
                        :disabled="button.path === path"
                    >
                        {{ button.text }}
                        <!-- <div
                            :class="
                                clsx(
                                    'h-2 w-4/5 rounded-t-lg',
                                    'invisible group-enabled:group-hover:visible',
                                    'absolute bottom-0 left-1/2 -translate-x-1/2',
                                    'bg-gradient-to-t from-white to-primary dark:from-muted',
                                    'transition duration-500'
                                )
                            "
                        /> -->
                    </ButtonItem>
                </RouterLink>
            </nav>
            <DarkModeToggle class="mx-4" />
        </div>

        <MenuSidebar
            v-else
            :collapsed="menuCollapsed"
            side="left"
            class="pointer-events-auto absolute top-0 left-0 z-50 max-h-dvh transition"
            :class="[menuCollapsed ? 'w-0' : 'w-40']"
            @toggle-collapsed="menuCollapsed = !menuCollapsed"
            @close="menuCollapsed = true"
        >
            <nav class="flex flex-col items-center text-base transition">
                <RouterLink
                    class="w-full"
                    v-for="button in navMenuButtons"
                    :key="`nav-menu-button-${button.text}`"
                    :to="button.path"
                >
                    <ButtonItem
                        variant="none"
                        class="enabled:hover:text-primary dark:enabled:hover:bg-muted relative w-full p-4 text-center text-white enabled:hover:bg-white"
                        :disabled="button.path === path"
                        @click="menuCollapsed = true"
                    >
                        {{ button.text }}
                        <div
                            v-if="button.path === path"
                            class="absolute top-1/2 right-2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-white"
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
import clsx from 'clsx';

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
