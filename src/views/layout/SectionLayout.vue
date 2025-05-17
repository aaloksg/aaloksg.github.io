<template>
    <div
        :class="
            cn(
                'text-relative-lg xs:text-relative-base md:text-relative-xs flex h-full w-full flex-col overflow-y-hidden sm:pt-4',
                inheritedClasses
            )
        "
    >
        <div v-if="!isLargeScreen" class="px-10 py-3">
            <slot name="title">
                <h2 class="text-primary text-2xl">{{ title }}</h2>
            </slot>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type ClassValue } from 'clsx';
import { cn } from 'clsx-for-tailwind';

import useIsLargeScreen from '@/composables/useIsLargeScreen';

defineOptions({
    name: 'SectionLayout',
});

type SectionLayoutProps = {
    title?: string;
    class?: ClassValue;
};
const props = withDefaults(defineProps<SectionLayoutProps>(), {
    title: '',
});

const { isLargeScreen } = useIsLargeScreen();

const inheritedClasses = computed(() => props.class);
</script>
