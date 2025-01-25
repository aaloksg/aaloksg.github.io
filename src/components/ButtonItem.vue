<template>
    <button class="transition-all duration-300" :class="VARIANTS[variant]">
        <slot />
    </button>
</template>
<script setup lang="ts">
const VARIANTS = {
    ghost: 'text-white enabled:hover:text-accent',
    'ghost-inverse': 'text-primary enabled:hover:text-accent',
    simple: 'text-primary bg-white dark:bg-muted enabled:hover:bg-primary enabled:hover:text-white',
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
