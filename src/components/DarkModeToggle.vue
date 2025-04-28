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
        <MDIcon :icon="darkMode ? LightModeIcon : DarkModeIcon" class="slow-rotate h-6 w-6" />
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

<style lang="css">
.slow-rotate {
    animation: rotate-animation 20s linear infinite;
}

@keyframes rotate-animation {
    0% {
        rotate: 0deg;
    }
    50% {
        rotate: 180deg;
    }
    100% {
        rotate: 360deg;
    }
}
</style>
