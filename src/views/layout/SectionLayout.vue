<template>
    <div
        class="flex h-full w-full flex-col overflow-y-hidden text-relative-xl xs:text-relative-lg sm:pt-4 md:text-relative-xs"
    >
        <div v-if="!isLargeScreen" class="px-10 py-3">
            <slot name="title">
                <h2 class="text-2xl">{{ title }}</h2>
            </slot>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import useIsLargeScreen from '@/composables/useIsLargeScreen';

defineOptions({
    name: 'SectionLayout',
});

type SectionLayoutProps = {
    title?: string;
};
withDefaults(defineProps<SectionLayoutProps>(), {
    title: '',
});

const { isLargeScreen } = useIsLargeScreen();
</script>
