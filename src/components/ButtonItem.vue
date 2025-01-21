<template>
    <button class="transition-all duration-300" :class="VARIANTS[variant]">
        <slot />
    </button>
</template>
<script setup lang="ts">
const VARIANTS = {
    ghost: 'text-white enabled:hover:text-black',
    'ghost-inverse': 'text-primary enabled:hover:text-black',
    simple: 'text-white bg-primary enabled:hover:bg-white enabled:hover:text-primary',
    'simple-inverse': 'text-primary bg-white enabled:hover:bg-primary enabled:hover:text-white',
    none: '',
};

type ButtonItemProps = {
    variant?: keyof typeof VARIANTS;
};

defineOptions({
    name: 'ButtonItem',
});

withDefaults(defineProps<ButtonItemProps>(), { variant: 'simple' });
</script>
