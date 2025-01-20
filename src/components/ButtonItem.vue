<template>
    <button class="transition-all duration-300" :class="VARIANTS[variant]" target="_blank">
        <slot />
    </button>
</template>
<script setup lang="ts">
const VARIANTS = {
    ghost: 'text-white enabled:hover:text-black',
    'ghost-inverse': 'text-primary enabled:hover:text-black',
    simple: 'text-white enabled:hover:bg-white enabled:hover:text-primary',
    'simple-inverse': 'text-primary enabled:hover:bg-accent enabled:hover:text-white',
};

type ButtonItemProps = {
    variant?: keyof typeof VARIANTS;
};

defineOptions({
    name: 'ButtonItem',
});

withDefaults(defineProps<ButtonItemProps>(), { variant: 'simple' });
</script>
