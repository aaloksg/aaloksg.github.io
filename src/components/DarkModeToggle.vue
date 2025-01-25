<template>
    <ButtonItem
        variant="none"
        class="rounded-full p-3 text-white"
        :class="[
            darkMode
                ? 'hover:bg-white hover:text-yellow-400 active:bg-white active:text-yellow-400'
                : 'hover:bg-muted hover:text-white active:bg-muted active:text-white',
        ]"
        @click.stop="toggleMode"
    >
        <MDIcon :icon="darkMode ? LightModeIcon : DarkModeIcon" class="h-6 w-6" />
    </ButtonItem>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import ButtonItem from './ButtonItem.vue';

import DarkModeIcon from '@material-symbols/svg-600/rounded/dark_mode-fill.svg';
import LightModeIcon from '@material-symbols/svg-600/rounded/light_mode-fill.svg';
import MDIcon from './MDIcon.vue';

defineOptions({
    name: 'DarkModeToggle',
});

const darkMode = ref(false);

const toggleMode = () => {
    darkMode.value = !darkMode.value;

    localStorage.theme = darkMode.value ? 'dark' : 'light';
};

watch(
    () => darkMode.value,
    () => {
        document.documentElement.classList.toggle('dark', darkMode.value);
    }
);

onBeforeMount(() => {
    darkMode.value =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
});
</script>
