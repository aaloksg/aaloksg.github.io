<template>
    <component :is="as" :class="cn('transition-all', SIZE_CLASSES[size], inheritedClasses)">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';
import { computed } from 'vue';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
export type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li';

const SIZE_CLASSES: Record<TextSize, string> = {
    '7xl': 'text-7xl',
    '6xl': 'text-6xl lg:text-7xl',
    '5xl': 'text-5xl sm:text-6xl md:text-7xl',
    '4xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    '3xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    '2xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    xl: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    lg: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    base: 'text-base sm:text-lg md:text-xl lg:text-2xl',
    sm: 'text-sm sm:text-base md:text-lg lg:text-xl',
    xs: 'text-xs sm:text-sm md:text-base lg:text-lg',
};

type RespTextProps = {
    size?: TextSize;
    as?: TextTags;
    class?: ClassValue;
};

const props = withDefaults(defineProps<RespTextProps>(), {
    size: 'lg',
    as: 'p',
});

const inheritedClasses = computed(() => props.class ?? '');
</script>
