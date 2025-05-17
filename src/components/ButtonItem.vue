<template>
    <button
        :class="
            cn(
                'transition-all duration-300 enabled:cursor-pointer',
                VARIANTS[variant],
                inheritedClasses
            )
        "
    >
        <slot />
    </button>
</template>
<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';

const VARIANTS = {
    ghost: 'text-white enabled:hover:text-accent',
    'ghost-inverse': 'text-primary enabled:hover:text-accent',
    simple: 'text-primary bg-white dark:bg-muted enabled:hover:bg-primary enabled:hover:text-white',
    generic: 'rounded-lg p-2',
    none: '',
};

type ButtonItemProps = {
    variant?: keyof typeof VARIANTS;
    class?: ClassValue;
};

defineOptions({
    name: 'ButtonItem',
});

const props = withDefaults(defineProps<ButtonItemProps>(), { variant: 'simple' });
const inheritedClasses = computed(() => props.class ?? '');
</script>
